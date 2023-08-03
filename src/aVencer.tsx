import { useState } from 'react';
import * as React from 'react';
import {Navbar} from './navBar/navBar';
import Papa from 'papaparse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import marcaSenacfecomercioSeschorizontal from './images/marcaSenacfecomercioSeschorizontal.png';

//ATRIBUTOS DO CSV - Como a tabela tem os indices errados eles estão trocados
type RowData = {
  Nome: string; //NOME
  Email: string; //TELEFONE
  ContratoMatricula: string; // EMAIL
  Valor: string; //DATA DE VENCIMENTO
  DTINICIO: string; //CURSO
  Titulo: string; //NUMERO DE PARCELAS
  DATA_CONTATO: string; //ULTIMO CONTATO REALIZADO
};

function AVencer() {
    
    const buttonStyle = {
        color: '#fff',
        backgroundColor: "#F7941D",
        '&:hover': {
          backgroundColor: "#F7941D",
        },
        margin: "5px",
      };

  const [data, setData] = useState<RowData[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    //FUNCAO UTILIZADA PARA LER OS DADOS DE UM ARQUIVO CSV E EXIBI-LOS NA TELA
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      Papa.parse(file, {
        complete: (result: Papa.ParseResult<any>) => {
          const parsedData = result.data as RowData[];
          setData(parsedData);
          setDataLoaded(true)
        },
        header: true,
        skipEmptyLines: true,
        encoding: 'utf-8',
      });
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('escolherArquivo') as HTMLInputElement;
    fileInput.click();
  };
  const handleClearData = () => {
    setData([]); 
    setDataLoaded(false); 
    //Lógica para importar dados está com defeito
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', width: '100%' }}>
        <Navbar /> 
        <div id='container-botao' style={{ width: '100%', height: '10%', display: 'flex', justifyContent: 'center' }}>
          <br></br>
          <input id='escolherArquivo' type='file' accept=".csv" onChange={handleFileSelect} style={{ display: 'none' }} />
          <Button id="importarPlanilha" style={buttonStyle} onClick={handleButtonClick}>Importar Planilha</Button>
        </div>
      </div>
      <div id='planilha' style={{padding: "10%"}}>
        {dataLoaded && data.length > 0 ? (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Telefone</TableCell>
                    <TableCell align="right">Email&nbsp;</TableCell>
                    <TableCell align="right">Vencimento&nbsp;</TableCell>
                    <TableCell align="right">Curso&nbsp;</TableCell>
                    <TableCell align="right">Parcelas&nbsp;</TableCell>
                    <TableCell align="right">Ultímo Contato&nbsp;</TableCell>
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
                    <TableCell align="right">{row.ContratoMatricula}</TableCell>
                    <TableCell align="right">{row.Valor}</TableCell>
                    <TableCell align="right">{row.DTINICIO}</TableCell>
                    <TableCell align="right">{row.Titulo}</TableCell>
                    <TableCell align="right">{row.DATA_CONTATO}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        ) : null}
      </div>
    </>
  )
}
export default AVencer;
