import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");
    if (!adminInfo) {
      navigate("/admin/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  return loading;
};

export default useAuth;
