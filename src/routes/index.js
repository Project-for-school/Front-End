import Login from "../features/auth/components/login/login";
import SignUp from "../features/auth/components/register/register";

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

export const privateRoutes = [];
