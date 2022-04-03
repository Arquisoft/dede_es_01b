import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";


function Bienvenida(): JSX.Element {


  const navigate = useNavigate();
  localStorage.setItem("token","");
  let prodId= localStorage.getItem("productoClickado");

  return (
    <>
          <h1>Bienvenido a AsturShop</h1>

          <br></br> <br></br> <br></br> <br></br> <br></br>
      
         <a className="boton"  onClick={() => navigate("/inicio")}  >Empezar</a
         >
     
    </>
  );
}

 export default Bienvenida;
