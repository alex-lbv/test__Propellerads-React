import {Field} from 'redux-form';
import QuestionTitle from '../../question-title/question-title.jsx';
import style from '../../survey.module.css';
import {useLocalStorage} from '../../../../hooks/use-local-storage.js';

const QuestionOfGender = (props) => {
  const [answerOfGender, setAnswerOfGender] = useLocalStorage(props.questionData.type, null);

  return (
    <div>
      <QuestionTitle id={props.questionData.id} title={props.questionData.title}/>

      <div className={style.container}>
        {props.questionData.answers.map((question) => {
          return (
            <div key={question.id}>
              <Field
                hidden
                onClick={()=>{
                  props.nextStep();
                  setAnswerOfGender(question.name);
                  props.getState(props.questionData.type);
                }}
                value={question.name}
                component={'input'}
                type={'radio'}
                id={question.id}
                name={props.questionData.type}/>
              <Field
                className={style.survey_button}
                component={'label'}
                htmlFor={question.id}
                name={props.questionData.type}>
                {question.name}
              </Field>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionOfGender;
