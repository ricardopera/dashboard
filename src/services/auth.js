import { client, logged } from "../pages/login/Login";
export const TOKEN_KEY = "@realm-Token";
export const isAuthenticated = () => window.localStorage.getItem(TOKEN_KEY);
export const getToken = () => window.localStorage.getItem(TOKEN_KEY);
export const login = token => {
  window.localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  client.auth.logout()
  window.localStorage.removeItem(TOKEN_KEY);
};