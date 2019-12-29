/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibW9yZXRhY29zIiwiYSI6ImNrNGl6aThscTFmYnkzanBvZnM3dnRnOHUifQ.U2us46ZqnBbv-YN9ZoGdGw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/moretacos/ck4j59qwn4ep21cp9kmjptoeb',
    scrollZoom: false
    // center: [-118.113, 34.111],
    // zoom: 5,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
