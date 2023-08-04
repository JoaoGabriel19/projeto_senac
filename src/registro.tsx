import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import marcaSenacfecomercioSeschorizontal from './images/marcaSenacfecomercioSeschorizontal.png';
import axios from 'axios';
import { Navbar } from './navBar/navBar';

function Registro() {
    const [age, setAge] = useState('');
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
      const selectCustom = {
        backgroundColor: '#FFF',
        padding: '5px',
        margin: '5px',
        width: '150%',
      }
  return (
        <>
        
        <div id="container-form">
            
            <TextField id="matricula" label="matricula" variant="filled" style={textFieldCustom} />
            <TextField id="senha" label="senha" variant="filled" style={textFieldCustom} />
            
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="idLabel">Nivel</InputLabel>
                <Select
                    style={selectCustom}
                    labelId="idLabel"
                    id="nivelConta"
                    value={age}>
                    <MenuItem value="">
                    <em></em>
                    </MenuItem>
                    {/*O nivel da conta deve ser ajustado com o banco de dados*/}
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Comum</MenuItem>
                </Select>
        </FormControl>
        </div>
    </>
    )
}
export { Registro };