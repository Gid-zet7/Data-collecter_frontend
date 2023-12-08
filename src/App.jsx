import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<DashboardLayout />} />
    </Routes>
  );
}

export default App;
