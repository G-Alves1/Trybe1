import React from 'react';
import './App.css';

class ProfessionalForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="App">
        <fieldset>
          <legend>Dados profissionais:</legend>
          <label htmlFor="resume">
            Resumo:
            <textarea
              name="resume"
              id="resume"
              maxLength="1000"
              required
              placeholder="Resumo do currículo"
            />
          </label>
          <br />
          <label htmlFor="role">
            Cargo:
            <textarea
              name="role"
              id="role"
              maxLength="40"
              required
              placeholder="Cargo"
              onChange={handleChange}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação')
              }}
            />
          </label>
          <label htmlFor="roleDescription">
            <input
              type="text"
              name="roleDescription"
              id="roleDescription"
              maxLength="500"
              required
              placeholder="Descrição do cargo"
            />
          </label>
        </fieldset>
      </div>
    );
  }
}

export default ProfessionalForm;
