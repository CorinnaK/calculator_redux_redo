import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "", // Keep track of value in first input
      num2: "", // Keep track of value in second input
      oper: "+", // Keep track of what operand is selected
      result: "", // Keep track of results to display later
    };
  }
  updateCalc(key, value) {
    this.setState({ [key]: value });
  }
  calcResult = (event) => {
    event.preventDefault();

    const num1 = Number(this.state.num1);
    const num2 = Number(this.state.num2);
    const oper = this.state.oper;
    // Used if statements here, could not get switch to work, need more guidance
    if (oper === "+") {
      this.setState({ result: num1 + num2 });
    } else if (oper === "-") {
      this.setState({ result: num1 - num2 });
    } else if (oper === "*") {
      this.setState({ result: num1 * num2 });
    } else if (oper === "/") {
      this.setState({ result: num1 / num2 });
    }
  };
  render() {
    return (
      <>
        <h1>Welcome to my calculator</h1>
        <div className="container">
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
            <label htmlFor="num2">Second Number Input:</label>
            <input
              type="number"
              id="num2"
              required
              value={this.state.num2}
              onChange={(event) => this.updateCalc("num2", event.target.value)}
            />
            <input type="submit" id="submit" value="Calculate" />
          </form>
          <div>
            <h1>Result = {this.state.result}</h1>
            <p></p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
