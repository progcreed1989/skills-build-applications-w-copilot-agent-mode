

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="App bg-dark text-light min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark mb-4">
          <div className="container-fluid">
            <img src={require('./octofitapp-small.png')} alt="OctoFit Logo" className="App-logo-left" />
            <Link className="navbar-brand btn btn-link" style={{textDecoration: 'none'}} to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <header className="App-header">
              <img src={logo} className="App-logo mb-3" alt="logo" />
              <h1 className="display-4 mb-3">Welcome to OctoFit Tracker</h1>
              <p className="lead mb-4">Track your fitness, join teams, and compete!</p>
              <a className="btn btn-info mb-3" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
