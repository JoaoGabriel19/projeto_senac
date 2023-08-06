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
import NavBar from './navBar/navBar';

type RowData = {
  matricula: string;
  id: string;
  senha: string;
  nivel: string;
  status: string;
};

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#F7941D',
  '&:hover': {
    backgroundColor: '#F7941D',
  },
  padding: '15px',
  width: '50%',
  height: '20px',
  zindex: '-1'
};

const addNewbuttonStyle = {
  color: '#fff',
  backgroundColor: '#F7941D',
  '&:hover': {
    backgroundColor: '#F7941D',
  },
  padding: '15px',
  width: '100%',
  height: '50px'
};

const handleEdit = () => {
  //funcao chamada ao clicar o botão de editar
};

const handleAddNew = () => {
  //funcao chamada ao pressionar o botão de adicionar nova conta
  window.location.href = "/registro";
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
            "matricula": "",
            "id": "id",
            "senha": "",
            "nivel": "",
            "status": "Ativada/desativada"
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
      <NavBar />
      <div style={{ paddingTop: '60px' }}>
        <div id='planilha' style={{ marginTop: '5%' }}>
          {dataLoaded && data.length > 0 ? (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Matricula</TableCell>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Senha&nbsp;</TableCell>
                    <TableCell align="right">Nivel&nbsp;</TableCell>
                    <TableCell align="right">Status&nbsp;</TableCell>
                    <TableCell align="right">Ação&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.matricula}
                      </TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.senha}</TableCell>
                      <TableCell align="right">{row.nivel}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell id="idBtEditar" align="right">
                        <Button onClick={handleEdit} style={buttonStyle}>Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button id='adicionarNovo' style={addNewbuttonStyle} onClick={handleAddNew}>Adicionar Nova Conta</Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ADM;
