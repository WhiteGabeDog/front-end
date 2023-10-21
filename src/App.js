import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import MyGame from './pages/MyGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/'       element={<Home />} />
        <Route exact path='/myGame' element={<MyGame />} />
      </Routes>
    </Router>
  );
}

export default App;
