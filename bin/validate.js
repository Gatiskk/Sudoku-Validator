//bin#!/usr/bin/env node

const Validator = require('../src/validator.js')
const fs = require('fs')

const sudoku = process.argv[2]

if (!sudoku) {
  throw 'Please specify a sudoku file to validate'
} else if (!sudoku.endsWith('.sudoku')) {
  throw 'The sudoku file has to be of .sudoku type'
} else {
  fs.readFile(sudoku, (error, data) => {
    if (error) throw error

    console.log(Validator.validate(data.toString()))
  })
}
