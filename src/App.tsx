import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'


function App() {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: "#F7941D",
    '&:hover': {
      backgroundColor: "#F7941D",
    },
  };
  return (
    <>      
      <div className='telaLogin'>
        <TextField id="login" label="Login" variant="outlined" />
        <TextField id="senha" label="Senha" variant="outlined" />
        <p className="link">Esqueceu a senha? 
            <Link to="/alterarSenha" className="link">
              {'Clique aqui!'}
            </Link>
        </p>
        <Button id="realizarLogin" style={buttonStyle}>Conectar-se</Button> 
      </div>
    </>
  )
}

export default App
