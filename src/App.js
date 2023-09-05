import React from 'react';
import './App.css';
import { Header } from './features/Header.js/Header';
import { Menu } from './features/menu/menu';
import { useSelector } from 'react-redux';
import { Main } from './features/main/main';

function App() {
  const menuDisplay = useSelector(state => state.search.menuDisplay);

  return (
    <div className="App">
     <Header/> 
     <div id='menu-main'>
      <Menu/>
       <div className={`main ${menuDisplay && 'slidein'}`}>
      <Main/>
       </div>
       </div>
    </div>
  );
}

export default App;
