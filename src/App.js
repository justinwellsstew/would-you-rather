import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewQuestion from './components/NewQuestion';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <NewQuestion />
      <Leaderboard />
      <Login />
    </div>
  );
}

export default App;
