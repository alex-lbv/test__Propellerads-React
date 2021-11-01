import style from '../survey.module.css';

const QuestionTitle = (props) => {
  return <p className={style.title}>{`${props.id}. ${props.title}`}</p>;
}

export default QuestionTitle;
