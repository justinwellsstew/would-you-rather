import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/new">New Question</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
