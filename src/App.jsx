import React from 'react';
import './App.scss';
import Footer from './layout/footer/Footer';
import MainContent from './components/MainContent';
import Header from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
