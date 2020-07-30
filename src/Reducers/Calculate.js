const updateHistory = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const calcHistory = state.slice();
      const newHistoryString = `${action.num1} ${action.oper} ${action.num2} = ${action.result}`;
      calcHistory.push(newHistoryString);
      return calcHistory;
    }
  }
};

export default updateHistory;
