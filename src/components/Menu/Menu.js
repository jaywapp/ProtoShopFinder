import Datas from '../../datas/data'
import React, { useEffect } from 'react';
import styled from 'styled-components';

const mainColor = '#2a2b34';
const subColor = '#3d3d4c';

const MenuDiv = styled.div`
  grid-column: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${mainColor};
`;

const LogoDiv = styled.h1`
  color: white;
`;

const ListItemDiv = styled.div`
  color: white;
`;

function Menu( props ){

  return (
    <MenuDiv width={props.width} height={props.height} >
      <LogoDiv>토방으로뛰어</LogoDiv>
      <MenuItems/>
    </MenuDiv>
  );
}

function MenuItems( ){

  return (
    <div>
    {
      Datas.map(data=> MenuItem(data))
    }
    </div>
  );
}

function MenuItem( data ){
  return(
    <ListItemDiv>
      <p>{data.name}</p>
      <p>{data.address}</p>
    </ListItemDiv>
  )
}

export default Menu;