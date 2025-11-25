import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rules from './pages/Rules/Rules';
import Credits from './pages/Credits/Credits';
import Context from './pages/Context/Context';
import DicePage from './pages/DicePage/DicePage';
import NavBar from './components/NavBar/NavBar';
import DiceModal from './components/DiceModal/DiceModal';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/context" element={<Context />} />
          <Route path="/dice" element={<DicePage />} />
        </Routes>
        <DiceModal />
      </div>
    </Router>
  );
}

export default App;
