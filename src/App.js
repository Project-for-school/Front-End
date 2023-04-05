import { Routes, Route } from "react-router-dom";
import HeaderDefault from "./components/layoutDefault/header/header";
import Login from "./features/auth/components/login/login";
function App() {
  return (
      <Routes>
        <Route path="/" element={<HeaderDefault />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
  );
}

export default App;
