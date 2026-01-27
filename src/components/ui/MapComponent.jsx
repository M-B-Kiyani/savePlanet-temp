import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  AttributionControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icons for different project types
const createCustomIcon = (projectType, category) => {
  let iconColor = "#28a745";
  let iconSymbol = "🌱";

  if (category === "renewable-energy") {
    iconColor = "#ffc107";
    iconSymbol = "⚡";
  } else if (category === "forest-conservation") {
    iconColor = "#28a745";
    iconSymbol = "🌳";
  } else if (category === "reforestation") {
    iconColor = "#198754";
    iconSymbol = "🌲";
  } else if (category === "ocean-conservation") {
    iconColor = "#0dcaf0";
    iconSymbol = "🌊";
  }

  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${iconColor};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        ${iconSymbol}
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

function MapComponent({ location, coordinates, projectType, category, title }) {
  // Don't render map if no valid coordinates
  if (!coordinates || !coordinates.lat || !coordinates.lng) {
    return (
      <div className="map-container">
        <div className="map-header">
          <h4>Project Location: {location}</h4>
        </div>
        <div className="map-placeholder">
          <div className="map-info">
            <div className="location-pin">📍</div>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Project Type:</strong> {projectType}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              {category
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const mapCoords = [coordinates.lat, coordinates.lng];
  const customIcon = createCustomIcon(projectType, category);

  return (
    <div className="map-container">
      <div className="map-header">
        <h4>Project Location: {location}</h4>
      </div>

      <div className="leaflet-map-wrapper">
        <MapContainer
          center={mapCoords}
          zoom={8}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
          scrollWheelZoom={true}
          attributionControl={false}
        >
          {/* Minimal attribution - you can remove this line to hide completely */}
          <AttributionControl position="bottomright" prefix="" />
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="Street Map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer checked name="Satellite">
              <TileLayer
                attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Terrain">
              <TileLayer
                attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          <Marker position={mapCoords} icon={customIcon}>
            <Popup>
              <div className="map-popup">
                <h5 style={{ margin: "0 0 10px 0", color: "#495057" }}>
                  {title}
                </h5>
                <p style={{ margin: "5px 0" }}>
                  <strong>Location:</strong> {location}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Type:</strong> {projectType}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Category:</strong>{" "}
                  {category
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "0.9em",
                    color: "#6c757d",
                  }}
                >
                  <strong>Coordinates:</strong> {coordinates.lat.toFixed(4)},{" "}
                  {coordinates.lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="map-controls-info">
        <small
          style={{ color: "#6c757d", display: "block", marginTop: "10px" }}
        >
          💡 Use the layer control (top right) to switch between map views.
          Click the marker for project details.
        </small>
      </div>
    </div>
  );
}

export default MapComponent;
