import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './css/App.css';
import marcaSenacfecomercioSeschorizontalNegativo from './images/marcaSenacfecomercioSeschorizontalnegativo.png';

function App() {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#F7941D',
    '&:hover': {
      backgroundColor: '#F7941D',
    },
    padding: '15px',
    width: '50%',
  };

  const textFieldCustom = {
    color: '#fff',
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: '#FFF',
    },
    padding: '5px',
    margin: '5px',
    width: '50%',
  };

  const handleButtonClick = () => {
    // Esta função é chamada quando o botão é pressionado
    // Você pode implementar a lógica de login aqui
    window.sessionStorage.setItem("nivel" , "1");
    window.location.href = "/SemContato";
  };

  return (
    <>
      <div className="telaLogin">
        <div className="partePrincipal">
          <img src={marcaSenacfecomercioSeschorizontalNegativo} alt="Logo" style={{ marginBottom: '30px' }} />
          <TextField id="login" label="Login" variant="filled" style={textFieldCustom} />
          <TextField id="senha" label="Senha" type="password" variant="filled" style={textFieldCustom} />
          <p className="link">
            <span>Esqueceu a senha?</span>
            <Link to="/alterarSenha" className="link">
              <span>Clique aqui!</span>
            </Link>
          </p>
          <Button id="realizarLogin" style={buttonStyle} onClick={handleButtonClick}>
            Conectar-se
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;