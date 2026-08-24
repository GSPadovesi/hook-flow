import { login, logout, register, csrf } from "@/service";
import { useCallback, useContext, useState } from "react";
import { appRoutes } from "@/routes";
import { UserContext } from "@/context";
import type { loginProps, registerProps } from "@/types/auth";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  const onLoginSubmit = useCallback(async (props: loginProps) => {
    const { email, password } = props;
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      // await csrf();
      await auth?.createSession();
      navigate(appRoutes.Dashboard);
    } catch (error) {
      console.error(error);
      setError("Não foi possível realizar o login.");
    } finally {
      setLoading(false);
    }
  },
    [auth, navigate]
  );

  const onRegisterSubmit = useCallback(
    async ({ username, name, email, password }: registerProps) => {
      setError(null);
      setLoading(true);

      try {
        await register(username, name, email, password);
        await csrf();
        navigate(appRoutes.Dashboard);
      } catch (error) {
        console.error(error);
        setError("Não foi possível realizar o cadastro.");
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const onLogout = useCallback(async () => {
    setError(null);
    setLoading(true);

    try {
      await logout();
      auth?.clearSession();
      navigate(appRoutes.Login);
    } catch (error) {
      console.error(error);
      setError("Não foi possível sair da conta.");
    } finally {
      setLoading(false);
    }
  }, [auth, navigate]);

  return {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    loading,
    error
  };
};
