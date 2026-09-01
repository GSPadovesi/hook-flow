import type { SelectProps } from '../../types'
import * as S from './select.styles'

export const Select = ({ label, helperText, id, options, placeholder, ...props }: SelectProps) => {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <S.Label htmlFor={selectId}>
      {label}
      <S.SelectWrapper>
        <S.Select id={selectId} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </S.Select>
      </S.SelectWrapper>
      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Label>
  )
}

Select.displayName = 'Select'
