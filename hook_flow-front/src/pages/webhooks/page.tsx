import type { AppLayoutOutletContext } from "@/components/appLayout/appLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const Page = () => {
  const { setHeaderAction } = useOutletContext<AppLayoutOutletContext>();

  useEffect(() => {
    setHeaderAction({
      label: "Novo WebHook",
      onClick: () => console.log("Abrir modal pra adicionar um web hook")
    })

    return () => setHeaderAction(null);
  }, [setHeaderAction])

  return <h1>Ola, mundo</h1>
}
