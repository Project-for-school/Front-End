import { Routes, Route } from "react-router-dom";
import Login from "./features/auth/components/login/login";
import HomePage from "./features/auth/components/homePgae/homePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
