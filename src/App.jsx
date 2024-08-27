import { useState } from "react";
import InputGroup from "./components/shared/InputGroup/InputGroup";
import { deepClone } from "./utils/object-utils";

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
    const { name, value } = e.target;

    const oldState = deepClone(states);
    oldState[name].value = value;

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
