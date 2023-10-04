import { Box, Button, Typography, } from "@mui/material";
import styles from "./signup.module.css";
import InputField from "./../../Components/InputField.tsx";
import SelectField from './../../Components/SelectField';
import {Formik} from "formik";
import { Values } from "../../Utils/Types.ts";
const Signup = () => {
  
  const validatePhoneNumber = (phoneNumber: string) => {
    const regex: RegExp =
      /^05\(?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumber.match(regex);
  };
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateUserName =(userName: string)=>{
    const regex = /^[a-zA-Z0-9_@-]{3,}\d*$/i;
    console.log(userName.match(regex))
    return userName.match(regex);
  }
  const validatePassword =(password: string)=>{
    const regex = /^(?=.*[@_-])(?=.*\d)[a-zA-Z0-9@_-]{6,24}$/;
    console.log(password.match(regex))
    return password.match(regex);
  }
  return (
    <Box sx={{ width: "500px", backgroundColor:"#eeeeee", height:"700px", m:"auto", p:"20px" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ pb: "10px", color:"black", textAlign:"left" }}
        >
          Sign Up
        </Typography>
        <Formik
          sx={{ display: "flex", justifyContent: "space-between" }}
          initialValues={{
            userName: "",
            fullName: "",
            age: "",
            country: "",
            mobileNumber: "",
            email: "",
            password: "",
            cPassword: "",
          }}
          validate={(values) => {
            const errors :Values = {
              userName: "",
              fullName: "",
              age: "",
              country: "",
              mobileNumber: "",
              email: "",
              password: "", 
              cPassword: "",
            };
            if (!values.userName) {
              errors.userName = "Required";
            }
            if(!validateUserName(values.userName)){
              errors.userName = "Only Use letters, numbers and those special characters {@,_,-}";
            }
            if (!values.fullName) {
              errors.fullName = "Required";
            }
            if (values.fullName.length < 3 || values.fullName.length > 15) {
              errors.fullName = "Full Name Password Should have at least 3 characters and 15 at most";
            }
            if (!values.country) {
              errors.country = "Required";
            }
            if (Number(values.age) < 18 || Number(values.age) > 100) {
              errors.age = "Age should be more than 18 and less than 100";
            }
            if (!values.age) {
              errors.age = "";
            }
            if (!values.mobileNumber) {
              errors.mobileNumber = "Required";
            }
            if (!validatePhoneNumber(values.mobileNumber)) {
              errors.mobileNumber = "Invalid Phone Number";
            }
            if (validatePhoneNumber(values.mobileNumber)) {
              errors.mobileNumber = "";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!validateEmail(values.email)) {
              errors.email = "Invalid Email";
            }
            if (validateEmail(values.email)) {
              errors.email = "";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.cPassword) {
              errors.cPassword = "Required";
            }
            if (values.cPassword !== values.password) {
              errors.cPassword = "Passwords didn't match";
              errors.password = "Passwords didn't match";
            }
            if(!validatePassword(values.password)){
              errors.password="Password must be at least 6 characters, at most 24 characters, also contain letters, numbers and at least one special character"
            }
            if (values.cPassword == values.password) {
              errors.password = "";
              errors.cPassword = "";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <form
              className={styles.formCard}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                values.userName = "";
                values.fullName = "";
                values.age = "";
                values.country = "";
                values.mobileNumber = "";
                values.email = "";
                values.password = "";
                values.cPassword = "";
              }}
              onReset={(e) => {
                e.preventDefault();
                handleReset();
                values.userName = "";
                values.fullName = "";
                values.age = "";
                values.country = "";
                values.mobileNumber = "";
                values.email = "";
                values.password = "";
                values.cPassword = "";
              }}
            >
              <InputField
                inputField={"userName"}
                label={"Name"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <InputField
                inputField={"fullName"}
                label={"Full Name"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <InputField
                inputField={"age"}
                label={"Age"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <SelectField
              inputField={"country"}
              label={"Country"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched} 
              />
              <InputField
                inputField={"mobileNumber"}
                label={"Mobile Number"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <InputField
                inputField={"email"}
                label={"Email"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <InputField
                inputField={"password"}
                label={"Password"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <InputField
                inputField={"cPassword"}
                label={"Confirm Password"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <Box sx={{ display: "flex", width: "600px", justifyContent:"flex-end", gap:"20px" }}>
              <Button
                  type="reset"
                  sx={{ width: '80px', my: "10px", border:"1px solid black", color:"black", backgroundColor:"white" }}
                  variant="contained"
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  sx={{
                    color:"white",
                    backgroundColor:"green",
                    width: '80px',
                    my: "10px",
                  }}
                  variant="contained"
                  disabled={
                    !values.userName.length ||
                    !values.fullName.length ||
                    !values.age.length ||
                    !values.country.length ||
                    !values.email.length ||
                    !values.mobileNumber.length ||
                    !values.password.length ||
                    !values.cPassword.length
                  }
                >
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
    </Box>
  );
};

export default Signup;
