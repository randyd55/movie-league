import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a2e;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffd700;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffd700;
    color: #1a1a2e;
  }

  ${props => props.active && `
    background-color: #ffd700;
    color: #1a1a2e;
  `}
`;

function Header() {
    const location = useLocation();

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo>🎬</Logo>
                <Title>Movie Fantasy League</Title>
            </LogoContainer>
            <nav>
                <NavList>
                    {['Home', 'Leagues', 'Movies', 'Profile'].map((item) => (
                        <li key={item}>
                            <NavItem
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                active={location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                            >
                                {item}
                            </NavItem>
                        </li>
                    ))}
                </NavList>
            </nav>
        </HeaderContainer>
    );
}

export default Header;