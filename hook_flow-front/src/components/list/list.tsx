import { Title } from '../title';
import type { ListProps } from '@/types';
import * as S from './list.styles'

export const List = ({ headers, rows }: ListProps) => {
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
        {rows?.map((row) => (
          <S.TableContainer key={row.id}>
            {row.cells.map((cell, index) => (
              <S.TableContent key={`${row.id}-${index}`}>{cell}</S.TableContent>
            ))}
          </S.TableContainer>
        ))}
      </tbody>
    </S.Table>
  </S.List>
}
