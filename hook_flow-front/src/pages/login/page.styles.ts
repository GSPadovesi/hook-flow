import styled from 'styled-components'

export const Page = styled.section`
  width: 100%;
  min-height: 100dvh;
  padding: 24px;
  background: #f6f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  min-height: 620px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(16, 17, 34, 0.14);

  @media (max-width: 768px) {
    min-height: auto;
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  padding: 56px;
  background: #101122;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    max-width: 420px;
    margin: 0;
    font-size: 42px;
    line-height: 1.1;
  }

  p {
    max-width: 380px;
    margin: 0;
    color: #d9c8ff;
    line-height: 1.6;
  }
`

export const ContentHeader = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 32px;
`

export const Item = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`

export const IconCircle = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid #9d2dfd;
  border-radius: 50%;
  color: #9d2dfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const Forms = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto;
`

export const SwitchText = styled.p`
  margin: 6px 0 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  color: #56566a;
`

export const Form = styled.form`
  padding: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  h2 {
    margin: 0 0 8px;
    font-size: 32px;
  }

  button {
    width: 100%;
    border-radius: 12px;
    padding: 14px 16px;
  }

  button {
    border: 0;
    background: #9d2dfd;
    color: #ffffff;
    cursor: pointer;
    font-weight: 700;
  }

  ${SwitchText} button {
    width: auto;
    padding: 0;
    background: transparent;
    color: #9d2dfd;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`
