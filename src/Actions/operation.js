import React from "react";
import App from "../Components/App";

const updateData = (calcData) => {
  return {
    type: "UPDATE_HISTORY",
    num1: calcData.num1,
    num2: calcData.num2,
    oper: calcData.oper,
    result: calcData.result,
  };
};

// const operation = (calcData) => {
//   return {
//     type: "CALCULATE_RESULT",
//     num1: calcData.num1,
//     num2: calcData.num2,
//     oper: calcData.oper,
//   };
// };
export default updateData;
