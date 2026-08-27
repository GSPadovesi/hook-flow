import { UserContext } from "@/context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Page = () => {
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user?.role !== "Admin") navigate("/dashboard");
  }, [auth, navigate])

  return <h1>Ola, mundo</h1>
}
