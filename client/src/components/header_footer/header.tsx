import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Designer from "../../assets/images/designer.png";
import { useAuth } from "../../hooks/useAuth";
import SearchBar from "./searchbar";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${Designer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height="150px"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <Link to="/">
            <img
              src="./src/assets/images/logoblackwhite.png"
              alt="logo speedJob"
              style={{ width: "10rem", height: "8rem", padding: "1rem" }}
            />
          </Link>
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
                <FavoriteIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/favorite">Accéder aux favoris</Link>
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
            {user?.isAdmin === 1 && (
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/Admin">Admin</Link>
              </MenuItem>
            )}
          </Menu>
        </React.Fragment>
      </Box>
      <SearchBar />
    </Box>
  );
}
