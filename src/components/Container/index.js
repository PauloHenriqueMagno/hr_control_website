import { ContainerStyled } from "./style";

const Container = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Container;