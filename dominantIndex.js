const dominantIndex = (nums) => {
    const largestNum = nums.reduce((a, b) => Math.max(a, b));
    let index = 0;

    for(let i=0; i<nums.length; i++) {
        if (largestNum / nums[i] < 2 && largestNum / nums[i] !== 1) {
            return -1
        }

        if (nums[i] === largestNum) {
            index = i;
        }
    }

    return index;
};

console.log(dominantIndex([0,0,0,1]));