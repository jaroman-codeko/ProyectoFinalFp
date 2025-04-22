import { Container, Box, Typography, TextField, Button } from "@mui/material";

import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { imprimeValores } = useLogin({
    data: [
      { name: "email", value: email },
      { name: "pass", value: pass },
    ],
  });

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
      component="form"
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            width: "100%",
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" gutterBottom textAlign="center">
            Iniciar Sesión
          </Typography>

          <TextField
            fullWidth
            label="Correo Electrónico"
            margin="normal"
            variant="outlined"
            value={email}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            variant="outlined"
            value={pass}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Iniciar Sesión
          </Button>
          <Typography gutterBottom textAlign="center" sx={{ mt: 2 }}>
            No tienes una cuenta registrate{" "}
            <Link to={"/auth/register"}>aqui</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
