function diagonalDifference(arr) {
    const x = [];
    const y = [];
    const rows = arr[0]

    for(let i=1;i<=rows;i++) {
        const secondArr = arr[i];

        x.push(secondArr[i-1])
        y.push(secondArr[rows - i]);
    }

    const sumX = x.reduce((total, curr) => total + curr, 0);
    const sumY = y.reduce((total, curr) => total + curr, 0);

    return Math.abs(sumX - sumY);
}

const arr = [[3], [11,2,4], [4,5,6], [10,8,-12]];

console.log(diagonalDifference(arr));
