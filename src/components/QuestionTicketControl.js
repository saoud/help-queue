import React from 'react'
import ReactDOM from 'react-dom'
import Questions from "./Questions";

const questionList = ["Have you gone through all the steps on the Learn How to Program debugging lesson?", "Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?"];


class QuestionTicketControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      questionsVisible: true,
      questionOneAnswered: false,
      questionTwoAnswered: false,
      questionThreeAnswered: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  // this.setState(st => {
  //   st.stateName = new-state-value
  // })

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let currentQuestion = null;
    if (this.state.questionOneAnswered === false) {
      //Question One 
      currentQuestion = questionList[0];
      currentlyVisibleState = <Question question={currentQuestion} />
      buttonText = "Yes";
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === false) {
      //Qu Two
      currentQuestion = questionList[1];
      currentlyVisibleState = <Question question={currentQuestion} />;
      buttonText = "Yes";
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === true && this.state.questionThreeAnswered === false) {
      currentQuestion = questionList[2];
      currentlyVisibleState = <Question question={currentQuestion} />;
      buttonText = "Yes";
      //Qu 3
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === true && this.state.questionThreeAnswered === true) {
      this.setState({ questionsVisible: false });
    }
    if (this.state.questionsVisible = false) {
      currentlyVisibleState = <TicketControl />;
      buttonText = "Next";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default QuestionTicketControl;