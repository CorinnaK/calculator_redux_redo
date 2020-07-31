import { v4 as uuidv4 } from "uuid";

const updateData = (calcData) => {
  console.log(calcData);
  return {
    type: "UPDATE_HISTORY",
    // key: uuidv4(),
    num1: calcData.num1,
    num2: calcData.num2,
    oper: calcData.oper,
    result: calcData.result,
  };
};

export default updateData;
