import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionSingle extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div>{question.author} asks:</div>
        <div>
          <h3>Would you rather</h3>
          <div>{question.optionOne.text}</div>
          <h3>OR</h3>
          <div>{question.optionTwo.text}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    question,
  };
}

export default connect(mapStateToProps)(QuestionSingle);
