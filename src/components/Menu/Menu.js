import Datas from '../../datas/data'
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PickAround, kakaoMap, DisplayMarker, Pick, GetCurrentPosition } from '../KakaoMap/KakaoMap';

const mainColor = '#2a2b34';
const subColor = '#3d3d4c';

const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr 1fr 1fr 1fr 1fr;
    grid-row: 1;
    background-color: ${mainColor};
`;

const LogoDiv = styled.h1`
    grid-row: 1;
    color: white;
`;

const Button = styled.button`
    grid-column: ${(props) => props.index + 1};
    background-color: ${subColor};
    color: white;
    font-size: 30;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
`;

function Menu(){
  return (
    <MenuDiv>
      <LogoDiv>토방으로뛰어</LogoDiv>
      <Button index={1} onClick={() => Collect(1)}>반경 1KM</Button>
      <Button index={2} onClick={() => Collect(3)}>반경 3KM</Button>
      <Button index={3} onClick={() => Collect(5)}>반경 5KM</Button>
      <Button index={4} onClick={() => Collect(7)}>반경 7KM</Button>
      <Button index={5} onClick={() => Collect(10)}>반경 10KM</Button>
    </MenuDiv>
  );
}

function Collect(distance){

    PickAround(distance);
}

export default Menu;