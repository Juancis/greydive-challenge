import { customFetch } from "../../utils/customFetch";
const URL = process.env.NEXT_PUBLIC_URL;

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
