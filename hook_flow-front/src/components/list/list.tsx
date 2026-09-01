import { Title } from '../title';
import { Typography } from '../typography';
import type { ListProps } from '@/types';
import * as S from './list.styles'

export const List = ({ headers, rows, emptyMessage = 'Nenhum item encontrado.' }: ListProps) => {
  const hasRows = Boolean(rows?.length)
  const columnsCount = headers?.length || 1

  return <S.List>
    <S.Table>
      <thead>
        <S.TableContainer>
          {headers?.map((item) => <S.TableHeader key={item}>
            <Title type="h3" color="#fff">{item}</Title>
          </S.TableHeader>
          )}
        </S.TableContainer>
      </thead>
      <tbody>
        {hasRows ?
          rows?.map((row) => (
            <S.TableContainer key={row.id}>
              {row.cells.map((cell, index) => (
                <S.TableContent key={`${row.id}-${index}`}>{cell}</S.TableContent>
              ))}
            </S.TableContainer>
          )) :
          <S.TableContainer>
            <S.EmptyContent colSpan={columnsCount}>
              <Typography color="#555555">{emptyMessage}</Typography>
            </S.EmptyContent>
          </S.TableContainer>}
      </tbody>
    </S.Table>
  </S.List>
}
