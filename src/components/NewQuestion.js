import React, { Component } from 'react';
import { saveQuestion } from '../utils/';

class NewQuestion extends Component {
  state = {
    option1: '',
    option2: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    formatQuestion(this.state.option1, this.state.option2);
  };

  render() {
    return (
      <div>
        <h2>Create New Question</h2>
        <strong>complete the question</strong>
        <h3>Would you rather... </h3>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          name="option1"
          placeholder="enter option one text here"
        />
        <strong>OR</strong>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          name="option2"
          placeholder="enter option two text here"
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default NewQuestion;
