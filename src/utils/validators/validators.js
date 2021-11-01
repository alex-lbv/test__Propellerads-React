import {EMAIL_REGEXP} from '../../const.js';

export const required = (value) => (
  value ? undefined : 'Это поле необходимо заполнить.'
)

export const minLengthCreator = (minLength) => (value) => (
  value.length < minLength ? `Минимальная длина комментария ${minLength} символа` : undefined
)

export const validateEmail = (value) => (
  EMAIL_REGEXP.test(value) ? undefined : 'Пожалуйста, введите корректный адрес электронной почты.'
);
