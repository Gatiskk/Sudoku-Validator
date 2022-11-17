
class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }

  validate(sudoku) {

let myArray =  sudoku.split(/\r?\n/);
myArray.splice(3,1)
myArray.splice(6,1)
const newArr = myArray.map((element) => {
  return element.replace('|', '')
});
const newArr2 = newArr.map((element) => {
  return element.replace('|', '')
});
const newArr3 = newArr2.map((element) => {
  return element.split(' ');
});
//console.log(value)
  
function isValidSudoku(board) {
  let store = {
    rows: {},
    cols: {},
    square: {},
  };
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const box = board[i][j];
      if(box > 9){
        return "Sudoku is invalid."
      }

      if (!store["rows"][i] && box !== "0") {
        store["rows"][i] = [];
        store["rows"][i].push(box);
      } else if (box !== "0" && !store["rows"][i].includes(box)) {
        store["rows"][i].push(box);
      } else if (store["rows"][i] && store["rows"][i].includes(box)) {
        return "Sudoku is invalid.";
      }

      if (!store["cols"][j] && box !== "0") {
        store["cols"][j] = [];
        store["cols"][j].push(box);
      } else if (box !== "0" && !store["cols"][j].includes(box)) {
        store["cols"][j].push(box);
      } else if (store["cols"][j] && store["cols"][j].includes(box)) {
        return "Sudoku is invalid.";
      }

      const squareRowId = Math.ceil((i + 1) / 3);
      const squareColId = Math.ceil((j + 1) / 3);
      const squareId = `${squareRowId}-${squareColId}`;

      if (!store["square"][squareId] && box !== "0") {
        store["square"][squareId] = [];
        store["square"][squareId].push(box);
      } else if (box !== "0" && !store["square"][squareId].includes(box)) {
        store["square"][squareId].push(box);
      } else if (
        store["square"][squareId] &&
        store["square"][squareId].includes(box)
      ) {
        return "Sudoku is invalid.";
      }
      if (box == "0" || !store["square"][squareId].includes(box)){
        return "Sudoku is valid but incomplete."
      }
    }
  }
  return "Sudoku is valid.";
}
return isValidSudoku(newArr3)
}
}

module.exports = Validator