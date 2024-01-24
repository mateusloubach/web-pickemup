import registerFormModel from "./registerFormModel";

const {
  formField: { telegramID, email, password, confirmPassword },
} = registerFormModel;


const formInitialValues = {
  [telegramID.name]: "",
  [email.name]: "",
  [password.name]: "",
  [confirmPassword.name]: "",
};

export default formInitialValues;