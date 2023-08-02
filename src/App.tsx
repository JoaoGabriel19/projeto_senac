import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import marcaSenacfecomercioSeschorizontalNegativo from './images/marcaSenacfecomercioSeschorizontalnegativo.png';



function App() {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: "#F7941D",
    '&:hover': {
      backgroundColor: "#F7941D",
    },
    padding: '15px',
  };
  const textFieldCustom = {
    color: '#fff',
    backgroundColor: "#FFF",
    '&:hover': {
      backgroundColor: "#FFF",
    },
    padding: '5px',
    margin: '5px',
  };
  const handleButtonClick = () => {
    //Está função é chamada quando o botão é pressionado
  }
  return (
    <>      
      <div className='telaLogin'>
        <div className='partePrincipal'>
        <img src={marcaSenacfecomercioSeschorizontalNegativo} />
          <TextField id="login" label="Login" variant="filled" style={textFieldCustom}/>
          <TextField id="senha" label="Senha" type="password"variant="filled" style={textFieldCustom}/>
          <p className="link">Esqueceu a senha? 
              <Link to="/alterarSenha" className="link">
                {'Clique aqui!'}
              </Link>
          </p>
          <Button id="realizarLogin" style={buttonStyle} onClick={handleButtonClick}>Conectar-se</Button> 
        </div>
      </div>
    </>
  )
}

export default App
