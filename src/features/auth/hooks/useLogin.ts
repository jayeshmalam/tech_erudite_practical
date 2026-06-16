import { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';

import { useAppDispatch } from '../../../hooks/redux';
import { enterAsGuest, loginUser } from '../authSlice';
import { validateLogin } from '../utils/authValidation';
import { STRINGS } from '../../../constants/strings';

const INITIAL_ERRORS = {
  email: '',
  password: '',
};

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const handleEmailChange = useCallback(
    (text: string) => {
      setEmail(text);

      if (errors.email) {
        setErrors(prev => ({
          ...prev,
          email: '',
        }));
      }
    },
    [errors.email],
  );

  const handlePasswordChange = useCallback(
    (text: string) => {
      setPassword(text);

      const validation = validateLogin(email, text);

      setErrors(prev => ({
        ...prev,
        password: validation.password ?? '',
      }));
    },
    [email],
  );

  const togglePasswordVisibility = useCallback(() => {
    setSecure(prev => !prev);
  }, []);

  const handleLogin = useCallback(async () => {
    const validationErrors = validateLogin(
      email,
      password,
    );

    setErrors({
      email: validationErrors.email ?? '',
      password: validationErrors.password ?? '',
    });

    if (
      validationErrors.email ||
      validationErrors.password
    ) {
      return;
    }

    try {
      await dispatch(
        loginUser({
          email,
          password,
        }),
      ).unwrap();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: STRINGS.LOGIN.LOGIN_FAILED,
        text2: String(error),
      });
    }
  }, [dispatch, email, password]);

  const handleGuestLogin = () => {
    dispatch(enterAsGuest());
  };
  return {
    email,
    password,
    secure,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    togglePasswordVisibility,
    handleGuestLogin,
  };
};