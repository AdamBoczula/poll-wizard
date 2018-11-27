export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean | string; // if checkbox is not touched it's value is ""
}
