import React from "react";
import "../Form/Form.css";

function FormInput({
  title,
  name,
  type,
  placeholder,
  value,
  required,
  minLength,
  maxLength,
  error,
  disabled,
  onChange,
}) {
  return (
    <label className="form__item">
      <p className="form__input-text">{title}</p>
      <input
        name={name}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
        className="form__input"
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        placeholder={placeholder}
      />
      <p className="form__input-error">{error}</p>
    </label>
  );
}
export default FormInput;
