import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MapPin, AlertTriangle } from "lucide-react";

// Mock deforestation hotspots
const mockHotspots = [
  { lng: -60.0217, lat: -3.1190, severity: "high", area: "1.2 km²" }, // Amazon
  { lng: 105.8544, lat: -5.4520, severity: "medium", area: "0.8 km²" }, // Borneo
  { lng: 24.7706, lat: -2.8770, severity: "high", area: "2.1 km²" }, // Congo
  { lng: -52.2297, lat: -3.9939, severity: "low", area: "0.4 km²" }, // Brazil
];

const MapVisualization = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-60, -3],
      zoom: 2,
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    map.current.on("load", () => {
      // Add markers for hotspots
      mockHotspots.forEach((hotspot) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "50%";
        el.style.cursor = "pointer";
        el.style.background =
          hotspot.severity === "high"
            ? "rgba(255, 0, 0, 0.8)"
            : hotspot.severity === "medium"
            ? "rgba(255, 165, 0, 0.8)"
            : "rgba(255, 255, 0, 0.8)";
        el.style.border = "2px solid rgba(0, 255, 136, 0.5)";
        el.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.3)";

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 8px; color: #000;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">Deforestation Alert</h3>
            <p style="font-size: 12px; margin: 2px 0;">Severity: <strong>${hotspot.severity.toUpperCase()}</strong></p>
            <p style="font-size: 12px; margin: 2px 0;">Area: ${hotspot.area}</p>
          </div>
        `);

        new mapboxgl.Marker(el)
          .setLngLat([hotspot.lng, hotspot.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

  if (!isTokenSet) {
    return (
      <Card className="p-8 max-w-md mx-auto glass">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Mapbox Token Required</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            To view the interactive map, please enter your Mapbox public token.
            Get yours at{" "}
            <a
              href="https://mapbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="font-mono text-sm"
          />
          <Button
            onClick={() => setIsTokenSet(true)}
            disabled={!mapboxToken}
            className="w-full"
          >
            Load Map
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden glass">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Legend */}
      <div className="absolute bottom-8 left-8 glass-strong p-4 rounded-lg space-y-2 max-w-xs">
        <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Deforestation Severity
        </h4>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <span className="text-xs text-muted-foreground">High Risk</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-orange-500" />
          <span className="text-xs text-muted-foreground">Medium Risk</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-yellow-500" />
          <span className="text-xs text-muted-foreground">Low Risk</span>
        </div>
      </div>
    </div>
  );
};

export default MapVisualization;
