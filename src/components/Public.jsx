import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Public = () => {
  const headerStyles = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    zIndex: 1,
    width: "100vw",
    backgroundColor: "#fff",
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
    height: 100,
  };

  const ulStyles = {
    position: "fixed",
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

  const authContainerStyles = {
    display: "flex",
  };

  const secondSection = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6.3rem",
  };

  const buttonStyles = {
    padding: ".6em 1.2em",
    display: "flex",
    backgroundColor: "blue",
    border: "none",
    marginLeft: "3rem",
    borderRadius: 8,
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#fff",
  };

  const cardStyles = {
    padding: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    maxWidth: "30rem",
    borderRadius: 8,
    backgroundColor: "#fff",
  };

  return (
    <>
      <div
        className="Public"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
        }}
      >
        <header style={headerStyles}>
          <ul style={ulStyles}>
            <div className="public__title">
              <li>
                <h1 style={{ fontSize: "1.5rem" }}>
                  Migrant <span style={{ color: "blue" }}>Flow.</span>{" "}
                </h1>
              </li>
            </div>
            <div className="auth__container" style={authContainerStyles}>
              <li>
                <button className="login__btn" style={buttonStyles}>
                  <Link to={"/login"} style={linkStyles}>
                    Login
                  </Link>
                  <Login style={{ color: "#fff", marginLeft: 6 }} />
                </button>
              </li>
              <li>
                <button className="signup-link" style={{ display: "none" }}>
                  <Link to={"/signup"} style={linkStyles}>
                    Sign up
                  </Link>
                </button>
              </li>
            </div>
          </ul>
        </header>
        <section className="section__two" style={secondSection}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              maxWidth: "65rem",
            }}
          >
            <h1>
              Gathering Accurate Data to Enhance{" "}
              <span style={{ color: "blue", lineHeight: 1.2 }}>
                Migration Management{" "}
              </span>{" "}
              in Ghana
            </h1>
          </div>
        </section>
        <section style={{ marginBottom: "4rem" }}>
          <div
            className="section_wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              maxWidth: "50rem",
            }}
          >
            <p style={{ lineHeight: 1.5, fontSize: "1.5rem" }}>
              Migrant flow is a user-friendly, safe platform for gathering data
              that is especially intended for migration management in Ghana.
              With Migrant flow, researchers can design their own research forms
              and gather qualitative and quantitative data to help manage
              migration in Ghana.
            </p>
          </div>
        </section>
        <section style={{ marginBottom: "8rem" }}>
          <h2 style={{ fontSize: "1.8rem" }}>
            {" "}
            <span style={{ color: "blue" }}>Migration</span> Management
          </h2>
          <div className="section_three">
            <div className="bg-img" style={{ flex: 1 }}></div>
            <p
              style={{
                lineHeight: 1.5,
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                flex: 1,
                marginLeft: "1em",
              }}
            >
              Migration Management programmes in Ghana include a focus on
              Migrant Protection and Assistance{" "}
              <span style={{ color: "blue" }}>(MPA)</span> , including direct
              assistance to vulnerable migrants, counter human traffcking,
              assisted voluntary return and reintegration{" "}
              <span style={{ color: "blue" }}>(AVRR)</span> , migrant health,
              migration policy development, migration data management,
              immigration and border management{" "}
              <span style={{ color: "blue" }}>(IBM)</span> , labour migration
              and human development and overall capacity building on Migration
              Management.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#1d2541", height: "50vh" }}>
          <h2 style={{ color: "#fff", fontSize: "1.8rem" }}>
            Create research forms
          </h2>
          <div
            className="section_wrapper"
            style={{
              display: "flex",
            }}
          >
            <div className="section_wrapper" style={cardStyles}>
              <h3>Flexibility of creating your own research forms</h3>
              <p style={{ lineHeight: 1.5, fontSize: "1.3rem" }}>
                Set Research Questions with multiple choice answers
              </p>
            </div>
            <div className="section_wrapper" style={cardStyles}>
              <h3>Visualize Data with easy clicks</h3>
              <p style={{ lineHeight: 1.5, fontSize: "1.3rem" }}>
                Set Research Questions with multiple choice answers
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Public;
