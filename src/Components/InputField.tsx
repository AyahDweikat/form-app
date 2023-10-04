import React from "react";
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Fields } from "../Utils/Types";

const InputField: React.FC<Fields>  = ({ inputField, handleChange, handleBlur, values, errors, touched, label}) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"200px", alignItems:"flex-start", mt:"10px"}}>
      <label htmlFor="inputField">
        {label}
      </label>
      <TextField
        id={inputField}
        sx={{
          maxWidth: "200px",
          marginBlock:"10px",
          backgroundColor:"white"
        }}
        variant="filled"
        label={inputField =="mobileNumber" ? "05-XXXXXXXX" : ''}
        type={inputField.includes("assword")? "password": inputField}
        name={inputField}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[inputField]}
      />
      <Typography
        variant="body1"
        component="p"
        sx={{ pb: "10px", fontSize: "12px", color: "red" }}
      >
        {errors[inputField] && touched[inputField] && errors[inputField]}
      </Typography>
    </Box>
  );
};

export default InputField;
