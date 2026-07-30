import { UserContext } from "@/context";
import { login, logout, register } from "@/service";
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

  const onRegisterSubmit = useCallback(async (props: registerProps) => {
    const { username, name, email, password } = props;
    const controller = new AbortController();
    setLoading(true);

    try {
      await register(username, name, email, password, controller.signal);
      await auth?.refreshSession();
      navigate(appRoutes.Dashboard);
    } catch (error) {
      if (controller.signal.aborted) return
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [auth, navigate])

  const onLogout = useCallback(async () => {
    setLoading(true);

    try {
      await logout();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { onLoginSubmit, onRegisterSubmit, onLogout, loading, error }
}
