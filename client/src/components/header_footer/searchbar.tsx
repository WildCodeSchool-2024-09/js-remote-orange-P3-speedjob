import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    handleSubmit(e);
    navigate("/result");
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        type="submit"
        variant="outlined"
        
        onClick={handleClick}
        sx={{
          bottom: { xs: 48, md: 48 }, // Position par défaut
          ml: 1,
          p: 1.8,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 5,
          bgcolor: "white",
          color: "black",
          "@media (max-width: 768px)": {
            bottom: 48 - 3 * 16, // 3rem plus bas pour les écrans inférieurs à 768px
          },
        }}
      >
        CLIQUER ICI POUR TROUVER VOTRE FUTUR EMPLOI
      </Button>
    </Box>
  );
}

export default SearchBar;
