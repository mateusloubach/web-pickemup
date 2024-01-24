const registerFormModel = {
    formID: "registerForm",
    formField: {
      telegramID: {
        name: "telegramID",
        label: "Telegram Username*",
        requiredErrorMsg: "Telegram Username is required",
      },
      email: {
        name: "email",
        label: "Email*",
        requiredErrorMsg: "Email is required",
      },
      password: {
        name: "password",
        label: "Password*",
        requiredErrorMsg: "Password is required",
      },
      confirmPassword: {
        name: "confirmPassword",
        label: "Confirm Password*",
        requiredErrorMsg: "Confirming your password is required",
      },
    },
  };
  
  export default registerFormModel;