import styled from 'styled-components'

export const EventsContent = styled.div`
  display: grid;
  gap: 18px;
`

export const AddEventForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: start;
`

export const ErrorText = styled.span`
  color: #8f1d1d;
  font-size: 13px;
  line-height: 1.4;
`

export const EventsList = styled.ul`
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const EventRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid #ded7ef;
  border-radius: 8px;
  padding: 12px 14px;
  background-color: #fff;
`

export const RemoveButton = styled.button`
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8f1d1d;
  background-color: #fbeaea;
  cursor: pointer;
  flex: 0 0 auto;
`

export const EmptyEvents = styled.div`
  border: 1px dashed #cfc7dd;
  border-radius: 8px;
  padding: 22px;
  text-align: center;
  background-color: #faf9fd;
`
