import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/_DATA';
import { Link } from 'react-router-dom';

class QuestionDashboard extends Component {
  render() {
    const { question, id } = this.props;
    return (
      <div key={id}>
        <div>{question.author} asks:</div>
        <div>
          <h3>Would you rather</h3>
          <Link to={`/question-single/${id}`}>View Poll</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    id,
    question,
  };
}

export default connect(mapStateToProps)(QuestionDashboard);
