import styled from "styled-components"

const StyledHero = styled.section`
  background: url("../public/bg-pattern-intro-left-mobile.svg"),
    var(--color-dark-violet);

  @media (min-width: 64em) {
    background: url("../public/bg-pattern-intro-right-desktop.svg"),
      var(--color-dark-violet);
    background-repeat: no-repeat;
    background-position: top right;
    position: relative;
  }
`

const ImageBg = styled.img`
  display: none;
  @media (min-width: 64em) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`

const HeroContainer = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
`

const Content = styled.div`
  background: url("../public/bg-pattern-intro-left-mobile.svg"),
    var(--color-dark-violet);
  background-repeat: no-repeat;
  padding: 6.4rem 2.4rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 64em) {
    justify-content: center;
    background: none;
  }
`

const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 64em) {
    grid-column: 2/-1;
    grid-row: 1/2;
  }
`

const HeroDecoration = styled.div`
  display: none;

  @media (min-width: 64em) {
    display: block;
    width: 130px;
    height: 1px;
    background-color: var(--color-very-light-gray);
  }
`

const Heading = styled.h1`
  font-family: "DM Serif Display", sans-serif;
  color: var(--color-very-light-gray);
  font-weight: 400;
  font-size: 4.4rem;
  line-height: 1.2;
  text-align: center;
  margin-top: 4.8rem;

  @media (min-width: 64em) {
    text-align: left;
    font-size: 7.4rem;
    line-height: 1.05;
  }
`

const Text = styled.p`
  color: var(--color-very-light-gray);
  text-align: center;
  margin-top: 1.6rem;

  @media (min-width: 64em) {
    text-align: left;
  }
`

const Button = styled.button`
  border: 2px solid var(--color-very-light-gray);
  background-color: var(--color-dark-violet);
  text-transform: uppercase;
  color: var(--color-very-light-gray);
  padding: 0.8rem 3.2rem;
  margin-top: 2.4rem;
  align-self: center;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: var(--color-very-light-gray);
    color: var(--color-dark-violet);
  }

  @media (min-width: 64em) {
    align-self: flex-start;
  }
`

export default function Hero() {
  return (
    <StyledHero>
      <ImageBg
        src="../public/bg-pattern-intro-right-desktop.svg"
        alt="bg pattern"
      />
      <HeroContainer>
        <HeroImage src="../public/image-intro-mobile.jpg" alt="hero image" />

        <Content>
          <HeroDecoration></HeroDecoration>
          <Heading>Humanizing your insurance.</Heading>
          <Text>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </Text>
          <Button>View Plans</Button>
        </Content>
      </HeroContainer>
    </StyledHero>
  )
}
