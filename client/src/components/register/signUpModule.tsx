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
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
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

  const handleSubmit = () => {
    const selectedRole = role.societe
      ? "societe"
      : role.candidat
        ? "candidat"
        : "";

    const formData = new FormData();
    formData.append("fName", fName);
    formData.append("lName", lName);
    formData.append("email", email);
    formData.append("birthdate", birthdate);
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
            label="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
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
