import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  // const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
