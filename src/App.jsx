import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Send from './Send'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Send />} />
      </Routes>
    </Router>
  );
}

export default App;
