import fetchBoard from "../api/fetchBoard";
import { Element } from "../App";

export default async function newBoard(): Promise<Element[][]> {

    let board = await fetchBoard();

    let result = board.map((row: number[]) =>
        row.map((val: number) => {
            return {
                value: val != 0 ? val : null,
                init: val != 0 ? true : null,
                valid: null,
            };
        }))

    return result;
}