import React from "react";
import "../App.css";
import { operation, updateData } from "../Actions/operation";
import { connect } from "react-redux";

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

  // update state values
  updateCalc(key, value) {
    this.setState({ [key]: value });
  }

  //
  calcResult = (event) => {
    event.preventDefault();
    this.props.dispatch(updateData(this.state));
    // simplify the variable to to make it shorter to write
  };
  render() {
    return (
      <>
        <h1>Welcome to my calculator</h1>
        <div className="container">
          {/* Calculate result upon submission of the form */}
          <form onSubmit={this.calcResult}>
            {/* Type number ensures that a valid number is input and the required tag to ensure no empty field. 
                This limits the need for error checking */}
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
            {this.props.dispatch(operation(this.state))}
            <p></p>
          </div>
        </div>
      </>
    );
  }
}
export default connect((state) => {
  return { updateData: state };
})(App);
