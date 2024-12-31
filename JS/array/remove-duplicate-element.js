// const nums = [10,20,30,49,70,89,100,120,140,400,430,460,500,]
// nums.sort((a,b)=>b-a)
// console.log(nums);

const nums = Array.from({ length: 20000000 }, (_, i) => (i + 1) * 10);
nums.sort((a,b)=>a-b)
console.log(nums);
function binarySearch(array,target){
    let left = 0
    let right = array.length - 1

    let loops = 0
    while(left <= right){    
        loops++
        console.log('Looping times: '+loops);
        
        let mid = Math.floor((left + right) / 2)
        if(array[mid] === target){
            return mid;
        }else if(array[mid] > target){
            right = mid - 1
        }else if(array[mid] < target){
            left = mid + 1
        }
    }

    return -1

}

console.log(binarySearch(nums,199999750));
