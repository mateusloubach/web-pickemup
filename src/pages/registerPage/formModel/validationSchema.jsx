import * as Yup from "yup";
import registerFormModel from "./registerFormModel";

const {
  formField: { telegramID, email, password, confirmPassword },
} = registerFormModel;

const validationSchema = [
  Yup.object().shape({
    [telegramID.name]: Yup.string().required(`${telegramID.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string().required(
      `${confirmPassword.requiredErrorMsg}`
    ),
  }),
];

export default validationSchema;