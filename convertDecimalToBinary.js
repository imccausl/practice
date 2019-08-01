function convertToBinary(n) {
    const binaryArr = [];

    while (n>0) {
        const remainder = n % 2;
        n = Math.floor(n / 2);

        binaryArr.unshift(remainder);
    } 

    let oneCount = 0;
    let isOne = false;
    const countArray = [];

    for(let i = 0; i< binaryArr.length; i++) {
        const digit = binaryArr[i];
       
        if (digit === 1) {
            isOne = true;
            oneCount += 1;
        } else if (digit === 0 && isOne) {
            countArray.push(oneCount);
            oneCount = 0;
            isOne = false;
        } 
    }
    countArray.push(oneCount);

    console.log(countArray.reduce((a, b) => Math.max(a, b)))
}

convertToBinary(111)