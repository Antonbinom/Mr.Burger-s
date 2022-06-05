import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/user.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 15px;
  color: white;
  background-color: #299b01;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin-left: 15px;
  font-size: 24px;
`;
const ImgLogo = styled.img`
  width: 50px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ImgUser = styled.img`
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald's</H1>
    </Logo>
    <Button>
      <ImgUser src={userImg} alt='User' />
      войти
    </Button>
  </NavBarStyled>
);
