import styled from 'styled-components'

export const ModalContent = styled.div`
  display: grid;
  gap: 20px;
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
  display: grid;
  gap: 4px;
  padding-right: 44px;
`

export const ModalSubtitle = styled.p`
  margin: 0;
  color: #56566a;
  line-height: 1.5;
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
  gap: 16px;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`
