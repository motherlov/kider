import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../../../Redux/AuthSlice/AuthSlice";
import { reset_redirectToUpdate } from "../../../Redux/AuthSlice/AuthSlice";

export default function Registration() {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [mobile,setMobile] = useState('')
 
 const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
   

  const { status } = useSelector((s) => s?.Auth);
  const { redirect } = useSelector((state) => state.Auth);

 const dispatch = useDispatch();
 const navigate =useNavigate();

     const  submitData=(e)=>{
         e.preventDefault();
       const formData = new FormData();
       formData.append('name',name)
       formData.append("email",email);
       formData.append("password",password);
       formData.append("mobile",mobile);
         dispatch(signup(formData));     // dispatch(signup({name,email,password,mobile}))
     
     };


  

  useEffect(() => {
    dispatch(reset_redirectToUpdate(null));
  }, [dispatch]);

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
      // navigate("/");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirect]);


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up Page
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>

        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            autoComplete="name"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />


          <TextField
      label="Password"
      id="password"
      name="password"
      margin="normal"
            required
            fullWidth
            value={password}
       onChange={(e)=>setPassword(e.target.value)}
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

           <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            autoComplete="mobile"
            autoFocus
          />




          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

            onClick={submitData}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"I have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
