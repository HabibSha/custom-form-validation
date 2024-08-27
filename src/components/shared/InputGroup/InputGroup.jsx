import InputText from "../../UI/InputText/InputText";

const InputGroup = ({
  label,
  placeholder,
  type,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputGroup;
