import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      sx={{ position: "relative", zIndex: 1, p: 2 }}
    >
      <TextField
        type="text"
        placeholder="Rechercher par métier, entreprise, secteur d'activité,..."
        value={searchQuery}
        onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mt: 1, backgroundColor: "white" }}
      />
      <Button
        component={Link}
        to="/result"
        variant="contained"
        color="primary"
        sx={{ ml: 1, p: 1.8 }}
      >
        Rechercher
      </Button>
    </Box>
  );
}

export default SearchBar;
