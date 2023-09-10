import React from 'react';

import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import CharacterDetailPage from './pages/CharacterDetailPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/character/:id" Component={CharacterDetailPage}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
