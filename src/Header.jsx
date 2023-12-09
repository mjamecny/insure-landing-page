import { useState } from "react"
import styled from "styled-components"

import Logo from "./ui/Logo"

const StyledHeader = styled.header``

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
`

const Nav = styled.nav`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: url("../public/bg-pattern-mobile-nav.svg"),
    var(--color-very-dark-violet);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: calc(100vh - 80px);
  padding-inline: 2.4rem;
  padding-top: 4.8rem;
  display: none;
  flex-direction: column;

  @media (min-width: 48em) {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    top: 0px;
    background: none;
    height: auto;
    padding-top: 0px;
    padding-inline: 0px;
    width: auto;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;

  @media (min-width: 48em) {
    flex-direction: row;
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-very-light-gray);
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: var(--color-very-dark-violet);
  }

  @media (min-width: 48em) {
    color: var(--color-dark-grayish-violet);
  }
`

const Hamburger = styled.img`
  cursor: pointer;

  @media (min-width: 48em) {
    display: none;
  }
`

const CloseButton = styled.img`
  cursor: pointer;

  @media (min-width: 48em) {
    display: none;
  }
`

const Button = styled.button`
  text-transform: uppercase;
  color: var(--color-very-light-gray);
  border: 2px solid var(--color-very-light-gray);
  background-color: transparent;
  margin-top: 2.4rem;
  padding-block: 1.6rem;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-very-dark-violet);
    color: var(--color-very-light-gray);
  }

  @media (min-width: 48em) {
    color: var(--color-dark-violet);
    border: 2px solid var(--color-dark-violet);
    margin-top: 0px;
    padding-block: 0.8rem;
    padding-inline: 3.2rem;
  }
`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        {!isOpen && (
          <Hamburger
            src="icon-hamburger.svg"
            alt="hamburger icon"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <CloseButton
            src="icon-close.svg"
            alt="hamburger icon"
            onClick={() => setIsOpen(false)}
          />
        )}
        <Nav>
          <NavList>
            <NavItem>
              <NavLink href="#">How we work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Account</NavLink>
            </NavItem>
          </NavList>
          <Button>View Plans</Button>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  )
}
