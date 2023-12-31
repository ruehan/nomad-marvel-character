import React, { useState } from 'react';

import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import CharacterDetailPage from './pages/CharacterDetailPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/AboutPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/themes';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkMode } from './utils/atom';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimatePresence } from 'framer-motion';


function App() {

  const darkmode = useRecoilValue(darkMode);

  console.log(darkmode ? darkTheme : lightTheme)

  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AnimatePresence >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/character/:id" Component={CharacterDetailPage}></Route>
            <Route path="/about" Component={About}></Route>
          </Routes>
        </BrowserRouter>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;


