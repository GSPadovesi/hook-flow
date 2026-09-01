import styled from 'styled-components'

export const Label = styled.label`
  display: grid;
  gap: 8px;
  color: #34344a;
  font-weight: 600;
`

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    width: 9px;
    height: 9px;
    border-right: 2px solid #6f6f82;
    border-bottom: 2px solid #6f6f82;
    pointer-events: none;
    transform: translateY(-65%) rotate(45deg);
  }
`

export const Select = styled.select`
  width: 100%;
  min-height: 48px;
  appearance: none;
  border: 1px solid #ded7ef;
  border-radius: 12px;
  background: #fff;
  color: #34344a;
  font: inherit;
  font-weight: 500;
  padding: 12px 44px 12px 16px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: #c7bbdf;
    background: #fcfbff;
  }

  &:focus {
    border-color: #7c5cff;
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.12);
  }

  &:disabled {
    cursor: not-allowed;
    background: #f4f2f8;
    color: #9a96a8;
  }
`

export const HelperText = styled.span`
  color: #6f6f82;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
`
