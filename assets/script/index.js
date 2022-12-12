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
const mesg = select('.mesg');
const round = select('.round');


mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kZXJjaGVlbWEiLCJhIjoiY2xiZ3J3NnRsMGowajN2bXBtZjN6MGNheiJ9.r-6K7yKorR2l386nFb8-Qw';


function getLocation(position) {
    round.style.display = 'none';
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
        const map = new mapboxgl.Map({
            container: 'map2',
            style: 'mapbox://styles/mapbox/streets-v12',
            attributionControl: false,
            center: [longitude, latitude],
            zoom: 16,
        });
        const marker = new mapboxgl.Marker()
        .setLngLat([longitude ,latitude])
        .addTo(map);
}



   function errorHandler(error) {
    mesg.style.display = 'inline-block';
    round.style.display = 'none';
    console.log(error.message);
  }

  const options = {
    enableHighAccuracy: true
  };

onEvent('load', window, function () {
    if (navigator.geolocation) {
        const geo = navigator.geolocation;
        geo.getCurrentPosition(getLocation, errorHandler, options);
      } else {
        console.log('Geolocation is not supported by your old browser');
      }
});