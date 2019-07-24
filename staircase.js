function staircase(n) {
    const staircase = [];

    for (let row = 0; row < n; row++) {
        const arr = [];

        for(let column = 1; column <= n; column++) {
            if(column >= n - row) {
                arr.push('#');
            } else {
                arr.push(' ');
            }
        }

        staircase.push(arr);
    }

    staircase.forEach(row => console.log(row.join('')));
}

staircase(100);