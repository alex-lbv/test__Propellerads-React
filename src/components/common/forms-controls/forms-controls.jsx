import style from './forms-controls.module.css'
import {Field} from 'redux-form';

const FormControl = ({meta: {touched, error}, children}) => {
  const hasError = touched && error;

  return (
    <div className={`${style.form_control} ${hasError ? style.error : ''}`}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
};

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
};

export const createField = (component, name, placeholder, validate, type) => (
  <Field component={component} name={name} placeholder={placeholder} validate={validate} type={type}/>
);
