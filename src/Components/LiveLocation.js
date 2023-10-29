import React, { Component } from 'react';
import L from 'leaflet';

class LiveLocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      marker: null,
      circle: null,
      zoomed: false,
    };
  }

  componentDidMount() {
    const { map } = this.state;
  
    if (!map) {
      const newMap = L.map('map');
      newMap.setView([51.505, -0.09], 13);
  
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(newMap);
  
      this.setState({ map: newMap });
      this.watchUserLocation();
    }
  }
  
  

  watchUserLocation() {
    const { map } = this.state;

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => this.success(pos),
        (err) => this.error(err)
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }

  success(pos) {
    const { map, marker, circle, zoomed } = this.state;
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;
  
    if (marker) {
      map.removeLayer(marker);
    }
    if (circle) {
      map.removeLayer(circle);
    }
  
    const newMarker = L.marker([lat, lng]).addTo(map);
    const newCircle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
  
    if (!zoomed) {
      map.fitBounds(newCircle.getBounds());
      this.setState({ zoomed: true });
    }
  
    map.setView([lat, lng]);
  
    this.setState({ marker: newMarker, circle: newCircle });
  }
  
  

  error(err) {
    if (err.code === 1) {
      alert('Please allow geolocation access');
    } else {
      alert('Cannot get current location');
    }
  }

  render() {
    return (
      <div id="map" style={{ height: '600px' }}>
        {/* Map will be rendered here */}
      </div>
    );
  }
}

export default LiveLocationMap;
