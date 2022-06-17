import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <header className='app__header'>Recipes</header>
      <Recipes />
    </>
  );
}

export default App;
