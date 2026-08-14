import { List } from "@/components";
import { useContext } from "react";
import { ClientApplicationContext } from "@/context";
import * as S from './page.styles'

export const Page = () => {
  const applications = useContext(ClientApplicationContext)
  console.log(applications)

  return <S.Page>
    {/* <div style={{ width: '100%', maxWidth: '1080px', margin: '0 auto' }}> */}
    <List headers={applications?.header} applications={applications?.applications} />
    {/* </div> */}
  </S.Page>
}