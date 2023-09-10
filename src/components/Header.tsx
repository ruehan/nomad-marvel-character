import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { darkMode } from '../utils/atom';
import { MdLightMode, MdModeNight } from "react-icons/md";

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

const DarkModeBtn = styled.div`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.body};
    font-size: 1.5rem;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`



function Header() {

    const [darkmode, setDarkMode] = useRecoilState(darkMode);

  return (
    <>
    <GlobalStyle />
    <HeaderContainer>
      <Logo>Marvel Characters</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <DarkModeBtn onClick={() => setDarkMode(!darkmode)} >
            {darkmode ? <MdLightMode /> : <MdModeNight />}
        </DarkModeBtn>
      </Menu>
    </HeaderContainer>
    </>
  );
}

export default Header;
