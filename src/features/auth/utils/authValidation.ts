import { STRINGS } from "../../../constants/strings";

export interface LoginErrors {
  email?: string;
  password?: string;
}

export const validateLogin = (
  email: string,
  password: string,
): LoginErrors => {
  const errors: LoginErrors = {};

  if (!email.trim()) {
    errors.email = STRINGS.VALIDATION.EMAIL_REQUIRED;
  } else {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email =
        STRINGS.VALIDATION.INVALID_EMAIL;
    }
  }

  if (!password.trim()) {
    errors.password = STRINGS.VALIDATION.PASSWORD_REQUIRED;
  }

  return errors;
};