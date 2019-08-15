import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SubmitButton from '../custom-inputs/submit-button/SubmitButton';
import InputText from '../custom-inputs/InputText';
import GroupRadioButtons from '../custom-inputs/group-radio-button/GroupRadioButtons';
import StringValidator from '../../utilities/StringValidator';

const ConnectedRegisterFrom = props => {
  const genres = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' }
  ];

  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit(props.onSubmitForm)}>
        <Field
          name="firstname"
          type="text"
          component={InputText}
          label="First Name"
        />
        <Field
          name="lastname"
          type="text"
          component={InputText}
          label="Last Name"
        />
        <Field name="email" type="email" component={InputText} label="Email" />
        <Field
          name="password"
          type="password"
          component={InputText}
          label="Password"
        />
        <Field
          name="confirmPassword"
          type="password"
          component={InputText}
          label="Confirm Password"
        />
        <hr className="separator" />
        <Field
          name="birthday"
          type="date"
          component={InputText}
          label="Birth Day"
        />
        <Field
          name="telephone"
          type="tel"
          component={InputText}
          label="Telephone Number"
        />
        <Field
          name="url"
          type="url"
          component={InputText}
          label="Personal Blog Url"
        />
        <Field
          name="aboutme"
          type="text"
          component={InputText}
          label="About Me"
        />
        <hr className="separator" />
        <Field
          component={GroupRadioButtons}
          title="genre"
          name="genre"
          values={genres}
        />

        <Field
          name="address"
          type="text"
          component={InputText}
          label="Address"
        />
        <SubmitButton value="Register me!" />
      </form>
    </div>
  );
};

const validate = values => {
  const {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    birthday,
    telephone,
    genre
  } = values;

  const errors = {};

  if (StringValidator.isStringNull(firstname)) {
    errors.firstname = 'Required Field';
  } else if (StringValidator.isStringLengthLesserThanAValue(firstname, 4)) {
    errors.firstname = 'First Name must be longer than 4 characters';
  } else if (StringValidator.isStringLengthGreaterThanAValue(firstname, 15)) {
    errors.firstname = 'First Name must be have less than 15 characters';
  }

  if (StringValidator.isStringNull(lastname)) {
    errors.lastname = 'Required Field';
  } else if (StringValidator.isStringLengthLesserThanAValue(lastname, 4)) {
    errors.lastname = 'First Name must be longer than 4 characters';
  } else if (StringValidator.isStringLengthGreaterThanAValue(lastname, 15)) {
    errors.lastname = 'First Name must be have less than 15 characters';
  }

  if (StringValidator.isStringNull(email)) {
    errors.email = 'Required Field';
  }

  if (StringValidator.isStringNull(password)) {
    errors.password = 'Required Field';
  }

  if (StringValidator.isStringNull(confirmPassword)) {
    errors.confirmPassword = 'Required Field';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords must match!';
  }

  if (StringValidator.isStringNull(birthday)) {
    errors.birthday = 'Required Field';
  } else if (StringValidator.getAge(birthday) < 18) {
    errors.birthday = 'you must be 18 or older to register';
  }

  if (StringValidator.isStringNull(telephone)) {
    errors.telephone = 'Required Field';
  } else if (StringValidator.isStringOnlyNumber(telephone)) {
    errors.telephone = 'field must be only numbers';
  }

  if (StringValidator.isStringNull(genre)) {
    errors.genre = 'Required Field';
  }

  return errors;
};

const RegisterFrom = reduxForm({
  form: 'register',
  validate
})(ConnectedRegisterFrom);

export default RegisterFrom;
