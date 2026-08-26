import styled from 'styled-components'

export const EditForm = styled.form`
  display: grid;
  gap: 18px;
`

export const Field = styled.label`
  display: grid;
  gap: 8px;
  color: #34344a;
  font-weight: 600;

  select {
    width: 100%;
    border: 1px solid #ded7ef;
    border-radius: 12px;
    padding: 14px 16px;
    background: #fff;
    outline: none;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 118px;
  border: 1px solid #ded7ef;
  border-radius: 12px;
  padding: 14px 16px;
  font: inherit;
  resize: vertical;
  outline: none;
`

export const HelperText = styled.span`
  color: #6f6f82;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
`
