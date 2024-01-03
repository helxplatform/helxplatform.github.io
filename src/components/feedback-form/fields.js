import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { subjectOptions } from './config'
import { useTheme } from "@mui/material/styles";

//

export const NameField = () => {
  const { formState, register } = useFormContext()
  const theme = useTheme();

  return (
    <FormControl>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        { ...register('name') }
        error={ !!formState.errors.name }
        sx={{
          '.MuiFormLabel-root': {
            color: theme.palette.primary.main
          },
        }}
      />
      {
        'name' in formState.errors && <FormHelperText>{ formState.errors.name.message }</FormHelperText>
      }
    </FormControl>
  )
}

//

export const EmailField = () => {
  const { formState, register } = useFormContext()
  const theme = useTheme();

  return (
    <FormControl>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        { ...register('email') }
        error={ !!formState.errors.email }
        sx={{
          '.MuiFormLabel-root': {
            color: theme.palette.primary.main
          },
        }}

      />
      {
        'email' in formState.errors && <FormHelperText>{ formState.errors.email.message }</FormHelperText>
      }
    </FormControl>
  )
}

//

export const SubjectField = () => {
  const { formState, register } = useFormContext()
  const theme = useTheme();

  return (
    <FormControl>
      <TextField
        name="subject"
        label="Subject"
        variant="outlined"
        { ...register('subject')}
        error={ !!formState.errors.subject }
        sx={{
          '.MuiFormLabel-root': {
            color: theme.palette.primary.main
          },
        }}
      />
      {
        'subject' in formState.errors && <FormHelperText>{ formState.errors.subject.message }</FormHelperText>
      }
    </FormControl>
  )
}

//

export const MessageField = () => {
  const { formState, register } = useFormContext()
  const theme = useTheme();

  return (
    <FormControl>
      <TextField
        name="message"
        label="Message"
        variant="outlined"
        { ...register('message') }
        error={ !!formState.errors.message }
        multiline rows={ 5 }
        sx={{
          '.MuiFormLabel-root': {
            color: theme.palette.primary.main
          },
        }}

      />
      {
        'message' in formState.errors && <FormHelperText>{ formState.errors.message.message }</FormHelperText>
      }
    </FormControl>
  )
}

//

export const TokenField = ({ value }) => {
  return (
    <input
      type="hidden"
      name="token"
      value={ value }
    />
  )
}

TokenField.propTypes = {
  value: PropTypes.string.isRequired,
}
