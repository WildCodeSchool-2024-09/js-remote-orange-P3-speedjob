import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CopyrightIcon from "@mui/icons-material/Copyright";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import bg_header from "../../assets/images/bg_header.png";

export default function AccountMenu() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg_header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height="150px"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <img src="./src/assets/images/iconLogo.png" alt="logo speedJob" />
        </span>
        <React.Fragment>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "right",
                    top: 0,
                    right: 14,
                    width: 0,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/">Page d'Acceuil</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <HowToRegIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/signUp">S'inscrire</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/signin">Se connecter</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <WorkOutlineIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/jobboard">Accéder aux offres</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ArticleIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/blog">Accéder aux articles</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ConnectWithoutContactIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/contact">Contactez-nous</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <CopyrightIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/legal">Mentions légales</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ ml: 2 }}>
        <TextField
          type="text"
          placeholder="Rechercher par métier, entreprise, secteur d'activité,..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ mt: 10, mr: 0 }}
        />
        <Button
          component={Link}
          to="/result"
          variant="contained"
          color="primary"
          sx={{ mt: 10, mr: 3,  p: 2 }}
        >
          Rechercher
        </Button>
      </Box>
    </Box>
  );
}
