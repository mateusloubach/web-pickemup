import { useRef, useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "../../styles/map.css";
import maplibregl from "maplibre-gl";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";

const geoApi = {
  forwardGeocode: async (config) => {
    const features = [];

    try {
      let request =
        "https://nominatim.openstreetmap.org/search?q=" +
        config.query +
        "&format=geojson&polygon_geojson=1&addressdetails=1";
      const response = await fetch(request);
      const geojson = await response.json();

      for (let feature of geojson.features) {
        let center = [
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        let point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ["place"],
          center: center,
        };

        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
    }

    return {
      features: features,
    };
  },
};

const mapStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap Contributors",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
    },
  ],
};

export default function Map({ details, token }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat] = useState(-18.9113);
  const [lng] = useState(-48.2622);
  const [zoom] = useState(5);
  const marker = useRef(null);
  const geocoderControl = useRef(null);
  const navigationControl = useRef(null);

  let currentUserDetails = details.splice(0, 1)[0];
  let existingUser =
    currentUserDetails.hasOwnProperty("token") &&
    currentUserDetails.token === token
      ? true
      : false;

  useEffect(() => {
    if (map.current === null) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: mapStyle,
        center: [lng, lat],
        zoom: zoom,
      });
    }

    if (marker.current === null) {
      marker.current = new maplibregl.Marker({
        draggable: false,
        color: "#BE03FC",
      });
    }

    if (geocoderControl.current === null) {
      geocoderControl.current = new MaplibreGeocoder(geoApi, {
        maplibregl: maplibregl,
        // draggable: true,
        marker: false,
        showResultMarkers: { color: "#BE03FC" },
      });

      map.current.addControl(geocoderControl.current, "bottom-right");
    }

    if (navigationControl.current === null) {
      navigationControl.current = new maplibregl.NavigationControl();

      map.current.addControl(navigationControl.current, "top-right");
    }

    function emptyMap() {
      let geocoderResultListener = ({ result }) => {
        let markerElement = marker.current.getElement();

        let mapMoveListener = () => {
          let { lng, lat } = map.current.getCenter();

          marker.current.setLngLat([lng, lat]);
        };

        let markerClickListener = (e) => {
          map.current.off("move", mapMoveListener);
          markerElement.removeEventListener("click", markerClickListener);

          let { lng, lat } = marker.current.getLngLat();
          populatedMap([lng, lat]);
        };

        marker.current
          .setLngLat([result.center[0], result.center[1]])
          .addTo(map.current);
        map.current.on("move", mapMoveListener);
        markerElement.addEventListener("click", markerClickListener);
      };

      geocoderControl.current.on("result", geocoderResultListener);
    }

    function populatedMap(userLngLat) {
      let lngs = [];
      let lats = [];
      let markers = [];

      marker.current.setLngLat(userLngLat).addTo(map.current);

      lngs.push(userLngLat[0]);
      lats.push(userLngLat[1]);
      markers.push(marker.current);

      for (let detail of details) {
        let marker = new maplibregl.Marker({ draggable: false })
          .setLngLat([detail.point[0], detail.point[1]])
          .setPopup(
            new maplibregl.Popup().setHTML(
              `<p>Time: ${detail.time}</p><p>Contact: <a href="${detail.contact}" target="_blank">${detail.contact}</a></p>`
            )
          )
          .addTo(map.current);

        lngs.push(detail.point[0]);
        lats.push(detail.point[1]);
        markers.push(marker);
      }

      // map.current.removeControl(geocoderControl.current)
      // map.current.removeControl(navigationControl.current)
      map.current.fitBounds(
        [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ],
        { padding: 30 }
      );
    }

    existingUser
      ? populatedMap([currentUserDetails.point[0], currentUserDetails.point[1]])
      : emptyMap();
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}