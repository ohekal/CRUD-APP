import React from "react";
import { useSelector } from "react-redux";

const withLogIn = (Component) => {
  const EnhancedComponent = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? <Component /> : <>please login first </>;
  };

  return EnhancedComponent;
};
export default withLogIn;
