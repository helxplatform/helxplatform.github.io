import React from "react";
import { Typography } from "@mui/material";
import { MaxWidthWrapper } from "../components/layout/maxWidthWrapper";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { FeedbackForm } from '../components/feedback-form'

export const Contact = () => {

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ldg7hcnAAAAAJ_4nMzQtUIH-SDvqnYLuFfxmUY5"
    >
      <MaxWidthWrapper maxWidth="md">
        <Typography variant="h1" textAlign="center">
          Contact Us
        </Typography>

        <FeedbackForm  />

      </MaxWidthWrapper>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;

export const Head = () => <title>Contact</title>;
