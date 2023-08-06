import { useState } from 'react';
import * as React from 'react';
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
import NavBar from './navBar/navBar';

type RowData = {
  Nome: string;
  Email: string;
  ContratoMatricula: string;
  VALOR: string;
  DTINICIO: string;
  TITULO: string;
  DATA_CONTATO: string;
  ASSUNTO: string;
};

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#F7941D',
  '&:hover': {
    backgroundColor: '#F7941D',
  },
  margin: '5px',
};

const ComContato: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      Papa.parse(file, {
        complete: (result: Papa.ParseResult<any>) => {
          const parsedData = result.data as RowData[];
          setData(parsedData);
          setDataLoaded(true);
        },
        header: true,
        skipEmptyLines: true,
        encoding: 'iso-8859-1',
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
  };

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '60px' }}>
      <div id='planilha' style={{ marginTop: '5%', display: 'flex', flexWrap: 'wrap' }}>
            <br />
            <input id='escolherArquivo' type='file' accept='.csv' onChange={handleFileSelect} style={{ display: 'none' }} />
            <Button id='importarPlanilha' style={buttonStyle} onClick={handleButtonClick}>
              Importar Planilha
            </Button>
            <Button id='enviarnotificações' style={buttonStyle} onClick={handleButtonClick}>
              Enviar Notificações
            </Button>
          </div>
          <div id='planilha' style={{ padding: '5%', flex: 1 }}>
            {dataLoaded && data.length > 0 ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                      <TableCell align='center'>Telefone</TableCell>
                      <TableCell align='center'>Email&nbsp;</TableCell>
                      <TableCell align='center'>Vencimento&nbsp;</TableCell>
                      <TableCell align='center'>Curso&nbsp;</TableCell>
                      <TableCell align='center'>Parcelas&nbsp;</TableCell>
                      <TableCell align='center'>Último Contato&nbsp;</TableCell>
                      <TableCell align='center'>Tipo de Contato</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                          {row.Nome}
                        </TableCell>
                        <TableCell align='center'>{row.Email}</TableCell>
                        <TableCell align='center'>{row.ContratoMatricula}</TableCell>
                        <TableCell align='center'>{row.VALOR}</TableCell>
                        <TableCell align='center'>{row.DTINICIO}</TableCell>
                        <TableCell align='center'>{row.TITULO}</TableCell>
                        <TableCell align='center'>{row.DATA_CONTATO}</TableCell>
                        <TableCell align='center'>{row.ASSUNTO}</TableCell>
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

export default ComContato;