// import { v4 as uuidv4 } from "uuid";

const updateHistory = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const calcHistory = state.slice();
      const newHistoryString = `${action.num1} ${action.oper} ${action.num2} = ${action.result}`;
      // const newHistoryObj = {
      //   value: newHistoryString,
      //   key: uuidv4(),
      // };
      calcHistory.push(newHistoryString);
      return calcHistory;
    }
    default: {
      console.log("error");
      return state;
    }
  }
};

export default updateHistory;
