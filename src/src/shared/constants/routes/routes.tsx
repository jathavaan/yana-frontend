import { LoginPage } from "@pages/login";
import { RegisterPage } from "@pages/register";
import { RouteObject } from "react-router";

export const ROUTES: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
