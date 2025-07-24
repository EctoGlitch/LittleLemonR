import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Map = () => {
  useEffect(() => {
    const container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map('map').setView([41.9001516, -87.6197041], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([41.9005516, -87.6200041]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'Karla, sans-serif' }}>Map Page</h1>
      <div
        id="map"
        style={{
          margin: 'auto',
          height: '400px',
          width: 'w-ful',
        }}
      ></div>
    </div>
  );
};

export default Map;