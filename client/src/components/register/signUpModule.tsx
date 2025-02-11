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
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [role, setRole] = useState({ societe: false, candidat: false });
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({
      societe: false,
      candidat: false,
      [event.target.name]: event.target.checked,
    });
  };

  const userData = {
    firstname: firstname,
    lastname: lastname,
    login: login,
    email: email,
    password: password,
    checkedPassword: checkedPassword,
    role: role,
    checked: checked,
  };

  const handleCreateAccount = () => {
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
    const selectedRole = role.societe
      ? "societe"
      : role.candidat
        ? "candidat"
        : "";

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("login", login);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("checkedPassword", checkedPassword);
    formData.append("role", selectedRole);
    formData.append("checked", checked.toString());

    if (selectedRole === "societe") {
      navigate("/signUpEntreprise");
    } else if (selectedRole === "candidat") {
      navigate("/signUpCandidat");
    }
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
            onChange={(e) => setLastname(e.target.value)}
            margin="normal"
          />
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
            onClick={() => {
              handleSubmit();
              handleCreateAccount();
            }}
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
