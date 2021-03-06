import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.li`
  position: relative;

  width: 400px;
  height: 155px;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;

  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  font-size: 30px;
  color: white;
  z-index: 1;
  transition: all ease 0.3s;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
    transition: all ease 0.3s;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px black;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id} img={item.img}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</p>
      </Item>
    ))}
  </List>
);
