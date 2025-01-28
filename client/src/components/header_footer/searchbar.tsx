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
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ ml: 1, p: 1.8 }}
      >
        Rechercher
      </Button>
    </Box>
  );
}

export default SearchBar;
