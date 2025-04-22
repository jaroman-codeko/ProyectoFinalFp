import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const HeaderComponent = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            IANotices
          </Typography>
          <Box>
            <Button color="inherit" variant="outlined">
              Inicio
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ marginInline: "10px" }}
            >
              Servicios
            </Button>
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  );
};
