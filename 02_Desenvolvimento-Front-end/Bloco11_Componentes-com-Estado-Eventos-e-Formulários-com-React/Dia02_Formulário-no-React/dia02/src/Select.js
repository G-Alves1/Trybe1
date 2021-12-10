import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length === 0) error = " <- Selecione uma opção"
    return (
      <label htmlFor="select">
        <select
          id="select"
          name="option"
          value={value}
          onChange={handleChange}          
        >
          <option></option>
          <option value="option1" >Option 1</option>
          <option value="option2" >Option 2</option>
        </select>
        <span>{ error ? error : ' OK!' }</span>
      </label>
    );
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
