const test1 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
];

const test2 = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 7 ],
    [ 7, 8, 9, 9 ],
    [ 1, 2, 3, 4 ],
]

const test3 = [
    [ 1, 2, 3, 4, 6 ],
    [ 4, 5, 6, 7, 4 ],
    [ 7, 8, 9, 9, 8 ],
    [ 1, 2, 3, 4, 3 ],
    [ 7, 8, 9, 9, 2 ],
]

const findDiagonalOrder = matrix => {
    const result = [];
    let row1 = 0;
    let row2 = matrix.length - 1;
    let col1 = 0;
    let col2 = matrix[0].length -1;

    while(row1 <= row2 && col1 <= col2) {
        
    }
    

    return result;
}

findDiagonalOrder(test1);