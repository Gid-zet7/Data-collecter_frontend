import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const onNewDataFormClicked = () => navigate("/dashboard/dataforms/addform");
  const onNewUserClicked = () => navigate("/dashboard/users/adduser");
  const onNewMigrantClicked = () => navigate("/dashboard/migrants/addmigrant");
  const onResearchFormsClicked = () => navigate("/dashboard/dataforms");

  return (
    <>
      <Button onClick={onNewDataFormClicked}>New Question form</Button>
      <Button onClick={onNewUserClicked}>New User form</Button>
      <Button onClick={onNewMigrantClicked}>New Migrant form</Button>
      <Button onClick={onResearchFormsClicked}>Research forms</Button>
    </>
  );
};

export default DashboardHeader;
