import * as yup from 'yup'

//

 export const FORM_URL = `https://script.google.com/macros/s/AKfycbwZO611Ugw3K0_suaQxl1zUjajcX12Sau4XpsFO6lGJnRHRUIyNrrHgP5npAaFgNA-BgQ/exec`;

//

export const subjectOptions = [
  { value: "helx", displayText: "I'd like to learn more about HeLx" },
  { value: "other", displayText: "Other" },
]

//

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name.'),
  email: yup
    .string()
    .email('Invalid email format'),
  subject: yup
    .string()
    .required('Please enter a subject.'),
  message: yup
    .string()
    .required('Please enter a message.'),
})

//

export const defaults = {
  name: '',
  email: '',
  subject: '',
  message: '',
}