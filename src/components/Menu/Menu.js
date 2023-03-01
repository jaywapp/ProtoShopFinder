import Datas from '../../datas/data'
import React, { useEffect } from 'react';
import styled from 'styled-components';

const mainColor = '#2a2b34';
const subColor = '#3d3d4c';

const MenuDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-row: 1;
  background-color: ${mainColor};
`;

const LogoDiv = styled.h1`
  grid-row: 1;
  color: white;
`;

function Menu(){
  return (
    <MenuDiv>
      <LogoDiv>토방으로뛰어</LogoDiv>
    </MenuDiv>
  );
}

export default Menu;