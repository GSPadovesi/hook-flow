import styled from 'styled-components'

export const List = styled.div`
  width: 100%; 
  margin-top: 20px;
  overflow: visible;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: "Inter", sans-serif;
  overflow: visible;

`

export const TableContainer = styled.tr`
  &:nth-child(even){
    background-color: #f2f2f2;
  }
`

export const TableHeader = styled.th`
  padding: 16px 20px;
  text-align: left;
  background-color: rgb(16, 17, 34);
  color: white;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.18);
  }
`

export const TableContent = styled.td<{ $hasActions?: boolean }>`
  padding: 8px 8px 8px 16px;
  ${({ $hasActions }) => $hasActions && `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  `}
`

export const CardKey = styled.div`
  width: 180px;
  border: 2px solid grey;
  border-radius: 6px;
  padding: 4px 4px 4px 16px;
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`


















