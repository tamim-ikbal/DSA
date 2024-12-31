let rotate = (nums,k)=>{
    let length = nums.length;
    while (k > length) {
        k = k - length
    }
    
    let n = length - k

    let newArray = []

    for (let index = n; index < length; index++) {
        newArray.push(nums[index])
    }

    for (let index = 0; index < n; index++) {
        newArray.push(nums[index])
    }
    
    for (let index = 0; index < nums.length; index++) {
        nums[index] = newArray[index]
    }

    // let roateted = nums.splice(-k)
    // nums.unshift(...roateted)
}

let nums = [1,2,3,4,5,6,7]
rotate(nums,6)
console.log(nums);

nums = [1,2]
rotate(nums,3)
console.log(nums);
