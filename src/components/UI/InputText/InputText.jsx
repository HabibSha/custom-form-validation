const InputText = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
