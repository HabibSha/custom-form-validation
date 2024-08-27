import InputGroup from "./components/shared/InputGroup/InputGroup";

function App() {
  return (
    <>
      <form>
        <InputGroup
          label={"What is your name?"}
          type={"text"}
          name={"name"}
          placeholder={"Enter Name..."}
        />
        <InputGroup
          label={"What is your Email?"}
          type={"email"}
          name={"email"}
          placeholder={"Enter Email..."}
        />
        <InputGroup
          label={"What is your password?"}
          type={"password"}
          name={"password"}
          placeholder={"Enter Password..."}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
