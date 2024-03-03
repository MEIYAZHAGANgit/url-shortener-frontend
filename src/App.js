import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShortenForm from './components/ShortenForm';
import ShortUrlDisplay from './components/ShortUrlDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShortenForm />} />
          <Route path="/:shortUrl" element={<ShortUrlDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
