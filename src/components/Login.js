import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <select>
            <option>Justin Stewart</option>
            <option>Tyler McGinnis</option>
          </select>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
