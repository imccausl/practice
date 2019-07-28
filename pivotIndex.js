const pivotIndex = (nums) => {
    let left = 0;
    let right = nums.reduce((total, curr) => total+curr, 0);

    if (!nums.length) {
        return -1;
    }
    
    for(let i=0; i<nums.length; i++) {
        right -= nums[i];
        
        if (right === left) {
            return i;
        }

        left += nums[i];
    }
    
    return -1;
};

console.log(pivotIndex([[-1,-1,-1,-1,-1,-1]]))