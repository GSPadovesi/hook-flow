import { List } from "@/components";
import { useContext } from "react";
import { ClientApplicationContext } from "@/context";
import * as S from './page.styles'

export const Page = () => {
  const applications = useContext(ClientApplicationContext)

  return <S.Page>
    <List headers={applications?.header} applications={applications?.applications} />
  </S.Page>
}