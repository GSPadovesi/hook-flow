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

export const TableContent = styled.td`
  padding: 8px 8px 8px 16px;
`

export const EmptyContent = styled.td`
  padding: 32px 20px;
  text-align: center;
  background-color: #f8f8f8;
`
















