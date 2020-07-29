import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import NewQuestion from './NewQuestion';
import QuestionSingle from './QuestionSingle';
import Header from './Header';
import Leaderboard from './Leaderboard';

import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/question-single/:id" component={QuestionSingle} />
        <Route path="/new" component={NewQuestion} />
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect()(App);
