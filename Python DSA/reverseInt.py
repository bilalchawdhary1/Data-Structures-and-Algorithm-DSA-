# Method 1 (Easy – Convert to String)
num = 52521
# def reverseInt(num):
#     value_sing = -1 if num < 0 else 1
#     num = abs(num)
#     reverse_num = int(str(num)[::-1])
#     return value_sing * reverse_num

# print(reverseInt(num))

# Method 1 (Easy – Convert to String)
def reverse_Int(num):
    value_sing = -1 if num < 0 else 1
    num = abs(num)

    rev = 0
    while num != 0:
        last_Int = num % 10
        rev = rev * 10 + last_Int
        num = num // 10
    return value_sing * rev

print(reverse_Int(num))