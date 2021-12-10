import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props
    
    let error = undefined;
    if (value.length > 120) error = " <- Texto muito grande!";
    else if (value.length === 0) error = " <- Digite algo!";

    return (
      <label htmlFor="textArea">
        <textarea
          id="textArea"
          name="textArea"
          value={ value }
          onChange={ handleChange }
        />
        <span>{ error }</span>
      </label>
    );
  }
}

TextArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
