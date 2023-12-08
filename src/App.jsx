import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="dashboard" element={<DashboardLayout />} />
    </Routes>
  );
}

export default App;
