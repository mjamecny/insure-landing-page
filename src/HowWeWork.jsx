import styled from "styled-components"

const StyledHowWeWork = styled.section`
  padding-inline: 2.4rem;
  margin-top: 8rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  background: url("../public/bg-pattern-how-we-work-mobile.svg"),
    var(--color-dark-violet);
  background-repeat: no-repeat;
  background-position: top right;
  padding: 6.4rem 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 64em) {
    background: url("../public/bg-pattern-how-we-work-desktop.svg"),
      var(--color-dark-violet);
    background-repeat: no-repeat;
    background-position: top right;
    flex-direction: row;
    justify-content: space-between;
    padding: 6.4rem 6.4rem;
  }
`

const Heading = styled.h2`
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-size: 4.4rem;
  line-height: 1.1;
  letter-spacing: 1px;
  color: var(--color-very-light-gray);
  text-align: center;

  @media (min-width: 64em) {
    font-size: 5.2rem;
    width: 50%;
    text-align: left;
  }
`

const Button = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border: 2px solid var(--color-very-light-gray);
  color: var(--color-very-light-gray);
  padding: 1.2rem 2.4rem;
  letter-spacing: 2px;
  align-self: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-very-light-gray);
    color: var(--color-dark-violet);
  }
`

export default function HowWeWork() {
  return (
    <StyledHowWeWork>
      <Container>
        <Heading>Find out more about how we work</Heading>
        <Button>How we work</Button>
      </Container>
    </StyledHowWeWork>
  )
}
