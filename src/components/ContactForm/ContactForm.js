import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, url, format} from 'redux-form-validators'
import PropTypes from 'prop-types';

import './ContactForm.css';

import FormInput from '../shared/FormInput/FormInput';
import ColorPickerField from './ColorPickerField/ColorPickerField';


const ContactForm = ({
  handleSubmit,
  submitting,
  onSubmitContact
}) => {

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit(onSubmitContact)}>
      <Field
        type="text"
        component={FormInput}
        name="first_name"
        placeholder="First Name"
        validate={[required()]}
      />
      <Field
        type="text"
        component={FormInput}
        name="last_name"
        placeholder="Last Name"
        validate={[required()]}
      />
      <Field
        type="text"
        component={FormInput}
        name="title"
        placeholder="Title"
        validate={[required()]}
      />
      <Field
        type="text"
        component={FormInput}
        name="image"
        placeholder="Image Url"
        validate={[
          required(),
          url()
        ]}
      />
      <Field
        type="text"
        component={FormInput}
        name="location"
        placeholder="Location as timezone"
        validate={[
          required(),
          format({
            with: /[A-Za-z_]+\/[A-Za-z_]+$/,
            message: "doesn't comply to location pattern Area/Location"
          })
        ]}
      />
      <Field
        type="text"
        component={FormInput}
        name="team"
        placeholder="Function Level Team"
        validate={[required()]}
      />

      <ColorPickerField/>

      <div>
        <button
          type="submit"
          className="contact-form__submit-button button-raised"
          disabled={submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ContactForm.proptypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'ContactForm',
  shouldValidate: () => true
})(ContactForm);

