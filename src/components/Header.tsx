import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat Alternates', sans-serif;
    }
`

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const Menu = styled.nav`
  display: flex;
  gap: 1rem;
`;

const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #3c3f41;
  }
`;

function Header() {
  return (
    <>
    <GlobalStyle />
    <HeaderContainer>
      <Logo>Marvel Characters</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </Menu>
    </HeaderContainer>
    </>
  );
}

export default Header;
