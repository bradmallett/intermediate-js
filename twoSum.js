// Problem Statement — Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const findTwoSum = (nums, target) =>{
    let comp = new Map();

    for(let i = 0; i < nums.length; i++) {
        
        if(comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
}
console.log(findTwoSum([2, 11, 8, 15, 7], 9));


// const twoSum2 = (array, sum) => {
//     let newArr = [];

//     for(let i = 0; i < array.length; i++) {
//         let searchNum = sum - array[i];
        
//         if(array.includes(searchNum)) {
//             const searchNumIndex = array.indexOf(searchNum);
//             newArr.push([i, searchNumIndex]);
//         }
//     }
//     return newArr;
// }
// console.log(twoSum2([10, 15, 8, 70, 18, 8, 63, 7, 1, 5, 6], 71));



