import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpModule = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  // const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [role, setRole] = useState({ societe: false, candidat: false });
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({
      ...role,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      if (name === "firstname") {
        setFirstname(value);
        if (value.length < 3) {
          setError("Le prénom doit contenir au moins 3 caractères");
        } else {
          setError("");
        }
      }
    };

  const handleCreateAccount = () => {
    const selectedRole = role.societe ? "societe" : "candidat";
    const userData = {
      firstname: firstname,
      lastname: lastname,
      login: login,
      email: email,
      password: password,
      checkedPassword: checkedPassword,
      role: selectedRole,
      checked: checked,
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/signIn");
      });
  };

  const handleSubmit = () => {
    handleCreateAccount();
  };

  return (
    <section id="signUpModule">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="16px"
          bgcolor="transparent"
          boxShadow="none"
          color="text.primary"
        >
          <Typography
            variant="h4"
            component="h4"
            fontWeight="fontWeightBold"
            gutterBottom
          >
            Sign Up
          </Typography>
          <TextField
            label="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Nom"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              handleChange(e);
            }}
            margin="normal"
          />
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={checkedPassword}
            onChange={(e) => setCheckedPassword(e.target.value)}
            margin="normal"
          />
          <Box display="flex" flexDirection="row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={role.societe}
                  onChange={handleRoleChange}
                  name="societe"
                  disabled={role.candidat}
                />
              }
              label="Société"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={role.candidat}
                  onChange={handleRoleChange}
                  name="candidat"
                  disabled={role.societe}
                />
              }
              label="Candidat"
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
            }
            label="I agree to the terms and conditions"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Typography variant="body2" align="center" mt={4}>
            Already have an account?{" "}
            <Link
              to="/SignIn"
              style={{
                fontWeight: "bold",
                color: "#1976d2",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default SignUpModule;