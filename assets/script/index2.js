'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const myMap = select('.my-map');

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kZXJjaGVlbWEiLCJhIjoiY2xiZ3J3NnRsMGowajN2bXBtZjN6MGNheiJ9.r-6K7yKorR2l386nFb8-Qw';

function loadMap(center) {
    const map = new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: 4
    });
}

function getLocation(position) {
    const { latitude, longitude } = position.coords;
    loadMap([latitude.position.coords, longitude.position]);
}

function errorHandler(error) {
    print(error.message);
}

const options = {
    enableHighAccuracy: true
};

//   let geolocate = new mapboxgl.GeolocateControl({
//     positionOptions: {
//       enableHighAccuracy: true
//     },
//   });
const geo = navigator.geolocation;
geo.getCurrentPosition(getLocation, errorHandler, options);
// map.addControl(geo);
onEvent('load', window, function () {
    loadMap();
});
