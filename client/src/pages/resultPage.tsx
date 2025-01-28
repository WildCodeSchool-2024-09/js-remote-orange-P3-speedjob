import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Annonces = {
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
  const [Annonces, setAnnonces] = useState([] as Annonces[]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery("");
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    handleSubmit(e);
    navigate("/result");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/annonces/search/${searchQuery}`)
      .then((response) => response.json())
      .then((data: Annonces[]) => {
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
            <label htmlFor="searchQuery">
              <TextField
                type="text"
                placeholder="Rechercher par métier, entreprise, secteur d'activité,..."
                id="query"
                value={searchQuery}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{ mt: 1, backgroundColor: "white" }}
              />
            </label>
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{ ml: 1, p: 1.8 }}
            >
              Rechercher
            </Button>
          </div>
        </form>
      </Box>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-3xl font-bold mb-8">
          Votre recherche pour retourne {Annonces.length} résultats:
        </div>
        <ul>
          {Annonces.map((Annonces) => (
            <Box
              key={Annonces.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <li>
                <p className="font-bold">{Annonces.title}</p>
                <AccessTimeIcon className="font-italic">
                  {Annonces.date}
                </AccessTimeIcon>
                <p>{Annonces.light_description}</p>
                <p>{Annonces.complete_description}</p>
                <span className="flex items-center">
                  <EuroSymbolIcon className="mr-1" fontSize="small" />
                </span>
                <p>{Annonces.remuneration}</p>
                <p>{Annonces.experience}</p>
                <p>{Annonces.work}</p>
                <p>{Annonces.field}</p>
              </li>
            </Box>
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
