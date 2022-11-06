
class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }

validate(sudoku) {

  //VALID SUDOKU BOARD
  const board =
  [["5","3","4","6","7","8","9","1","2"]
  ,["6","7","2","1","9","5","3","4","8"]
  ,["1","9","8","3","4","2","5","6","7"]
  ,["8","5","9","7","6","1","4","2","3"]
  ,["4","2","6","8","5","3","7","9","1"]
  ,["7","1","3","9","2","4","8","5","6"]
  ,["9","6","1","5","3","7","2","8","4"]
  ,["2","8","7","4","1","9","6","3","5"]
  ,["3","4","5","2","8","6","1","7","9"]];

  //INVALID SUDOKU BOARD
  const board2 =
  [["3","3","4","6","7","8","9","1","2"]
  ,["3","7","2","1","9","5","3","4","8"]
  ,["1","9","8","3","4","2","5","6","7"]                  
  ,["8","5","9","7","6","1","4","2","3"]
  ,["4","2","6","8","5","3","7","9","1"]
  ,["7","1","3","9","2","4","8","5","6"]
  ,["9","6","1","5","3","7","2","8","4"]
  ,["2","8","7","4","1","9","6","3","5"]
  ,["3","4","5","2","8","6","1","7","9"]];

  //VALID SUDOKU BOARD, BUT NOT COMPLETED
  const board3 =
  [["0","0","4","6","7","8","9","1","2"]
  ,["6","7","2","1","9","5","3","4","8"]
  ,["1","9","8","3","4","2","5","6","7"]                  
  ,["8","5","9","7","6","1","4","2","3"]
  ,["4","2","6","8","5","3","7","9","1"]
  ,["7","1","3","9","2","4","8","5","6"]
  ,["9","6","1","5","3","7","2","8","4"]
  ,["2","8","7","4","1","9","6","3","5"]
  ,["3","4","5","2","8","6","1","7","9"]];

  //SUDOKU BOARD WITH WRONG VALUE
  const board4 =
  [["99","3","4","6","7","8","9","1","2"]
  ,["6","7","2","1","9","5","3","4","8"]
  ,["1","9","8","3","4","2","5","6","7"]
  ,["8","5","9","7","6","1","4","2","3"]
  ,["4","2","6","8","5","3","7","9","1"]
  ,["7","1","3","9","2","4","8","5","6"]
  ,["9","6","1","5","3","7","2","8","4"]
  ,["2","8","7","4","1","9","6","3","5"]
  ,["3","4","5","2","8","6","1","7","9"]];
  

  function oneSetValidSudoku(board) {
    let set = new Set()
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const value = board[i][j]
              if(value === "0"){
                return "Sudoku is valid but incomplete."
              } 
              if(value <= 9 && value >= 1){
                if (value !== ".") {
                  const row = `${value} at row ${i}`
                  const column = `${value} at column ${j}`
                  const box = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                  //console.log(`${row}, ${column}, ${box}`)
                  if (set.has(row) || set.has(column) || set.has(box)) {
                      return 'Sudoku is invalid.'
                  } else {
                      set.add(row)
                      set.add(column)
                      set.add(box)
                  }
            }
        } else {
          return 'Sudoku is invalid. Wrong values'
        }
    }
    return 'Sudoku is valid.'
  }
  }
              
  //return oneSetValidSudoku(board)
  //return oneSetValidSudoku(board2)
  //return oneSetValidSudoku(board3)
  return oneSetValidSudoku(board4)
}
}
module.exports = Validator