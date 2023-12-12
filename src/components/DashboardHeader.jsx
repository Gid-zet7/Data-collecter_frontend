import { Button } from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";

const DATAFORMS_REGEX = /^dashboard\/dataforms(\/)?$/;
const MIGRANTS_REGEX = /^dashboard\/migrants(\/)?$/;
const USERS_REGEX = /^dashboard\/users(\/)?$/;

const DashboardHeader = () => {
  const { isAdmin, isResearcher } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // We get sendLogout function from our useSendLogoutMutation
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  // If logout is successful navigate user to public page
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  // These functions calls navigate to navigate the user to the dashboard/protected pages
  const onNewDataFormClicked = () => navigate("/dashboard/dataforms/addform");
  const onNewUserClicked = () => navigate("/dashboard/users/adduser");
  const onUsersClicked = () => navigate("/dashbard/users");
  const onNewMigrantClicked = () => navigate("/dashboard/migrants/addmigrant");
  const onMigrantsClicked = () => navigate("/dashboard/migrants");
  const onResearchFormsClicked = () => navigate("/dashboard/dataforms");
  const onLogoutButtonClicked = () => sendLogout();

  // Create logout button
  const logoutButton = (
    <Button onClick={onLogoutButtonClicked}> Log out</Button>
  );

  // Check if user is admin or researcher and not on the dataforms page then create/display new Research Form btn
  let newformButton = null;
  if (isAdmin || isResearcher) {
    if (!DATAFORMS_REGEX.test(pathname)) {
      newformButton = (
        <Button onClick={onNewDataFormClicked}>New Research form</Button>
      );
    }
  }

  // Check if user is admin or researcher and not on the dataforms page then create/display Research Forms btn
  let dataFormsButton = null;
  if (isAdmin || isResearcher) {
    if (!DATAFORMS_REGEX.test(pathname)) {
      dataFormsButton = (
        <Button onClick={onResearchFormsClicked}> Research Forms</Button>
      );
    }
  }

  // Check if user is admin or researcher and not on the migrants page then create/display add migrant btn
  let newMigrantButton = null;
  if (isAdmin || isResearcher) {
    if (!MIGRANTS_REGEX.test(pathname)) {
      newMigrantButton = (
        <Button onClick={onNewMigrantClicked}>Add Migrant </Button>
      );
    }
  }

  // Check if user is admin or researcher and not on the migrants page then create/display view migrants btn
  let migrantsButton = null;
  if (isAdmin || isResearcher) {
    if (!MIGRANTS_REGEX.test(pathname)) {
      migrantsButton = (
        <Button onClick={onMigrantsClicked}>View Migrants</Button>
      );
    }
  }

  // Check if user is admin and not on the users page then create/display add user btn
  let newUserButton = null;
  if (isAdmin) {
    if (!USERS_REGEX.test(pathname)) {
      newUserButton = <Button onClick={onNewUserClicked}>Add User </Button>;
    }
  }

  // Check if user is admin and not on the users page then create/display view users btn
  let usersButton = null;
  if (isAdmin) {
    if (!USERS_REGEX.test(pathname)) {
      usersButton = <Button onClick={onUsersClicked}>View Users </Button>;
    }
  }

  // We check if isLoading is true then we display the pulse loader
  let buttonContent;
  if (isLoading) {
    buttonContent = (
      <div className="loader-container">
        <PulseLoader color={"#000"} className="pulse-loader" />
      </div>
    );
  } else {
    // else we display the buttons
    buttonContent = (
      <>
        {newformButton}
        {dataFormsButton}
        <hr />
        {newMigrantButton}
        <hr />
        {migrantsButton}
        <hr />
        {newUserButton}
        <hr />
        {usersButton}

        {logoutButton}
      </>
    );
  }

  const errClass = isError ? "errmsg" : "offscreen";

  const divStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "2rem",
    width: "clamp(20rem, 45vw, 60rem)",
    padding: "0 1rem",
    fontSize: ".8rem",
    listStyle: "none",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#000",
  };

  const content = (
    <>
      <p className={errClass}>{error?.data?.message} </p>

      <header className="dash_header">
        <div className={`dash-header__container`} style={divStyles}>
          <Link to="/dash/posts" style={linkStyles}>
            <h1 className="dash-header__title">Migrant Flow</h1>
          </Link>
          <div className="user-icon">
            User Icon
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <svg
              height="12px"
              id="arrow"
              version="1.1"
              viewBox="0 0 512 512"
              width="12px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </svg>
            <nav className="dash-header__nav">{buttonContent}</nav>
          </div>
        </div>
      </header>
    </>
  );

  return content;
};

export default DashboardHeader;
