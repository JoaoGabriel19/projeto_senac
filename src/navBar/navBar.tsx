import React from 'react';
import './navBar.css';
import marcaSenacfecomercioSeschorizontalNegativo from './marcaSenacfecomercioSeschorizontalnegativo.png';


const handleButtonClickCom = () => {
  window.location.href = "/comcontato";
}
const handleButtonClickSem = () => {
  window.location.href = "/semcontato";
}
const handleButtonClickADM = () => {
  window.location.href = "/adm";
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-buttons">
        <button onClick={handleButtonClickCom}>Contato Realizado</button>
        <button onClick={handleButtonClickSem}>Contato Pendente</button>
        <button onClick={handleButtonClickADM}>Gerenciamento de Usuário</button>
      </div>
    </nav>
  );
}

export default NavBar;
