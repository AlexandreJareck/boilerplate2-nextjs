import { Description, Logo, Title, Wrapper } from './styles'

const Main = () => {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Title>React</Title>
      <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
    </Wrapper>
  )
}

export default Main
