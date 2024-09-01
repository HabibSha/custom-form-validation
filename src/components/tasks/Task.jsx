import useForm from "../../hooks/useForm";

const init = {
  checked: false,
  text: "",
  group: "home",
  priority: "medium",
  file: "",
};

const Task = () => {
  const { formState, handleChange, handleSubmit } = useForm({
    init,
    validate: true,
  });

  const cb = ({ values }) => {
    console.log(values);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, cb)}>
      <input
        type="checkbox"
        name="checked"
        checked={formState.checked.value}
        onChange={handleChange}
      />
      <div>
        <input
          type="text"
          name="text"
          value={formState.text.value}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="group" id="group" onChange={handleChange}>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
      </div>
      <div>
        <input
          type="radio"
          name="priority"
          value={"low"}
          onChange={handleChange}
        />
        Low
        <input
          type="radio"
          name="priority"
          value={"medium"}
          onChange={handleChange}
        />
        Medium
        <input
          type="radio"
          name="priority"
          value={"high"}
          onChange={handleChange}
        />
        High
      </div>
      <input
        type="file"
        name="file"
        value={formState.file.value}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Task;
