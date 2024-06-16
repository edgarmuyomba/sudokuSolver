import { Element } from "../App";

export default function solveSudoku(board: Element[][]): Element[][][] {

    let solvingSteps = [board.map(row => row.map(cell => ({ ...cell })))];


    solve(board, solvingSteps);

    return solvingSteps;

}

function solve(board: Element[][], steps: Element[][][]): boolean {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j].value == null) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = {
                            value: num,
                            valid: true,
                            init: null
                        };
                        steps.push(board.map(row => row.map(cell => ({ ...cell }))));
                        if (solve(board, steps)) {
                            return true;
                        }
                        board[i][j] = {
                            value: num,
                            valid: false,
                            init: null
                        };
                        steps.push(board.map(row => row.map(cell => ({ ...cell }))));
                        board[i][j].value = null;
                        board[i][j].valid = true;
                    }

                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board: Element[][], row: number, col: number, num: number): boolean {

    for (let i = 0; i < 9; i++) {
        if (board[i][col].value === num) {
            return false;
        }
        if (board[row][i].value === num) {
            return false;
        }
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3].value === num) {
            return false;
        }
    }
    return true;
}

// credit: https://leetcode.com/u/NotReeceHarris/