import PropTypes from "prop-types";

const InputText = (props) => {
  return (
    <div>
      <input {...props} className={`${props.error ? "border-red" : ""}`} />
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputText;
