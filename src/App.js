import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Sidebar />
        <div className="app__feed">
          <Stories />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
