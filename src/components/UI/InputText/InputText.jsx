import PropTypes from "prop-types";

import "../../../App.css";

const InputText = ({ error, ...props }) => {
  return (
    <div>
      <input {...props} className={`${error ? "border-red" : ""}`} />
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputText;
