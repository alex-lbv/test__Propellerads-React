import style from '../survey.module.css';

const Result = () => {
  return (
    <div className={style.survey}>
      <p className={style.text}>Благодарим за участие!</p>
      <p className={style.text}>Ваше мнение очень важно для нас.</p>
    </div>
  );
}

export default Result;
