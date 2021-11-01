import {reduxForm} from 'redux-form';
import QuestionOfGender from './questions/question-of-gender/question-of-gender.jsx';
import QuestionOfCountry from './questions/question-of-country/question-of-country.jsx';
import Result from './result/result.jsx';
import {STEPS} from '../../const.js';
import {useLocalStorage} from '../../hooks/use-local-storage.js';
import style from './survey.module.css'
import {componentStateControl} from '../common/component-state-control/component-state-control.jsx';

const Survey = (props) => {
  const [firstQuestion, secondQuestion] = props.questions;
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const [step, setStep] = useLocalStorage('step', props.step);
  const [isCompleted, setCompleted] = useLocalStorage('isCompleted', props.isCompleted);

  const onAnswer = (step) => {
    switch (step) {
      case STEPS.GENDER:
        return <QuestionOfGender
          questionData={firstQuestion}
          getState={getState}
          nextStep={nextStep}
        />
      case STEPS.COUNTRY:
        return <QuestionOfCountry
          questionData={secondQuestion}
          getState={getState}
        />
      default:
        return null
    }
  }

  const getState = (key) => {
    let keyValue = JSON.parse(localStorage.getItem(key));
    setAnswers({...answers, [key]: keyValue});
    localStorage.removeItem(key);
  }

  const nextStep = () => setStep(step + 1);

  const clearState = () => {
    localStorage.removeItem('answers');
    localStorage.removeItem('step');
  };

  const saveAnswers = () => {
    setCompleted(true);
    props.saveAnswers(answers, true);
    clearState();
  }

  return componentStateControl(
    isCompleted,
    <Result className={style.survey}/>,
    <SurveyReduxForm step={step} onSubmit={saveAnswers} onAnswer={onAnswer}/>
  );
}

const SurveyForm = (props) => {
  return (
    <form className={style.survey} onSubmit={props.handleSubmit}>
      {props.onAnswer(props.step)}
    </form>
  );
};

const SurveyReduxForm = reduxForm({form: 'question'})(SurveyForm);

export default Survey;
