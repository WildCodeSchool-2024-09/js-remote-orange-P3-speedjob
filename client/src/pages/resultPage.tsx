import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import MapIcon from "@mui/icons-material/Map";
import { TextField } from "@mui/material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type AnnoncesProps = {
  id: number;
  name: string;
  title: string;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
  date: string;
};

function Result() {
  const [annonces, setAnnonces] = useState([] as AnnoncesProps[]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery("");
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    handleSubmit(e);
    navigate("/result");
  };

  useEffect(() => {
    if (searchQuery === "") return;
    fetch(
      `${import.meta.env.VITE_API_URL}/api/annonces/search?searchQuery=${searchQuery}`,
    )
      .then((response) => response.json())
      .then((data: AnnoncesProps[]) => {
        setAnnonces(data);
      });
  }, [searchQuery]);

  return (
    <section
      id="results"
      className="flex flex-col items-center justify-center border-4 p-8"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="searchQuery" className="flex flex-col items-center justify-center">
              <TextField
                type="text"
                placeholder="Rechercher par métier, entreprise, secteur d'activité,..."
                id="query"
                value={searchQuery}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mt: 1,
                  mb: 2,
                  width: "200%",
                  backgroundColor: "white",
                  fontSize: "1.25rem",
                }}
              />
            </label>
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 }, p: 1.8 }}
              className="w-full md:w-auto"
            >
              Rechercher
            </Button>
          </div>
        </form>
      </Box>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-3xl font-bold mb-8">
          Votre recherche pour le poste {searchQuery} retourne {annonces.length}{" "}
          résultats:
        </div>
        <ul>
          {annonces?.map((annonce) => (
                       <Card key={annonce.id} sx={{ mb: 4, width: '100%', maxWidth: 'lg' }}>
                       <CardContent>
                         <Typography variant="h5" component="div" align="center">
                           {annonce.title}
                         </Typography>
                         <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 2 }}>
                            {annonce.company}
                          </Typography>
                         <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                    
                           <Typography variant="body2" color="text.secondary">
                             {annonce.date}
                           </Typography>
                         </Box>
                         <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                           {annonce.light_description}
                         </Typography>
                         <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                           {annonce.complete_description}
                         </Typography>
                         <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                           <MapIcon sx={{ mr: 1 }} />
                           <Typography variant="body2" color="text.secondary">
                             Paris, France
                           </Typography>
                           <EuroSymbolIcon sx={{ mr: 1 }} /> 
                          <Typography variant="body2" color="text.secondary">
                             {annonce.remuneration}
                           </Typography>
                           <AccessTimeIcon sx={{ mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                              {annonce.creation_date}
                            </Typography>
                         </Box>
                         <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                           {annonce.experience}
                         </Typography>
                         <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                           {annonce.work}
                         </Typography>
                         <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                           {annonce.field}
                         </Typography>

                         <Button
            fullWidth
            variant="contained"
            color="primary"
            type="button"
            sx={{ mt: 2 }}
            component={Link}
            to="/signIn"
          >
            Je me connecte
          </Button>
                       </CardContent>
                     </Card>
          ))}
        </ul>
        <div className="flex">
          pour les consulter inscrivez-vous ou identifiez vous:.
        </div>
        <div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="button"
            sx={{ mt: 2 }}
            component={Link}
            to="/signIn"
          >
            Je me connecte
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            component={Link}
            to="/signUp"
          >
            Je crée mon compte
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Result;
