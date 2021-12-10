import React from 'react';
import Select from './Select';
import TextArea from './TextArea';

class Forms extends React.Component {
  constructor() {
    super();
    
    this.state = {
      textArea: '',
      option: '',
      check: false,
      formularioComErros: true,
    };
  }

  handleError = () => {
    const { textArea, option } = this.props;

    const errorCases = [
      textArea,
      !option
    ]

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })

  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  };

  render() {
    const { option, textArea, check, formularioComErros } = this.state;
    return (
      <>
        <form>
          <fieldset>
            <Select value={option} handleChange={this.handleChange } />
          </fieldset>
          <fieldset>
            <TextArea value={textArea} handleChange={this.handleChange}/>
          </fieldset>
          <label htmlFor="check">
            <input
              id="check"
              type="checkbox"
              name="check"
              value={ check }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="file">
            <input
              id="file"
              type="file"
            />
          </label>
        </form>
        { formularioComErros
          ? <span style={{color: 'red'}}>Preencha todos os campos</span>
          : <span style={{color: 'green'}}>Todos campos foram preenchidos</span> }
        </>
    );
  }
}

export default Forms;
