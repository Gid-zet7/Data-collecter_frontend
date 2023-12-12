import { Link } from "react-router-dom";

const Public = () => {
  return (
    <>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Sign up</Link>
    </>
  );
};

export default Public;
