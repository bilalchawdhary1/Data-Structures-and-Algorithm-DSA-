# binary-search 
# Time Complexity: O(log n)
# Space Complexity: O(1)
# Did this code successfully run on Leetcode : Yes
 
# def search(nums, target):   
#     low = 0
#     high = len(nums) - 1
    
#     while low <= high:
#         mid = low + (high - low) // 2
        
#         if nums[mid] == target:
#             return mid
#         elif nums[mid] < target:
#             low = mid + 1
#         else:
#             high = mid - 1
            
#     return -1
# nums = [-1,0,3,5,9,12]
# target = 9
# print(search(nums, target))







def binary_search(nums , target):
    if not nums:
        return -1
    left = 0
    right = len(nums) -1
    while left<= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        elif nums[mid] > target:
            right = mid - 1
    return -1 

nums = [-1,0,3,5,9,12]
target = 9
print(binary_search(nums, target))

