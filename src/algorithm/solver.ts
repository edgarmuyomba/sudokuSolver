import { Element } from "../App";

export default function solveSudoku(board: Element[][]): void {
    solve(board);

}

function solve(board: Element[][]): boolean {

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
                        if (solve(board)) {
                            return true;
                        }
                        board[i][j] = {
                            value: null,
                            valid: false,
                            init: null
                        };;
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