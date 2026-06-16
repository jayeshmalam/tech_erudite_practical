export interface User {
  usr_id: number;
  usr_fname: string;
  usr_lname: string;
  usr_email: string;
  usr_profile_img: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}