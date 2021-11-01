import {Field} from 'redux-form';
import QuestionTitle from '../../question-title/question-title.jsx';
import style from '../../survey.module.css';
import {useState} from 'react';
import {useLocalStorage} from '../../../../hooks/use-local-storage.js';

const QuestionOfCountry = (props) => {
  const [stateButton, isToggle] = useState(true);
  const [answerOfCountry, setAnswerOfCountry] = useLocalStorage(props.questionData.type, null);

  const changeState = (evt) => {
    isToggle(false);
    setAnswerOfCountry(evt.currentTarget.value);
    props.getState(props.questionData.type);
  };

  return (
    <div>
      <QuestionTitle id={props.questionData.id} title={props.questionData.title}/>
      <div className={style.container__column}>
        <Field className={style.survey_select}
               component={'select'}
               name={props.questionData.type}
               value={'test'}
               onClick={changeState}
               onChange={changeState}
        >
          {props.questionData.answers.map((question) => {
            return <option
              key={question.id} value={question.value}>{question.value}</option>
          })
          }
        </Field>

        <button disabled={stateButton} className={style.survey_button}>Отправить</button>
      </div>
    </div>
  );
}

export default QuestionOfCountry;
