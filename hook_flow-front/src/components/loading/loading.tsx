import * as S from './loading.styles'

export const Loading = () => {
  return (
    <S.Loading aria-label="Carregando" role="status">
      <S.Spinner />
    </S.Loading>
  )
}

Loading.displayName = 'Loading'
