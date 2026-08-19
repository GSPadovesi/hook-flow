import styled from 'styled-components'

export const EditForm = styled.form`
  display: grid;
  gap: 12px;
`

export const Field = styled.label`
  display: grid;
  gap: 6px;

  input,
  select {
    width: 100%;
    padding: 8px;
  }
`

export const SubmitButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
`
