import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

function SignInModule() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const authenfication = () => {
    if (login === "admin" && password === "admin") {
      alert("authenfication success");
    } else {
      alert("authenfication failed");
    }
  };

  return (
    <Container id="signInModule" maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter your login and password
        </Typography>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            authenfication();
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            id="login"
            label="Login"
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            component={Link}
            to="/SignInCandidat"
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center" mt={4}>
            Already have an account?{" "}
            <Link
              to="/SignUp"
              style={{
                fontWeight: "bold",
                color: "#1976d2",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}

export default SignInModule;
