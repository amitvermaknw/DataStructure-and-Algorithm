var containsDuplicate = function (nums) {
    let dup = false;
    let newSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!newSet.has(nums[i])) {
            newSet.add(nums[i])
        } else {
            dup = true;
        }
    }

    return dup;
};

//Time O(n) space O(n)