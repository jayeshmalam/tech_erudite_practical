import { api } from '../../../services/api';
import { LoginResponse } from '../types/auth.types';

export const loginApi = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const formData = new FormData();

  formData.append('email', email.trim());
  formData.append('password', password);

  const { data } = await api.post<LoginResponse>(
    '/login',
    formData,
  );

  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
};