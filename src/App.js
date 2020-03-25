import React from 'react';
import './App.scss';
import Footer from './layout/footer/Footer';
import MainContent from './components/MainContent';
// import Toolbar from './layout/toolbar/Toolbar'
import Header from './layout/header/Header';
// import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Toolbar />
      <p style={{marginTop: '64px'}}>Text content</p> */}
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
