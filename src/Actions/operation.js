const updateData = (calcData) => {
  console.log(calcData);
  return {
    type: "UPDATE_HISTORY",
    num1: calcData.num1,
    num2: calcData.num2,
    oper: calcData.oper,
    result: calcData.result,
  };
};

export default updateData;
