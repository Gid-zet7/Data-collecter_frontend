import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";
import Public from "./components/Public";
// import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Welcome from "./features/auth/Welcome";
import MigrantsList from "./features/migrants/MigrantsList";
import UsersList from "./features/users/UsersList";
import DataFormsList from "./features/dataForms/DataFormsList";
import NewDataForm from "./features/dataForms/NewDataForm";
import NewMigrantForm from "./features/migrants/NewMigrantForm";
import NewUserForm from "./features/users/NewUserForm";
import EditUser from "./features/users/EditUser";
import EditMigrant from "./features/migrants/EditMigrant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Public />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index path="welcome" element={<Welcome />} />
        <Route path="dataforms">
          <Route index element={<DataFormsList />} />
          <Route path="addform" element={<NewDataForm />} />
        </Route>
        <Route path="migrants">
          <Route index element={<MigrantsList />} />
          <Route path="addmigrant" element={<NewMigrantForm />} />
          <Route path="editmigrant/:id" element={<EditMigrant />} />
        </Route>
        <Route path="users">
          <Route index element={<UsersList />} />
          <Route path="adduser" element={<NewUserForm />} />
          <Route path="edituser/:id" element={<EditUser />} />
        </Route>
      </Route>
      {/* End of dashboard route */}
    </Routes>
  );
}

export default App;
