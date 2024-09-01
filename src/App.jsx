import InputGroup from "./components/shared/InputGroup/InputGroup";
import Task from "./components/tasks/Task";
import useForm from "./hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required!";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  }

  return errors;
};

const App = () => {
  const {
    formState: state,
    handleChange,
    handleBlur,
    handleFocused,
    handleClearInputs,
    handleSubmit,
  } = useForm({ init, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      alert("[ERROR]" + JSON.stringify(errors));
    } else {
      alert("[SUCCESS]" + JSON.stringify(values));
    }
  };

  return (
    <div>
      <h1>Custom form with custom hook</h1>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <InputGroup
          type={"text"}
          name={"firstName"}
          label={"FirstName: "}
          placeholder={"John"}
          value={state.firstName.value}
          onChange={handleChange}
          onFocus={handleFocused}
          onBlur={handleBlur}
          error={state.firstName.error}
        />
        <InputGroup
          type={"text"}
          name={"lastName"}
          label={"LastName: "}
          placeholder={"Doe"}
          value={state.lastName.value}
          onChange={handleChange}
          onFocus={handleFocused}
          onBlur={handleBlur}
          error={state.lastName.error}
        />
        <InputGroup
          type={"email"}
          name={"email"}
          label={"Email: "}
          placeholder={"John@gmail.com"}
          value={state.email.value}
          onChange={handleChange}
          onFocus={handleFocused}
          onBlur={handleBlur}
          error={state.email.error}
        />
        <InputGroup
          type={"password"}
          name={"password"}
          label={"Password: "}
          placeholder={"******"}
          value={state.password.value}
          onChange={handleChange}
          onFocus={handleFocused}
          onBlur={handleBlur}
          error={state.password.error}
        />
        <div>
          <button type="reset" onClick={handleClearInputs}>
            Clear
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
      <Task />
    </div>
  );
};

export default App;
