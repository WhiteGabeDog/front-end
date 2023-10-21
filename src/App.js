import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import MyGame from './pages/MyGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MyGame />} />
      </Routes>
    </Router>
  );
}

export default App;
