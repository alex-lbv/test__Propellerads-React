const ADD_COMMENTS = 'ADD-COMMENTS';
const IS_COMMENTED = 'IS-COMMENTED';

const initialState = {
  isCommented: localStorage.getItem('isCommented') || false,
  comments: [
    {
      id: 1,
      email: 'testemail@mail.ru',
      message: 'test comment',
    }
  ],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: state.comments.length + 1,
            email: action.values.email,
            message: action.values.message,
          }
        ]
      }
    case IS_COMMENTED:
      return {
        ...state,
        isCommented: action.isCommented
      }
    default:
      return state
  }
}

const addComment = (values) => ({type: ADD_COMMENTS, values});
const commentedSuccess = (isCommented) => ({type: IS_COMMENTED, isCommented});

export const saveComment = (values, isCommented) => (dispatch) => {
  dispatch(addComment(values));
  dispatch(commentedSuccess(isCommented));
}

export default commentsReducer;
