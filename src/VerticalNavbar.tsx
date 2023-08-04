import * as React from 'react';
import Button from '@mui/material/Button';

const VerticalNavbar: React.FC = () => {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#004A8D;',
    '&:hover': {
      backgroundColor: '#004A8D;',
    },
    margin: '5px',
    width: '200px',
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', height: '100%', backgroundColor: '#004A8D', padding: '20px' }}>
      <Button variant="contained" style={buttonStyle}>
        A vencer
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Vencidos
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Gerenciamento de Usuários
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Teste 1
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Teste 2
      </Button>
    </div>
  );
};

export default VerticalNavbar;
