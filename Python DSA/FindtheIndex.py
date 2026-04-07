# Find the Index of the First Occurrence in a String
def strStr(haystack, needle):
    if not needle:
        return -1
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i: i + len(needle)] == needle:
            return 1
    return -1

print(strStr("helo", "ll"))