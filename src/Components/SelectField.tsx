import React from "react";
import { Box, TextField, Typography, MenuItem } from "@mui/material";
import { Fields } from "../Utils/Types";
const countries = ["United Kingdom", "Japan", "Korea", "Spain", "Italy"];

const SelectField: React.FC<Fields> = ({inputField, handleChange, handleBlur, values, errors, touched, label}) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"200px", alignItems:"flex-start", mt:"10px"}}>
      <label htmlFor="">
        {label}
      </label>
      <TextField
        variant="filled"
        sx={{ width: "200px", mt:'10px' }}
        id="filled-select-country"
        select
        label=''
        defaultValue=""
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        //
        type={inputField}
        name={inputField}
      >
        {countries.map((country, idx) => (
          <MenuItem key={idx} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
      <Typography
        variant="body1"
        component="p"
        sx={{ pb: "10px", fontSize: "12px", color: "red" }}
      >
        {errors.country && touched.country && errors.country}
      </Typography>
    </Box>
  );
};

export default SelectField;
