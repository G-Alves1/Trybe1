import './App.css';
import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class App extends React.Component {
  render() {
    const { handleChange, handleOnBlur, currentState, sendForm, resetForm, } = this.props;
    return (
      <form className="App">
        <PersonalForm 
          handleChange={ handleChange }
          handleOnBlur={ handleOnBlur }
          currentState={ currentState }
        />
        <ProfessionalForm handleChange={ handleChange }/>
        <input
          type="button"
          onClick={sendForm}
          value="send"
        />
        <input
          type="button"
          onClick={resetForm}
          value="reset"
        />
      </form>
    );
  }
}

export default App;
