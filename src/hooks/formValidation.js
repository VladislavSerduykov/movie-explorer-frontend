import { useCallback, useState, useEffect } from "react";
import isEmail from "validator/lib/isEmail";

function FormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateName = useCallback((value) => {
    const nameRegex = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    if (!nameRegex.test(value)) {
      return "Имя может содержать только буквы и цифры";
    } else if (value.length < 2 || value.length > 40) {
      return "Имя должно быть не менее 2 и не более 40 знаков";
    } else {
      return "";
    }
  }, []);

  const validatePassword = useCallback((value) => {
    return value.length >= 8;
  }, []);

  const handleChange = useCallback(
    (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      let validationError = "";
      if (!value) {
        validationError = "Это поле обязательно";
      } else if (name === "email") {
        validationError = isEmail(value) ? "" : "Неверна указана почта";
      } else if (name === "name") {
        validationError = validateName(value);
      } else if (name === "password") {
        validationError = validatePassword(value)
          ? ""
          : "Пароль должен быть не менее 8 знаков";
      }

      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: validationError });
    },
    [validateName, validatePassword, values, errors]
  );

  useEffect(() => {
    const noErrors = Object.values(errors).every((error) => error === "");
    const allValuesPresent = Object.values(values).every(
      (value) => value.trim() !== ""
    );

    setIsValid(noErrors && allValuesPresent);
  }, [errors, values]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export default FormValidation;
