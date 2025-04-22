import { Box, Container, Typography } from "@mui/material";

export const FooterComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} IANotices. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
};
