import React from 'react';
import {reduxForm} from 'redux-form';
import {useLocalStorage} from '../../hooks/use-local-storage.js';
import style from './comment-form.module.css';
import {createField, Input, TextArea} from '../common/forms-controls/forms-controls.jsx';
import {minLengthCreator, required, validateEmail} from '../../utils/validators/validators.js';
import {componentStateControl} from '../common/component-state-control/component-state-control.jsx';

const minLength3 = minLengthCreator(3);

const Comment = (props) => {
  const [isCommented, setCommented] = useLocalStorage('isCommented', props.isCommented);

  const addComment = (values) => {
    setCommented(true);
    props.saveComment({...values}, isCommented);
  }

  return componentStateControl(
    isCommented,
    <div>Спасибо за комментарий</div>,
    <CommentFormRedux onSubmit={addComment}/>
  );
}

const CommentForm = (props) => {
  return (
    <form className={style.comment} onSubmit={props.handleSubmit}>
      {createField(Input, 'email', 'Ваш email', [required, validateEmail], 'email')}
      {createField(TextArea, 'message', 'Напишите комментарий', [required, minLength3])}
      <button>Комментировать</button>
    </form>
  );
}

const CommentFormRedux = reduxForm({
  form: 'comment-form'
})(CommentForm);

export default Comment;
