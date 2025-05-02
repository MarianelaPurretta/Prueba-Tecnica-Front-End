
import React from 'react';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Parent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
