# Move Zero 
# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zeroes.
# Time Complexity: O(n)
# Space Complexity: O(1)

from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        i = 0
        for j in range(len(nums)):
            if nums[j] != 0:
                # print(nums)
                nums[i], nums[j] = nums[j], nums[i]
                # print(nums)
                i += 1


nums = [0,1,0,3,12]
Solution().moveZeroes(nums)
print(nums)

# explanation: we are using two pointers i and j, where i is the slow pointer and j is the fast pointer. We are iterating through the array with j and whenever we find a non-zero element, we are swapping it with the element at index i and incrementing i. This way, all the non-zero elements are moved to the front of the array and all the zeroes are moved to the end of the array.

