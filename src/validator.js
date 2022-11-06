
class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }

validate(sudoku) {

  const CORRECT_SUDOKU = [
    [8,3,5,4,1,6,9,2,7],
    [2,9,6,8,5,7,4,3,1],
    [4,1,7,2,9,3,6,5,8],
    [5,6,9,1,3,4,7,8,2],
    [1,2,3,6,7,8,5,4,9],
    [7,4,8,5,2,9,1,6,3],
    [6,5,2,7,8,1,3,9,4],
    [9,8,1,3,4,5,2,7,6],
    [3,7,4,9,6,2,8,1,5]
]

const INCORRECT_SUDOKU = [
    [8,3,5,4,1,6,9,2,7],
    [2,9,6,8,5,7,4,3,1],
    [4,1,7,2,9,3,6,5,8],
    [5,6,9,1,3,4,7,8,2],
    [1,2,3,6,7,8,5,4,9],
    [7,4,8,5,2,9,1,6,3],
    [6,5,2,7,8,1,3,9,4],
    [9,8,1,3,4,5,2,7,6],
    [3,7,4,9,6,2,8,1,1]
]

const INCOMPLETE_SUDOKU = [
  [0,0,5,4,1,6,9,2,7],
  [0,9,6,8,5,7,4,3,1],
  [4,1,7,2,9,3,6,5,8],
  [5,6,9,1,3,4,7,8,2],
  [1,2,3,6,7,8,5,4,9],
  [7,4,8,5,2,9,1,6,3],
  [6,5,2,7,8,1,3,9,4],
  [9,8,1,3,4,5,2,7,6],
  [3,7,4,9,6,2,8,1,5]
]

const WRONG_VALUES_SUDOKU = [
  [88,3,5,4,1,6,9,2,7],
  [2,9,6,8,5,7,4,3,1],
  [4,1,7,2,9,3,6,5,8],
  [5,6,9,1,3,4,7,8,2],
  [1,2,3,6,7,8,5,4,9],
  [7,4,8,5,2,9,1,6,3],
  [6,5,2,7,8,1,3,9,4],
  [9,8,1,3,4,5,2,7,6],
  [3,7,4,9,6,2,8,1,5]
]

function sequenceChecker (sequence) {
  const validSeq = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
  sequence.every( (num, i) => num === validSeq[i])
  const isAllZero = sequence.every(item => item === 0);
  if(isAllZero===0){
  return 'Not cool'
}
  console.log(validSeq)
}

function checkRows(matrix){
  let arr = matrix.map(seq => seq.sort())
  return arr.every(seqArr => sequenceChecker(seqArr))
}

function checkColumns(matrix){
  let columnMatrix = [[], [], [], [], [], [], [], [], []]
  matrix.forEach( array => array.forEach((num, i) => columnMatrix[i].push(num)))
  return checkRows(columnMatrix)
}

function makeBox(matrix, rowOne, colOne){
  let arr = [
      matrix[rowOne][colOne],
      matrix[rowOne][colOne + 1],
      matrix[rowOne][colOne + 2],
      matrix[rowOne + 1][colOne],
      matrix[rowOne + 1][colOne + 1],
      matrix[rowOne + 1][colOne + 2],
      matrix[rowOne + 2][colOne],
      matrix[rowOne + 2][colOne + 1],
      matrix[rowOne + 2][colOne + 2]
  ]
  return arr
}

function checkBoxes(matrix){
  let boxesMatrix = [
      makeBox(matrix, 0, 0),
      makeBox(matrix, 0, 3),
      makeBox(matrix, 0, 6),
      makeBox(matrix, 3, 0),
      makeBox(matrix, 3, 3),
      makeBox(matrix, 3, 6),
      makeBox(matrix, 6, 0),
      makeBox(matrix, 6, 3),
      makeBox(matrix, 6, 6)
  ]
  return checkRows(boxesMatrix)
}

  function validSudoku (matrix) {
    const copy1 = [...matrix.map(arr => [...arr])]
    const copy2 = [...matrix.map(arr => [...arr])]
    const copy3 = [...matrix.map(arr => [...arr])]
    const checker = [
        checkRows(copy1),
        checkColumns(copy2),
        checkBoxes(copy3)]
    if (checker.every(seq => seq)){
        return "Sudoku is valid."
    } else {
        return "Sudoku is invalid."
    }
}
//return validSudoku(CORRECT_SUDOKU) // => "Sudoku is valid."
//return validSudoku(INCORRECT_SUDOKU) // => "Sudoku is invalid."
return validSudoku(INCOMPLETE_SUDOKU) // => "Sudoku is valid but incomplete."
//return validSudoku(WRONG_VALUES_SUDOKU) // => "Wrong values"
}
}
module.exports = Validator