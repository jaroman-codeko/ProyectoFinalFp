import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import MultiSelectDropdown from "../multiDropdown/MultiSelectDropdown";

// Tipo para el formulario
type FormData = {
  nombre: string;
  correo: string;
  contrasenya: string;
  confirmContrasenya: string;
  noticias: string[];
};

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
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
            error={!!errors.correo}
            helperText={errors.correo?.message}
          />

          <TextField
            label="Contraseña"
            type="password"
            {...register("contrasenya", {
              required: "La contraseña es obligatoria",
              pattern: {
                value: /^.{9,}$/,
                message: "La contraseña debe tener al menos 9 caracteres",
              },
            })}
            error={!!errors.contrasenya}
            helperText={errors.contrasenya?.message}
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

          <Controller
            name="noticias"
            control={control}
            rules={{
              required: "Elige al menos una noticia",
              validate: (value) =>
                value.length > 0 || "Selecciona al menos una opción",
            }}
            render={({ field, fieldState }) => (
              <MultiSelectDropdown
                label="Noticias de Interés"
                value={field.value || []}
                onChange={field.onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </Container>
    </>
  );
};
