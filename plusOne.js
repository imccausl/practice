
const plusOne = (digits) => {
    const result = [];
    let carry = 0;

    for(let i=digits.length-1; i>=0; i--) {
        console.log("i:", i, "carry:", carry, "digits[i]:", digits[i]);

        if(i === digits.length-1) {
            if (digits[i] < 9) {
                result.push(digits[i] + 1)
            } else if (digits[i] === 9) {
                carry = 1;
                result.push(0);
            }
            continue;
        } 
        
        if (digits[i] === 9 && carry) {
            result.push(0);
            continue;
        }

        result.push(digits[i] + carry);
        carry = 0;
        continue; 
    }

    if (carry) {
        result.push(carry);
    }

    return result.reverse()
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))