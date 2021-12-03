import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <NavBar />
     <Home />
    </div>
  );
}

export default App;
