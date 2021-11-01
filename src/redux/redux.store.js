import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import surveyReducer from './survey-reducer.js';
import commentsReducer from './comments-reducer.js';

const reducers = combineReducers({
  survey: surveyReducer,
  comments: commentsReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;
