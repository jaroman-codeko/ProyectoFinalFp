import { Box, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import { NombreUsuario } from './NombreUsuarioComponent'

export const Inicio = () => {

    const theme=useTheme();
    
  return (
    <>
    <Typography variant='h4' sx={{textAlign:"center",mt:"25px"}}>Bienvenido :  <NombreUsuario/></Typography>
    <Divider sx={{height:"0.24rem",my:"5px"}}></Divider>
    <Typography variant='h6' sx={{textAlign:"center",mt:"25px"}} >
        Aqui tienes todas las noticias recomendadas para ti: 
    </Typography>
    <Box sx={{display:'flex',justifyContent:"center"}}>

     <Table
      sx={{
        border: `2px solid ${theme.palette.primary.main}`,
        mt:"25px",
        width:"75%"    
    }}
    >
      <TableHead
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
        >
        <TableRow>
          <TableCell>
            <Typography
              variant="h6"
              
              sx={{ color: theme.palette.background.default,textAlign:"center"}}
              >
              Noticias
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {datos.map((dato, index) => ( */}
          <TableRow>
            <TableCell sx={{ color: theme.palette.text.primary }}>
             datos
            </TableCell>
          </TableRow>
        {/* ))} */}
      </TableBody>
    </Table>
                </Box>
    
    </>
  )
}
