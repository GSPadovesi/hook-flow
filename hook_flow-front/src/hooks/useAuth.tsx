import { UserContext } from "@/context";
import { login } from "@/service";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/routes";
import type { loginProps, registerProps } from "@/types/auth";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  const onLoginSubmit = useCallback(async (props: loginProps) => {
    const { email, password } = props;
    const controller = new AbortController();
    setLoading(true);

    try {
      await login(email, password, controller.signal);
      await auth?.refreshSession();
      navigate(appRoutes.Dashboard)
    } catch (error) {
      if (controller.signal.aborted) return
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [auth, navigate]);

  const onRegisterSubmit = useCallback(async (_props: registerProps) => { }, [])
  const onLogout = useCallback(async () => { }, []);

  return { onLoginSubmit, onRegisterSubmit, onLogout, loading, error }
}
