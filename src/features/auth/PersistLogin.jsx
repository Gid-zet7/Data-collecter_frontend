import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { PulseLoader } from "react-spinners";

const PersistLogin = () => {
  const [persist] = usePersist();
  //   Retrieve access token from the state
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    // console.log(effectRan.current, process.env.NODE_ENV);
    // eslint-disable-next-line no-undef
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          // const response =
          await refresh();
          // const { accessToken } = response.data
          setTrueSuccess(true);
        } catch (err) {
          console.log(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }
    // Clean up function sets effectRan to true
    return () => (effectRan.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;

  if (!persist) {
    // psersist: no
    content = <Outlet />;
  } else if (isLoading) {
    // persist: yes, token: no
    content = (
      <div className="loader-container">
        <PulseLoader color={"#000"} className="pulse-loader" />
      </div>
    );
  } else if (isError) {
    // persist: yes, token: no
    content = (
      <p>
        {`${error?.data?.message} - `}
        <Link to="/login">Please login again</Link>
      </p>
    );
  } else if (isSuccess && trueSuccess) {
    // persist: yes, token: yes
    content = <Outlet />;
  } else if (token && isUninitialized) {
    // persist: yes, token: yes
    content = <Outlet />;
  }

  return content;
};

export default PersistLogin;
