import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router";

export const HeaderComponent = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            IANotices
          </Typography>
          <Box>
            <Button component={Link} color="inherit" to={"/index"} variant="outlined">
              Inicio
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to={"/services"}
              sx={{ marginInline: "10px" }}
            >
              Servicios
            </Button>
            <Button color="inherit"  to={"/auth/login"} variant="outlined" component={Link}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  );
};
