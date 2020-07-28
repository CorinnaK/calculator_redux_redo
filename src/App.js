import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "", // Keep track of value in first input
      num2: "", // Keep track of value in second input
      oper: "+", // Keep track of what operand is selected
      result: "",
    };
  }
  updateCalc(key, value) {
    this.setState({ [key]: value });
  }
  calcResult = (event) => {
    event.preventDefault();

    const num1 = Number(this.state.num1);
    const num2 = Number(this.state.num2);
    let result = "";
    console.log(this.state.oper);
    switch (this.state.oper) {
      case "+":
        console.log("what's up");
      // this.setState(result: (num1 + num2));
      case "-":
        console.log("Subtraction is key");
        result = num1 - num2;
      case "*":
        result = num1 * num2;
      case "/":
        result = num1 / num2;
      default:
        result = num1 + num2;
    }
    console.log(result);
  };
  render() {
    return (
      <>
        <h1>Welcome to my calculator</h1>
        <form onSubmit={this.calcResult}>
          <label htmlFor="num1">First Number Input:</label>
          <input
            type="number"
            name="num1"
            id="num1"
            required
            value={this.state.num1}
            onChange={(event) => this.updateCalc("num1", event.target.value)}
          />
          <label htmlFor="oper">Operation:</label>
          <select
            value={this.state.oper}
            onChange={(event) => this.updateCalc("oper", event.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
          <label htmlFor="num2">First Number Input:</label>
          <input
            type="text"
            id="num2"
            required
            value={this.state.num2}
            onChange={(event) => this.updateCalc("num2", event.target.value)}
          />
          <input type="submit" value="Calculate" />
        </form>
        <div>
          <h1>Result!!!</h1>
          <p></p>
        </div>
      </>
    );
  }
}

export default App;
