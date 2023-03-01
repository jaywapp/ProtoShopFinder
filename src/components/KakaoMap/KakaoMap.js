import React, { useState } from 'react';
import styled from 'styled-components';
import Datas from '../../datas/data'

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

        kakaoMap.relayout();
    }
}

export function Pick(x, y, desc){
    var coords = new kakao.maps.LatLng(y, x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    var marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: coords
    });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    var infowindow = new kakao.maps.InfoWindow({
        content:  '<div style="width:150px;text-align:center;padding:6px 0;">' + desc + '</div>'
    });
    
    infowindow.open(kakaoMap, marker);
}

export function DisplayMarker(lat, lon){

    var locPosition = new kakao.maps.LatLng(lat, lon)
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: kakaoMap, 
        position: locPosition
    }); 
    
    var iwContent = '<div style="padding:5px;color:red;">You are Here!</div>', // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(kakaoMap, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    kakaoMap.setCenter(locPosition);  
}

export function PickAround(distance){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            DisplayMarker(lat, lon);

            var aroundDatas = GetDatas(lat, lon, distance);
            var points = aroundDatas.map(data => {
                return new kakao.maps.LatLng(data.y, data.x);
            })

            points.push(new kakao.maps.LatLng(lat, lon));

            var bounds = new kakao.maps.LatLngBounds();    

            var i, marker;
            for (i = 0; i < points.length; i++) {
                // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
                marker = new kakao.maps.Marker({ position : points[i] });
                marker.setMap(kakaoMap);
                
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(points[i]);
            }

            aroundDatas.forEach(data => Pick(data.x, data.y, data.name));

            kakaoMap.setBounds(bounds);
        });

        console.log('fail to get current position');
    }
    else{

        console.log('Can not use geolocation on HTML5');
    }
}

function GetDatas(lat, lon, distance){
    var arr = new Array();

    Datas.forEach(data=>{

        var d = GetDistance(lat, lon, data.y, data.x);
        console.log('name : ' + data.name + '/' + 'distance : ' + d);

        if(d <= distance){
            console.log('▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲');
            arr.push(data);
        }
    })

    console.log(arr.length);

    return arr;
}

function GetDistance(lat1, lon1, lat2, lon2){
      
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

function toRad(Value) 
{
    return Value * Math.PI / 180;
}

