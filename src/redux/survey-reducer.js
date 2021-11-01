const ADD_ANSWERS = 'ADD-ANSWERS';
const SURVEY_COMPLETED = 'SURVEY-COMPLETED'
const NEXT_STEP = 'NEXT-STEP'

const initialState = {
  step: localStorage.getItem('step') || 0,
  isCompleted: localStorage.getItem('isCompleted') || false,
  questions: [
    {
      id: 1,
      title: 'Укажите пол',
      type: 'gender',
      answers: [
        {
          id: 1,
          name: 'Мужской',
          value: 'male',
        },
        {
          id: 2,
          name: 'Женский',
          value: 'female',
        },
      ],
    },
    {
      id: 2,
      title: 'В каком городе Вы живете',
      type: 'country',
      answers: [
        {
          id: 1,
          value: 'Москва',
        },
        {
          id: 2,
          value: 'Санкт-Петербург',
        },
        {
          id: 3,
          value: 'Казань',
        },
        {
          id: 4,
          value: 'Нижний Новгород',
        },
      ],
    },
  ],
  answers: [{gender: 'test1', country: 'test1'}],
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWERS:
      return {
        ...state,
        answers: [...state.answers, action.answers]
      }
    case
    SURVEY_COMPLETED:
      return {
        ...state,
        isCompleted: action.isCompleted,
      }
    case
    NEXT_STEP:
      return {
        ...state,
        step: action.step,
      }
    default:
      return state
  }
}

const addAnswers = (answers) => ({type: ADD_ANSWERS, answers});
const surveyCompleted = (isCompleted) => ({type: SURVEY_COMPLETED, isCompleted});

export const saveAnswers = (answers, isCompleted) => (dispatch) => {
  dispatch(addAnswers(answers));
  dispatch(surveyCompleted(isCompleted));
}


export default surveyReducer;
