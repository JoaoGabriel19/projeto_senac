import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Navbar } from './navBar/navBar';
type RowData = {
    Nome: string;
    Email: string;
    Status: string;
    TipoDeConta: string;
    Senha: string;
  };
  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#F7941D',
    '&:hover': {
      backgroundColor: '#F7941D',
    },
    padding: '15px',
    width: '50%', // Define a largura do botão para preencher o contêiner pai
    height: '20px',
  };
  const handleEdit = () => {
    //funcao chamada ao clicar o botão de editar
};  

const ADM = () => {
    const [data, setData] = useState<RowData[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/MiauDoteCao/TesteSenac')
      .then(response => {
        setData(response.data);
        setDataLoaded(true);
        /* Formatação que deve ser utilizada no JSON
        [
            {
            "Nome": "Joao Silva",
            "Email": "email@email.com",
            "Status": "Ativa",
            "TipoDeConta": "Administrador",
            "Senha": "Senha123"
            }
        ] 
        */
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', width: '100%' }}>
        <Navbar />
      </div>
      <div>
        <div id='planilha' style={{ padding: '15%',  width: '100%'}}>
          {dataLoaded && data.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Status&nbsp;</TableCell>
                    <TableCell align="right">Tipo de Conta&nbsp;</TableCell>
                    <TableCell align="right">Senha&nbsp;</TableCell>
                    <TableCell align="right">Função&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Nome}
                      </TableCell>
                      <TableCell align="right">{row.Email}</TableCell>
                      <TableCell align="right">{row.Status}</TableCell>
                      <TableCell align="right">{row.TipoDeConta}</TableCell>
                      <TableCell align="right">{row.Senha}</TableCell>
                      <TableCell id="idBtEditar" align="right"><Button onClick={handleEdit} style={buttonStyle}>Editar</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ADM;
