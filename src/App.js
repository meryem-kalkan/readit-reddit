import React from 'react';
import './App.css';
import { Header } from './features/Header.js/Header';
import { Menu } from './features/menu/menu';
import { Hotbar } from './features/hotbar/hotbar';
import { Posts } from './features/posts/posts';
import { useSelector } from 'react-redux';

function App() {
  const menuDisplay = useSelector(state => state.search.menuDisplay);

  return (
    <div className="App">
     <Header/> 
      <Menu/>
      <div className={`main ${menuDisplay && 'slidein'}`}>
      <Hotbar/>
       <Posts/>
       </div>
    </div>
  );
}

export default App;
