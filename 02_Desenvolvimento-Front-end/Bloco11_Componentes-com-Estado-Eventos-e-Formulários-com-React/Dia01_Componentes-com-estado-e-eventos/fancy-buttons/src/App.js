import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      click1: 0,
      click2: 0,
      click3: 0,
    }
  }
  clickButton1 = () => {
    this.setState(({click1}) => ({
      click1: click1 + 1,
    }));
    console.log(`Botão 1 = ${this.buttonColor(this.state.click1)}`);
  }

  clickButton2 = () => {
    this.setState(({click2}) => ({
      click2: click2 + 1,
    }));
    console.log(`Botão 2 = ${this.buttonColor(this.state.click2)}`);
  }

  clickButton3 = () => {
    this.setState(({click3}) => ({
      click3: click3 + 1,
    }));
    console.log(`Botão 3 = ${this.buttonColor(this.state.click3)}`);
  }

  buttonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    return (
      <>
        <button
          onClick={this.clickButton1}
          style={{backgroundColor: this.buttonColor(this.state.click1)}}
        >
          Botão 1 = {this.state.click1}
        </button>

        <button
          onClick={this.clickButton2}
          style={{backgroundColor: this.buttonColor(this.state.click2)}}
        >
          Botão 2 = {this.state.click2}
        </button>

        <button
          onClick={this.clickButton3}
          style={{backgroundColor: this.buttonColor(this.state.click3)}}
        >
          Botão 3 = {this.state.click3}
        </button>
      </>
    );
  }
}

export default App;
