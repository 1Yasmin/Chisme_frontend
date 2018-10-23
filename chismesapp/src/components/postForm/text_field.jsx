import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="section">
    <div className="input-field">
      <input className="input" id={`${input.name}`} {...input} type={type} />
      {touched && error && <span>{error}</span>}
      <label htmlFor={`${input.name}`}>{label}</label>
    </div>
  </div>
);

export default renderField;