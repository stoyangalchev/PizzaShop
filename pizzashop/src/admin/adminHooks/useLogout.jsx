import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminInfo");
    navigate("/admin/login");
  };

  return logout;
};

export default useLogout;
