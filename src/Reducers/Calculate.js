import React from "react";

const updateHistory = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const calcHistory = state.slice();
      const newHistoryString = `${action.num1} ${action.oper} ${action.num2} = ${action.result}`;
      calcHistory.push(newHistoryString);
      return calcHistory;
    }
    case "CALCULATE_RESULT": {
      const num1 = Number(action.num1);
      const num2 = Number(action.num2);
      const oper = action.oper;
      let result = 0;

      // Switch to determine the math operation
      switch (oper) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = "?";
      }
      return <h1> Result = {result} </h1>;
    }
  }
};

export default updateHistory;
