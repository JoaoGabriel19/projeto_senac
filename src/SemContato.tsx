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


//Os dados nas planilhas estão trocados
type RowData = {
  Nome: string; //Nome
  Email: string; //Telefone
  ContratoMatricula: string; //Email
  VALOR: string; //Data de Vencimento
  DTINICIO: string; //Curso
  TITULO: string; //Numero de Parcelas
  DATA_CONTATO: string; //Ultimo contato
};

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#F7941D',
  '&:hover': {
    backgroundColor: '#F7941D',
  },
  margin: '5px',
};

const SemContato: React.FC = () => {
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
                      <TableCell align='right'>Telefone</TableCell>
                      <TableCell align='right'>Email&nbsp;</TableCell>
                      <TableCell align='right'>Vencimento&nbsp;</TableCell>
                      <TableCell align='right'>Curso&nbsp;</TableCell>
                      <TableCell align='right'>Parcelas&nbsp;</TableCell>
                      <TableCell align='right'>Último Contato&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                          {row.Nome}
                        </TableCell>
                        <TableCell align='right'>{row.Email}</TableCell>
                        <TableCell align='right'>{row.ContratoMatricula}</TableCell>
                        <TableCell align='right'>{row.VALOR}</TableCell>
                        <TableCell align='right'>{row.DTINICIO}</TableCell>
                        <TableCell align='right'>{row.TITULO}</TableCell>
                        <TableCell align='right'>{row.DATA_CONTATO}</TableCell>
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

export default SemContato;