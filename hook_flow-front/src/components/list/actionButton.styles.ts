import styled from 'styled-components'

export const Actions = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`

export const ActionsTrigger = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid #d8dce5;
  border-radius: 6px;
  background: #fff;
  color: #101122;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #f6f7f9;
  }

  &:focus-visible {
    outline: 2px solid #4f7cff;
    outline-offset: 2px;
  }
`

export const ActionsMenu = styled.div`
  min-width: 128px;
  padding: 4px;
  border: 1px solid #d8dce5;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(16, 17, 34, 0.14);
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 2;
`

export const ActionsMenuItem = styled.button<{ $danger?: boolean }>`
  width: 100%;
  min-height: 36px;
  border: 0;
  border-radius: 4px;
  padding: 0 10px;
  background: transparent;
  color: ${({ $danger }) => ($danger ? '#b42318' : '#101122')};
  display: flex;
  align-items: center;
  gap: 8px;
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({ $danger }) => ($danger ? '#fff1f0' : '#f6f7f9')};
  }

  &:focus-visible {
    outline: 2px solid #4f7cff;
    outline-offset: 1px;
  }
`
