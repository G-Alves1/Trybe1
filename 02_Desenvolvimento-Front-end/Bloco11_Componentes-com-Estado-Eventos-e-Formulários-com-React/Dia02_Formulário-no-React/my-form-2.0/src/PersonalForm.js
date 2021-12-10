import React from 'react';
import './App.css';

const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

class PersonalForm extends React.Component {
  render() {
    const { handleChange, handleOnBlur, currentState } = this.props;
    
    return (
      <div className="App">
        <fieldset>
          <legend>Dados pessoais</legend>
          <label htmlFor="name">
            <span>Nome: </span>
            <input
              type="name"
              name="name"
              id="name"
              maxLength="40"
              placeholder="Seu nome"
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <span>Email: </span>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              maxLength="50"
              placeholder="email@email.com"
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <span>Cpf: </span>
          <label htmlFor="cpf">
            <input
              type="text"
              name="cpf"
              id="cpf"
              maxLength="11"
              required
              placeholder="000.000.000-00"
              onChange={handleChange}
            />
          </label>
          <br />
          <span>Endereço: </span>
          <label htmlFor="address">
            <input
              type="text"
              name="address"
              id="address"
              maxLength="200"
              required
              placeholder="Rua / Avenida / etc"
              onChange={handleChange}
            />
          </label>
          <br />
          <span>Cidade: </span>
          <label htmlFor="city">
            <input
              type="text"
              id="city"
              name="city"
              maxLength="28"
              placeholder="Sua cidade"
              value={currentState.city}
              onBlur={handleOnBlur}
              onChange={handleChange}
            />
          </label>
          <br />
          <span>Estado: </span>
          <label htmlFor="countryState">
            <select
              name="countryState"
              id="countryState"
              required
              onChange={handleChange}
              defaultValue=""
            >
              <option value=""></option>
              {
                states.map((value, key) => (
                <option key={ key }>{ value }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="house">
            <input
              type="radio"
              name="houseType"
              id="house"
              value="Casa"
              onChange={handleChange}
            />
            Casa
          </label>
          <label htmlFor="apartment">
            <input
              type="radio"
              name="houseType"
              id="apartment"
              value="Apartamento"
              onChange={handleChange}
            />
            Apartamento
          </label>
        </fieldset>
      </div>
    );
  }
}

export default PersonalForm;
