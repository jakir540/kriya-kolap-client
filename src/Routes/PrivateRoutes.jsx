import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <progress
        className="progress progress-primary w-56"
        value="100"
        max="100"
      ></progress>
    );
  }

  return <div></div>;
};

export default PrivateRoutes;
