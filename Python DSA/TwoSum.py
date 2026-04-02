# Problem Statement

# Given a list of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
# 👉 You can assume:
# Each input has exactly one solution
# You cannot use the same element twice

# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Solution
nums = [2,7,11,15]
target = 9
def twoSum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return []
print(twoSum(nums, target))