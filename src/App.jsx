import { useState } from "react";
import InputGroup from "./components/shared/InputGroup/InputGroup";

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
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: {
        ...state[name],
        value: value,
      },
    });
    console.log(state);
  };

  return (
    <>
      <form>
        <InputGroup
          label={"What is your name?"}
          type={"text"}
          name={"name"}
          placeholder={"Enter Name..."}
          value={state.name.value}
          handleChange={handleChange}
        />
        <InputGroup
          label={"What is your Email?"}
          type={"email"}
          name={"email"}
          placeholder={"Enter Email..."}
          value={state.email.value}
          handleChange={handleChange}
        />
        <InputGroup
          label={"What is your password?"}
          type={"password"}
          name={"password"}
          placeholder={"Enter Password..."}
          value={state.password.value}
          handleChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
