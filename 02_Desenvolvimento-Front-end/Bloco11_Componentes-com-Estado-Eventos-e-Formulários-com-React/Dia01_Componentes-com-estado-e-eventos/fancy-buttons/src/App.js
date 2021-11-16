import React from 'react';

class App extends React.Component {
  
  clickButton1 = () => console.log("Button 1");
  clickButton2 = () => console.log("Button 2");
  clickButton3 = () => console.log("Button 3");

  render() {
    return (
      <>
        <button onClick={this.clickButton1}>Botão 1</button>
        <button onClick={this.clickButton2}>Botão 2</button>
        <button onClick={this.clickButton3}>Botão 3</button>
      </>
    );
  }
}

export default App;
