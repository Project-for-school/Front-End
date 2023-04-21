import Login from "../features/auth/components/login/login";
import SignUp from "../features/auth/components/register/register";
import PremiumPage from "../features/premium/components/premium";
import Demo from "../features/demo/demo";
import LandingPage from "../features/landingPage/";

export const publicRoutes = [
  { path: "/", component: LandingPage, layout: null },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/premium", component: PremiumPage },
  { path: "/demo", component: Demo },
];

export const privateRoutes = [];
