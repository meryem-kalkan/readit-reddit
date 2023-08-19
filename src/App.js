import React from 'react';
import './App.css';
import { Header } from './features/Header.js/Header';
import { Menu } from './features/menu/menu';

function App() {
  return (
    <div className="App">
     <Header/> 
     <div className='wrapper'>
      <Menu/>
     </div>
    </div>
  );
}

export default App;
