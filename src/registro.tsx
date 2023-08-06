import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './css/registro.css';

function Registro() {
  //Valores dos campos
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [nivel, setNivel] = useState('');

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#F7941D',
    '&:hover': {
      backgroundColor: '#F7941D',
    },
    margin: '20px',
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
    width: '100%',
  };

  const handleButtonClick = () => {
    //Requisição utilizada para enviar um JSON com os dados preenchidos no formulário
    const userData = { matricula, senha, nivel };
    const apiUrl = 'URL DA REQUISIÇÃO';
    axios
      .post(apiUrl, userData)
      .then((response) => {
        console.log('Sucesso!');
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <>
      <div id="container-form" className="container">
        <TextField
          id="matricula"
          label="matricula"
          variant="filled"
          style={textFieldCustom}
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <TextField
          id="senha"
          label="senha"
          variant="filled"
          style={textFieldCustom}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label id='nivel-label' htmlFor="nivel">Nível da Conta</label>
        <select
          name="nivel"
          id="nivel"
          className="selectCustom"
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
        >
          <option value="0"></option>
          <option value="1">Administrador</option>
          <option value="2">Comum</option>
        </select>
        <Button style={buttonStyle} onClick={handleButtonClick}>
          Cadastrar
        </Button>
      </div>
    </>
  );
}

export { Registro };
