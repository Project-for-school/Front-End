import Login from "../features/auth/components/login/login";
import SignUp from "../features/auth/components/register/register";
import HomePage from "../features/homePgae/components/homePage";

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/", component: HomePage, layout: null },
];

export const privateRoutes = [];
