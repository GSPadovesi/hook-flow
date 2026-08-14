import { Title } from '../title';
import type { ClientApplicationProps } from '@/types';
import { ChevronRight, KeyRound } from 'lucide-react';
import { ActionButton } from './actionButton';
import * as S from './list.styles'
import { useState } from 'react';

type ListProps = {
  headers: string[] | undefined,
  applications: ClientApplicationProps[] | undefined,
  onEdit?: (application: ClientApplicationProps) => void,
  onDelete?: (application: ClientApplicationProps) => void,
}

export const List = ({ headers, applications, onEdit, onDelete }: ListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <S.List>
    <S.Table>
      <S.TableContainer>
        {headers?.map((item, index) => (
          <S.TableHeader key={index}>
            <Title type="h3" color="#fff">{item}</Title>
          </S.TableHeader>
        ))}
        <S.TableHeader>
          <Title type="h3" color="#fff">Acoes</Title>
        </S.TableHeader>
      </S.TableContainer>
      {applications?.map((item) => {
        return <S.TableContainer key={item.id}>
          <S.TableContent>{item.name}</S.TableContent>
          <S.TableContent>{item.description}</S.TableContent>
          {item.keys && <S.TableContent>
            <S.CardKey onClick={() => setIsOpen(!isOpen)}>
              <KeyRound />
              {`${item.keys.length} / 3`}
              <ChevronRight />
            </S.CardKey>
          </S.TableContent>}
          <S.TableContent>{item.status === true ? "Ativo" : "Desativado"}</S.TableContent>
          <S.TableContent>
            <ActionButton application={item} onEdit={onEdit} onDelete={onDelete} />
          </S.TableContent>
        </S.TableContainer>
      })}
    </S.Table>
    {isOpen && <ModalKeys />}
  </S.List>
}


const ModalKeys = () => {
  return <h1>Aqui vai o modal de chaves</h1>
}