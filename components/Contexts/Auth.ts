import { createContext } from "react";

interface Props {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const UserContext = createContext<Props>({
  id: "",
  username: "",
  email: "",
  password: "",
});
