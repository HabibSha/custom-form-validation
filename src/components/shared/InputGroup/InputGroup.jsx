import InputText from "../../UI/InputText/InputText";

const InputGroup = ({ label, placeholder, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputText name={name} type={type} placeholder={placeholder ?? ""} />
    </div>
  );
};

export default InputGroup;
