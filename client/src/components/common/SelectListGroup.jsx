import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// 1. Same thing as TextAreaFieldGroup but we just add in options
// 2. We're going to loop and map through options and create option tags

const SelectListGroup = ({
  name,
  value,
  label,
  error,
  info,
  type,
  onChange,
  options
}) => {

  const selectOptions = options.map(option =>(
    <option key={option.label} value={option.value}>
      {option.label}
    </option>

  ))


  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}>
      </select>
    {info && <small className="form-text text-muted">{info}</small>}
    {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  )
}


SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

SelectListGroup.defaultProps = {
  type: 'text'
};

export default SelectListGroup;
