import { Element } from "../App";

export default function boardToGrid(board: Element[][], n: number = 3): Element[][] {

    if (board.length === 0) return [];

    const numRows = board.length;
    const numCols = board[0].length;

    const blockRows = numRows / n;
    const blockCols = numCols / n;

    const result: Element[][] = Array.from({ length: blockRows * blockCols }, () => []);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const blockRow = Math.floor(i / blockRows);
            const blockCol = Math.floor(j / blockCols);
            const blockIndex = blockRow * blockCols + blockCol;
            result[blockIndex].push(board[i][j]);
        }
    }

    return result;
}