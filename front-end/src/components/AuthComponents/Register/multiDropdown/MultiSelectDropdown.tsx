import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Chip,
  Box,
  FormHelperText,
} from "@mui/material";

interface MultiSelectDropdownProps {
  label: string;
  value: string[];
  onChange: (event: any) => void;
  error?: boolean;
  helperText?: string;
}

const opciones = [
  "Tecnología",
  "Ciencia",
  "Deportes",
  "Salud",
  "Internacional",
  "Politica"
];

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {opciones.map((nombre) => (
          <MenuItem key={nombre} value={nombre}>
            {nombre}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelectDropdown;
