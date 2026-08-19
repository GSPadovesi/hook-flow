import styled from 'styled-components'

export const KeyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #eef0f4;
  padding: 6px 12px;

`

export const KeyHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eef0f4;
  padding: 16px 0;

`
export const KeyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid #eef0f4;

`

export const KeyTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px 40px;
  align-items: center;
  gap: 16px;
  border-bottom: 2px solid #eef0f4;
  padding: 12px 16px;
`

export const KeyRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px 40px;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;

  & + & {
    border-top: 2px solid #eef0f4;
  }
`

export const KeyInfo = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const KeyIcon = styled.div`
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d2dfd;
  background-color: #f2effc;
`

export const KeyText = styled.div`
  min-width: 0;

  p {
    overflow-wrap: anywhere;
  }
`

export const KeyStatus = styled.span<{ $active: boolean }>`
  width: fit-content;
  border-radius: 999px;
  padding: 4px 10px;
  color: ${({ $active }) => ($active ? '#15803d' : '#b91c1c')};
  background-color: ${({ $active }) => ($active ? '#dcfce7' : '#fee2e2')};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
`

export const KeyActionsButton = styled.button`
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #191919;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #eef0f4;
  }
`

export const SecurityAlert = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 1px solid #dec8ff;
  border-radius: 8px;
  padding: 14px 16px;
  background-color: #f7f1ff;
`

export const SecurityIcon = styled.div`
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d2dfd;
`

export const SecurityText = styled.div`
  display: flex;
  flex-direction: column;
`

export const GeneratedKeyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #dec8ff;
  border-radius: 8px;
  padding: 16px;
  background-color: #f7f1ff;
`

export const GeneratedKeyValue = styled.code`
  width: 100%;
  border: 1px solid #dec8ff;
  border-radius: 8px;
  padding: 12px 14px;
  color: #101122;
  background-color: #ffffff;
  font-family: monospace;
  font-size: 14px;
  overflow-wrap: anywhere;
`
