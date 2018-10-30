import React from 'react';

export const InputComponent = (field) => (
  <div className="contactField">
    <label>{field.label}</label>
    <input
      margin="normal"
      label={field.placeholder}
      variant="outlined"
      type={field.type}
      className={`inputField ${field.meta.error && field.meta.touched ? 'has-error' : null}`}
      {...field.input}
    />
    <div className="text-error">
      {field.meta.touched ? field.meta.error : ''}
    </div>
  </div>
);

export default {};