import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import CheckArticle from "./checkArticle";
import CheckJob from "./checkJob";
import CheckUser from "./checkUser";

function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="admin tabs"
        sx={{
          "& .MuiTab-root": {
            color: "white",
            backgroundColor: "black",
            "&.Mui-selected": {
              color: "black",
              backgroundColor: "white",
            },
          },
        }}
      >
        <Tab label="Utilisateur" />
        <Tab label="Offres" />
        <Tab label="Articles" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && <CheckUser />}
        {value === 1 && <CheckJob />}
        {value === 2 && <CheckArticle />}
      </Box>
    </Box>
  );
}

export default Admin;
