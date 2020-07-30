import React, { Component } from 'react';

class NewQuestion extends Component {
  state = {
    textOne: '',
    textTwo: '',
  };

  handleChange1 = (e) => {
    const textOne = e.target.value;

    this.setState(() => {
      textOne;
    });
  };

  handleChange2 = (e) => {
    const textOne = e.target.value;

    this.setState(() => {
      textTwo;
    });
  };

  render() {
    return (
      <div>
        <h2>Create New Question</h2>
        <strong>complete the question</strong>
        <h3>Would you rather... </h3>
        <input type="text" placeholder="enter option one text here" />
        <strong>OR</strong>
        <input type="text" placeholder="enter option two text here" />
        <button>Submit</button>
      </div>
    );
  }
}

export default NewQuestion;
