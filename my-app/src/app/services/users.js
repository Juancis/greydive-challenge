import { customFetch } from "../../utils/customFetch";
const URL = "http://localhost:3000";

export const getUsers = () => {
  return customFetch(`${URL}/api/users`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });
};

export const createUser = (body) => {
  return customFetch(`${URL}/api/users`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  });
};
