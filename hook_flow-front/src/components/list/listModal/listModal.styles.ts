import styled from 'styled-components'

export const ModalContent = styled.div`
  display: grid;
  gap: 14px;
  position: relative;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ModalIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2effc;
`

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ModalCloseButton = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export const ModalBody = styled.div`
  display: grid;
  gap: 12px;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`

export const ModalButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
`
