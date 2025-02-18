import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { Box, Typography, Paper } from "@mui/material";

const AboutMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView([48.8566, 2.3522], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([48.8566, 2.3522]).addTo(map).bindPopup("SpeedJob").openPopup();

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <Paper elevation={4} sx={{ p: 4, mb: 4, width: "100%" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Localisation
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nous sommes situés au cœur de Paris, à proximité de nombreux points
        d'intérêt.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Adresse : 123 Rue Exemple, 75000 Paris, France
      </Typography>
      <Typography variant="body1" gutterBottom>
        Téléphone : +33 1 23 45 67 89
      </Typography>
      <Box
        ref={mapContainerRef}
        sx={{ height: "680px", width: "785px", borderRadius: 1 }}
      />
    </Paper>
  );
};

export default AboutMap;
