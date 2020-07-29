import React, { Component } from 'react';
import '../App.css';

class LeaderboardCard extends Component {
  render() {
    return (
      <div className="leaderboardcard-container">
        <div>
          <img
            src="https://avatars2.githubusercontent.com/u/4809971?s=400&u=e8c702022bdb3027e90af7ed6570dbe534ee41cf&v=4"
            alt=""
          />
        </div>
        <div>
          <h2>Justin Stewart</h2>
          <p>Answered Question 2</p>
          <p>Created Question2</p>
        </div>
        <div>
          <div>
            <p>Score</p>
          </div>
          <div>12</div>
        </div>
      </div>
    );
  }
}

export default LeaderboardCard;
