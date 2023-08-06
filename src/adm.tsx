import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

const handleEdit = (rowData: RowData) => {
  axios.put("LINK/DA/REQUISIÇÃO", rowData)
    .then(response => {
      console.log('Data updated:', response.data);
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });
};


const handleAddNew = () => {
  //funcao chamada ao pressionar o botão de adicionar nova conta
  window.location.href = "/registro";
};

const ADM = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

 /* const [matricula, setMatricula] = useState('');
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  const [nivel, setNivel] = useState('');
  const [status, setStatus] = useState(''); */

  const handleInputChange = <T extends keyof RowData>(e: React.ChangeEvent<{ name?: string; value: unknown }>, property: T, index: number) => {
    const { value } = e.target;
    setData((prevData) => {
      const newData = [...prevData];
      newData[index][property] = value as RowData[T];
      return newData;
    });
  };

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
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Senha&nbsp;</TableCell>
                    <TableCell align="center">Nivel&nbsp;</TableCell>
                    <TableCell align="center">Status&nbsp;</TableCell>
                    <TableCell align="center">Ação&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center"><TextField defaultValue={row.matricula} onChange={(e) => handleInputChange(e, 'matricula', index)}></TextField></TableCell>
                      <TableCell align="center"><TextField defaultValue={row.id} onChange={(e) => handleInputChange(e, 'id', index)}></TextField></TableCell>
                      <TableCell align="center"><TextField defaultValue={row.senha} onChange={(e) => handleInputChange(e, 'senha', index)}></TextField></TableCell>
                      <TableCell align="center">
                        <select defaultValue={row.nivel}onChange={(e) => handleInputChange(e, 'nivel', index)}>
                           <option value="1">Administrador</option>
                           <option value="2">Comum</option>
                           </select></TableCell>
                      <TableCell align="center">
                        <select defaultValue={row.status} onChange={(e) => handleInputChange(e, 'status', index)}>
                           <option value="1">Ativada</option>
                           <option value="2">Desativada</option>
                           </select></TableCell>
                      <TableCell id="idBtEditar" align="center">
                      <Button onClick={() => handleEdit(row)} style={buttonStyle}>Salvar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
          <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
            <Button id='adicionarNovo' style={addNewbuttonStyle} onClick={handleAddNew}>Adicionar Nova Conta</Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ADM;
