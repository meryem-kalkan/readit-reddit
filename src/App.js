import React from 'react';
import './App.css';
import { Header } from './components/Header.js/Header';
import { Menu } from './features/menu/menu';
import { useSelector } from 'react-redux';
import { Main } from './components/main/main'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const menuDisplay = useSelector(state => state.search.menuDisplay);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
