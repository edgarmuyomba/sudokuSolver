const fetchBoard = async (): Promise<number[][]> => {
    let board: number[][] = [];
    try {

        var response = await fetch('https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}');
        var body = await response.json();
        board = body['newboard']['grids']['0']['value'];

    } catch (e) {

        // no internet, use the default

        board = [
            [
                4,
                0,
                7,
                0,
                0,
                0,
                0,
                1,
                6
            ],
            [
                2,
                0,
                0,
                4,
                6,
                0,
                0,
                3,
                0
            ],
            [
                0,
                0,
                0,
                3,
                0,
                7,
                0,
                9,
                2
            ],
            [
                0,
                0,
                3,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                9
            ],
            [
                0,
                0,
                0,
                8,
                0,
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0,
                9,
                0,
                7,
                0,
                4
            ],
            [
                0,
                0,
                2,
                7,
                0,
                0,
                1,
                0,
                0
            ],
            [
                3,
                0,
                0,
                1,
                0,
                6,
                0,
                0,
                0
            ]
        ]

    }    
    
    return board;
}

export default fetchBoard;

// credit https://sudoku-api.vercel.app/