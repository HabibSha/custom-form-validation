// custom hook for reusable form like form library.

import { useState } from "react";
import { deepClone, isObjectEmpty } from "../utils/object-utils";

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  // handleChange function
  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);
    oldState[key].value = value;
    // if (type === "checkbox") {
    //   oldState[key].value = "checked";
    // } else {
    //   oldState[key].value = value;
    // }

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  // handleFocused function
  const handleFocused = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }
    setState(oldState);
  };

  //   handleBlur function
  const handleBlur = (e) => {
    const key = e.target.name;

    const { errors } = getErrors();

    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  //   handleSubmit function
  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { hasError, errors, values } = getErrors();

    cb({
      hasError,
      errors,
      values,
      focused: mapStateToKeys(state, "focused"),
      touched: mapStateToKeys(state, "touched"),
    });
  };

  // handleClearInputs function
  const handleClearInputs = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  // Error handler
  const getErrors = () => {
    let hasError = null,
      errors = null;

    const values = mapStateToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCb = validate(values);
      hasError = !isObjectEmpty(errorsFromCb);
      errors = errorsFromCb;
    } else {
      throw new Error("validate property must be boolean or function");
    }

    return {
      hasError,
      errors,
      values,
    };
  };

  return {
    formState: state,
    handleChange,
    handleFocused,
    handleBlur,
    handleClearInputs,
    handleSubmit,
  };
};

export default useForm;

// helper functions
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, cur) => {
    acc[cur] = {
      value: shouldClear ? "" : values[cur],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
