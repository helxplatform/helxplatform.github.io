import React, { useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaxWidthWrapper } from "../components/layout/maxWidthWrapper";
import { useTheme } from "@emotion/react";

const FORM_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbwJlHgI1yxk9edvVR7f0-fbiAyg7gYx-ZvHUO8K6R1r5wxot-BA3_28VQEfAbxceIhbbQ/exec`;

const subjectOptions = [
  { value: "question", displayText: "I have a question" },
  { value: "suggestion", displayText: "I have a suggestion" },
  { value: "bug", displayText: "I found a bug!" },
  { value: "other", displayText: "Other" },
];

const defaults = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email."),
  subject: yup
    .string()
    .oneOf(subjectOptions.map((option) => option.value))
    .required("Please select the most applicable subject."),
  message: yup.string().required("Please enter a message."),
});

export const Contact = ({ presets }) => {
  const theme = useTheme();

  const formRef = useRef(null);
  const { 
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    register,
    reset,
    setFocus 
  } =
    useForm({
      schema,
      resolver: yupResolver(schema),
      defaultValues: { ...defaults, ...presets },
    });

  useEffect(() => {
    setFocus("name");
  }, []);

  const handleClickClearForm = () => {
    reset(defaults);
  };

  const onSubmit = () => {
    axios
      .post(FORM_SCRIPT_URL, new FormData(formRef.current))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <MaxWidthWrapper maxWidth="md">
      <Typography variant="h1" textAlign="center">
        Contact Us
      </Typography>
      <Paper
        elevation={4}
        sx={{ padding: theme.spacing(4), borderRadius: "16px" }}
      >
        <Stack component="form" ref={formRef} spacing={4}>
          <Stack direction="row" spacing={4} sx={{ "& > *": { flex: 1 } }}>
            {/* NAME */}
            <FormControl>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                required={true}
                {...register("name")}
                error={!!errors.name}
              />
              {"name" in errors && (
                <FormHelperText>{errors.name.message}</FormHelperText>
              )}
            </FormControl>

            {/* EMAIL */}
            <FormControl>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                required={true}
                {...register("email")}
                error={!!errors.email}
              />
              {"email" in errors && (
                <FormHelperText>
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
          </Stack>

          {/* SUBJECT */}
          <FormControl>
            <InputLabel id="subject-select-label">Subject</InputLabel>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Select
                  labelId="subject-select-label"
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  required={true}
                  {...field}
                  error={!!errors.subject}
                >
                  {subjectOptions.map((option) => (
                    <MenuItem
                      key={`subject-option-${option.value}`}
                      value={option.value}
                    >
                      {option.displayText}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {"subject" in errors && (
              <FormHelperText>
                {errors.subject.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* MESSAGE */}
          <FormControl>
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              required={true}
              {...register("message")}
              error={!!errors.message}
              multiline
              minRows={10}
            />
            {"message" in errors && (
              <FormHelperText>
                {errors.message.message}
              </FormHelperText>
            )}
          </FormControl>
          <Stack direction="row" gap={4} sx={{ "& > button": { flex: 1 } }}>
            <Button onClick={handleClickClearForm} variant="outlined">
              Clear
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              disabled={Object.keys(errors).length > 0}
            >
              Submit
            </Button>
          </Stack>

          {/* DIALOG */}
          <Dialog
            open={isSubmitted && Object.keys(errors).length === 0}
            onClose={() => reset()}
          >
            <DialogTitle>Form Submitted</DialogTitle>
            <Divider />
            <DialogContent>
              <Typography>
                Thank you for your interest in HeLx. We will respond to your
                inquiry as soon as possible.
              </Typography>
            </DialogContent>
            <DialogActions sx={{ m: 2 }}>
              <Button variant="contained" onClick={() => reset(defaults)}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Paper>
    </MaxWidthWrapper>
  );
};

export default Contact;

export const Head = () => <title>Contact</title>;
