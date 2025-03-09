
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Venue } from '@/utils/data';

// This should be replaced with an environment variable in a production app
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZS1wcm9qZWN0IiwiYSI6ImNsc2loMDZ0NjA0bzkya3BocXUzNWp0Y2oifQ.qgP8MIzMmQzlmIQUNWgeOA';

interface VenueMapProps {
  venue: Venue;
}

const VenueMap: React.FC<VenueMapProps> = ({ venue }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || mapInitialized) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [venue.coordinates.lng, venue.coordinates.lat],
      zoom: 13
    });

    // Add navigation controls
    newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for venue location
    const marker = new mapboxgl.Marker({ color: '#ef4444' })
      .setLngLat([venue.coordinates.lng, venue.coordinates.lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${venue.name}</h3><p>${venue.address}, ${venue.city}</p>`))
      .addTo(newMap);

    map.current = newMap;
    setMapInitialized(true);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [venue, mapInitialized]);

  return (
    <div ref={mapContainer} className="w-full h-80 rounded-xl overflow-hidden" />
  );
};

export default VenueMap;
