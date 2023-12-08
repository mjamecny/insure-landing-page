import styled from "styled-components"

const StyledFeatures = styled.section`
  margin-top: 12.8rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
`

const Heading = styled.h2`
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-size: 4.4rem;
  text-align: center;
  color: var(--color-very-dark-violet);
  margin-top: 3.2rem;

  @media (min-width: 64em) {
    text-align: left;
    font-size: 5.2rem;
  }
`

const LineDecoration = styled.div`
  width: 130px;
  height: 1px;
  margin: 0 auto;
  background-color: var(--color-dark-grayish-violet);

  @media (min-width: 64em) {
    margin: 0 0;
  }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  margin-top: 3.2rem;

  @media (min-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: 64em) {
    align-items: flex-start;
  }
`

const FeatureIcon = styled.img``

const FeatureHeading = styled.h3`
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  color: var(--color-very-dark-violet);
  margin-top: 2.4rem;
`

const FeatureText = styled.p`
  text-align: center;

  @media (min-width: 64em) {
    text-align: left;
  }
`

export default function Features() {
  return (
    <StyledFeatures>
      <Container>
        <LineDecoration></LineDecoration>
        <Heading>We’re different</Heading>
        <CardsContainer>
          <FeatureCard>
            <FeatureIcon src="../public/icon-snappy-process.svg" />
            <FeatureHeading>Snappy Process</FeatureHeading>
            <FeatureText>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon src="../public/icon-affordable-prices.svg" />
            <FeatureHeading>Affordable Prices</FeatureHeading>
            <FeatureText>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon src="../public/icon-people-first.svg" />
            <FeatureHeading>People First</FeatureHeading>
            <FeatureText>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </FeatureText>
          </FeatureCard>
        </CardsContainer>
      </Container>
    </StyledFeatures>
  )
}
