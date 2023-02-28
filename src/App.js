import './App.css';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import {KakaoMap, InitializeKakaoMap} from './components/KakaoMap/KakaoMap'

const startX = 33.450701;
const startY = 126.570667;

const width1 = 400;
const width2 = 1503;
const height = 936;


const AppDiv = styled.div`
    display: grid;
	  grid-template-columns: ${(props) => props.width}px 1fr;
    height: 936px;
`;

function App() {

  useEffect(() => Initialize(), []);

  return (
    <AppDiv className="App" width={width1}>
      <Menu width={width1} height={height}/>
      <KakaoMap width={width2} height={height} />
    </AppDiv>
  );
}

function Initialize(){
  InitializeKakaoMap(startX, startY)
  window.height = height;
}

export default App;
