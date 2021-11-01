import './App.css';
import Header from './components/header/header.jsx';
import Survey from './components/survey/survey.jsx';
import {connect} from 'react-redux';
import {saveComment} from './redux/comments-reducer.js';
import {compose} from 'redux';
import Comment from './components/comment-form/comment-form.jsx';
import {saveAnswers} from './redux/survey-reducer.js';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Survey
        step={props.step}
        isCompleted={props.isCompleted}
        saveAnswers={props.saveAnswers}
        questions={props.questions}
        answers={props.answers}
      />
      <Comment
        saveComment={props.saveComment}
        isCommented={props.isCommented}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isCommented: state.comments.isCommented,
  step: state.survey.step,
  questions: state.survey.questions,
  answers: state.survey.answers,
  isCompleted: state.survey.isCompleted,
})

export default compose(
  connect(mapStateToProps, {saveComment, saveAnswers})
)(App);
