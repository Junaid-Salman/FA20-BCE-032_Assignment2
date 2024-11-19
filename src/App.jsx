import { useState } from 'react'
import {Box, Typography} from '@mui/material';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Cards from './components/Cards'
import Email from './components/Email';
import Header from './assets/Header.jpg';
import Footer from './components/Footer';

function App() {

  return(

    <>
    <Navbar />
    <Content />
    <Cards />
    <Email />
    <Footer />
    </>
  );
  
}

export default App
