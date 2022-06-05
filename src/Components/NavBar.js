import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  color: white;
  background-color: #299b01;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 30px;
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

const Login = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  background: transparent;
  border: none;
`;
const ImgUser = styled.img`
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Wrapper>
      <Logo>
        <ImgLogo src={logoImg} alt='logo' />
        <H1>MrDonald's</H1>
      </Logo>
      <Login>
        <ImgUser src={userImg} alt='User' />
        <span>войти</span>
      </Login>
    </Wrapper>
  </NavBarStyled>
);
