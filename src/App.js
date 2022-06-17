import React from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
    <>
      <header className='app__header'>Recipes</header>
      <Recipes />
    </>
  );
}

export default App;
