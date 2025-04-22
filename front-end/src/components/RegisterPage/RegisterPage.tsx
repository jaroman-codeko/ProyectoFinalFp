import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

//definir tipo
type FormData = {
  nombre: string;
  correo: string;
  contrasenya: string;
  confirmContrasenya: string;
};

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  //evento de tipo submit con el tipo que yo he creado de FormData
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const password = watch("contrasenya");

  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        textAlign="center"
        sx={{ my: "40px" }}
      >
        Registro del usuario
      </Typography>
      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Nombre"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />

          <TextField
            label="Correo"
            type="email"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Correo no válido",
              },
            })}
            error={!!errors.contrasenya}
            helperText={errors.contrasenya?.message}
          />

          <TextField
            label="Contraseña"
            type="password"
            {...register("contrasenya", {
              required: "La contraseña  es obligatoria",
              pattern: {
                value: /^.{9,}$/,
                message: "La contraseña  no válida",
              },
            })}
            error={!!errors.confirmContrasenya}
            helperText={errors.confirmContrasenya?.message}
          />

          <TextField
            label="Repetir contraseña"
            type="password"
            {...register("confirmContrasenya", {
              required: "Repite la contraseña",
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
            error={!!errors.confirmContrasenya}
            helperText={errors.confirmContrasenya?.message}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </Container>
    </>
  );
};
