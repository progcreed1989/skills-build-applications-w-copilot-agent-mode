
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App bg-dark text-light min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <div className="container-fluid">
          <img src={require('../../docs/octofitapp-small.png')} alt="OctoFit Logo" className="App-logo-left" />
          <button className="navbar-brand btn btn-link" style={{textDecoration: 'none'}} type="button">OctoFit Tracker</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" type="button">Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" type="button">Profile</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" type="button">Teams</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" type="button">Leaderboard</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="App-header">
        <img src={logo} className="App-logo mb-3" alt="logo" />
        <h1 className="display-4 mb-3">Welcome to OctoFit Tracker</h1>
        <p className="lead mb-4">Track your fitness, join teams, and compete!</p>
        <a className="btn btn-info mb-3" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {/* Bootstrap Card */}
        <div className="card text-dark mb-4" style={{maxWidth: '24rem', margin: '0 auto'}}>
          <div className="card-body">
            <h5 className="card-title">Your Progress</h5>
            <p className="card-text">You have logged 5 activities this week. Keep it up!</p>
            <button className="btn btn-success" onClick={() => setShowModal(true)}>Log Activity</button>
          </div>
        </div>
        {/* Bootstrap Table */}
        <div className="container mb-4">
          <h2 className="h4 mb-3">Recent Activities</h2>
          <table className="table table-striped table-bordered table-dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Duration</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-10-30</td>
                <td>Running</td>
                <td>30 min</td>
                <td>300</td>
              </tr>
              <tr>
                <td>2025-10-29</td>
                <td>Cycling</td>
                <td>45 min</td>
                <td>400</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.7)'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Log New Activity</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="activityType" className="form-label">Activity Type</label>
                      <input type="text" className="form-control" id="activityType" placeholder="e.g. Running" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="duration" className="form-label">Duration (min)</label>
                      <input type="number" className="form-control" id="duration" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="calories" className="form-label">Calories</label>
                      <input type="number" className="form-control" id="calories" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                  <button type="button" className="btn btn-primary">Save Activity</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
