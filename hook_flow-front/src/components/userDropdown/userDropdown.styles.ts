import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const Trigger = styled.button<{ $isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 200px;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 28px;
  background: #fff;
  color: #111827;
  transition: border-color 0.2s ease, border-radius 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: #c7c9d1;
  }

  &:focus-visible {
    outline: none;
    border-color: #9d2dfd;
    box-shadow: 0 0 0 3px rgba(157, 45, 253, 0.16);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      position: relative;
      z-index: 21;
      border-bottom-color: transparent;
      border-radius: 18px 18px 0 0;
      box-shadow: 0 10px 24px rgba(17, 24, 39, 0.08);

      &:hover {
        border-color: #e5e7eb;
        border-bottom-color: transparent;
      }
    `}
`

export const Avatar = styled.img`
  display: block;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e3d8fc;
`

export const Menu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 1px);
  right: 0;
  z-index: 20;
  width: 200px;
  padding: 6px;
  border: 1px solid #e5e7eb;
  border-top: 0;
  border-radius: 0 0 18px 18px;
  background: #fff;
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.16);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-6px);
  transform-origin: top center;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.2s ease-in-out;

  ${({ $isOpen }) => $isOpen && css`
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  `}
`

export const MenuItem = styled.button<{ $danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    outline: none;
    background: ${({ $danger }) => ($danger ? '#fef2f2' : '#f3f4f6')};
  }
`

export const Separator = styled.div`
  height: 1px;
  margin: 6px 4px;
  background: #e5e7eb;
`
