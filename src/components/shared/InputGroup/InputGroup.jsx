import PropTypes from "prop-types";

import InputText from "../../UI/InputText/InputText";

const InputGroup = ({
  label,
  placeholder,
  type,
  name,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
      />
      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default InputGroup;
