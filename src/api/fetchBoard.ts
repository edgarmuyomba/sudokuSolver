const fetchBoard = async () => {
    let board: number[][] = [];
    try {

        var response = await fetch('https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}');
        var body = await response.json();
        board = body['newboard']['grids']['0']['value'];

    } catch (e) {

        // no internet

    }    
    
    return board;
}

export default fetchBoard;