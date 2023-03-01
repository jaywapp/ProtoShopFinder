import React, { useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Div = styled.div`
    width: 600px;
    height: 600px;
`

let kakaoMap;

export function KakaoMap() {
    return ( <Div id="map"/> )
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

export function ResizeKakaoMap( w, h ){
    console.log('Kakaomap - resize');
    console.log('width : ' + w + ' / ' + 'height : ' + h);

    var container = document.getElementById('map');
    
    if(container != null){
        container.style.width = w +'px';
        container.style.height = h +'px'; 
    }
}