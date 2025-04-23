import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

export const Servicios = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", my: "30px" }}>
        Otros tipos de noticias
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        
      <Table
      sx={{
        border: `2px solid ${theme.palette.primary.main}`,
        mt:"25px",
        width:"75%"    
    }}
    >
      
      <TableBody sx={{background:theme.palette.secondary.main}}>
      <TableRow>
          <TableCell colSpan={2} sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              Ejemplo
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ color: theme.palette.text.primary }}>Dato A1</TableCell>
          <TableCell sx={{ color: theme.palette.text.primary }}>Dato A2</TableCell>
        </TableRow>


        <TableRow>
          <TableCell colSpan={2} sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              Ejemplo
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ color: theme.palette.text.primary }}>Dato B1</TableCell>
          <TableCell sx={{ color: theme.palette.text.primary }}>Dato B2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
        
      </Box>
    </>
  );
};
