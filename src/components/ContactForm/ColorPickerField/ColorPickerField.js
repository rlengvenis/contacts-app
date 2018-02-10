import React from 'react';
import {Field} from 'redux-form';

import "./ColorPickerField.css";

import FormInput from '../../shared/FormInput/FormInput';


const ColorPickerField = () => {
  return (
    <div className="color-picker">
      <label
        className="color-picker__label"
      >
        Color:
        <Field
          className="color-picker__input"
          type="color"
          component={FormInput}
          name="color"
        />
      </label>
    </div>
  )
};

export default ColorPickerField;
