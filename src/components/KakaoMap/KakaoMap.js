import React, { useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Div = styled.div`
    grid-column: 2;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`

let kakaoMap;

export function KakaoMap( props ) {
    
    let w = props.width;
    let h = props.height;

    console.log({w} + "/" + {h});

    return ( <Div id="map" width={w} height={h}/> )
}

export function InitializeKakaoMap(x, y){
    console.log('Kakaomap - Initialuze');

    const contaier = document.getElementById('map');
    const option = {
        center: new kakao.maps.LatLng(x, y),
        level: 3
    };

    kakaoMap = new kakao.maps.Map(contaier, option);
}