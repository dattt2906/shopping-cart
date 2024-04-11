import React from 'react';

import './App.css';
import { Header } from './component/header/header';
import { Container } from './component/container/container';



function App() {

  return (
   <>
  <div className='shopping-cart'>
   <Header/>
   <Container/>
   </div>
   </>
  
  );
}

export default App;
