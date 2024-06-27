import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { useState } from 'react';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Items from './components/Items';

const Info = styled.div`
  height: 100%;
  text-align: center;
  background-color: black;
  display: flex;
  flex-direction: column;
`
export default function App() {
  const [active, setActive] = useState('main');

  
  return (
    <Info>
      <Header />
      <Items activeItem={active} onChange={cur => setActive(cur)} />
      {active === 'home' && <Home/>}
      {active === 'about' && <About/>}
      {active === 'portfolio' && <Portfolio/>}
      {active === 'contacts' && <Contacts/>}
    </Info>
  );
}
