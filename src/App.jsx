import { useState } from "react";
import InputGroup from "./components/shared/InputGroup/InputGroup";
import { deepClone, isObjectEmpty } from "./utils/object-utils";

const init = {
  name: {
    value: "",
    error: "",
    focus: false,
  },
  email: {
    value: "",
    error: "",
    focus: false,
  },
  password: {
    value: "",
    error: "",
    focus: false,
  },
};
function App() {
  const [states, setStates] = useState({ ...init });

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(states);
    const values = mapStateToValues(oldState);
    oldState[key].value = value;

    const { errors } = checkValidation(values);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    console.log(errors);

    setStates(oldState);

    //Todo: we will not use this strategy when state is nested. here is init is a nested object.
    // setStates({
    //   ...states,
    //   [name]: {
    //     ...states[name],
    //     value: value,
    //   },
    // });
    console.log(states);
  };

  const mapStateToValues = (states) => {
    return Object.keys(states).reduce((acc, cur) => {
      acc[cur] = states[cur].value;
      return acc;
    }, {});
  };

  const checkValidation = (values) => {
    let errors = {};

    const { name, email, password } = values;

    if (!name) {
      errors.name = "Invalid name field";
    }
    if (!email) {
      errors.email = "Invalid email field";
    }
    if (!password) {
      errors.password = "Invalid password field";
    }

    return {
      isValid: isObjectEmpty(errors),
      errors,
    };
  };

  return (
    <>
      <form>
        <InputGroup
          label={"What is your name?"}
          type={"text"}
          name={"name"}
          placeholder={"Enter Name..."}
          value={states.name.value}
          handleChange={handleChange}
        />
        <InputGroup
          label={"What is your Email?"}
          type={"email"}
          name={"email"}
          placeholder={"Enter Email..."}
          value={states.email.value}
          handleChange={handleChange}
        />
        <InputGroup
          label={"What is your password?"}
          type={"password"}
          name={"password"}
          placeholder={"Enter Password..."}
          value={states.password.value}
          handleChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
