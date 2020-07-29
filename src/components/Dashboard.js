import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionDashboard from './QuestionDashboard';

class Dashboard extends Component {
  render() {
    const { questionIds } = this.props;

    console.log('questionIds', questionIds);
    return this.props.questionIds.map((id) => {
      return <QuestionDashboard id={id} />;
    });
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions),
  };
}

export default connect(mapStateToProps)(Dashboard);
