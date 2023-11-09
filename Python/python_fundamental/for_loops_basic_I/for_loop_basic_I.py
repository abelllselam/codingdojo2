# # 1.Basic - Print all integers from 0 to 150.
# for integer in range(151):
#     print(integer)

# 2.Multiples of Five - Print all the multiples of 5 from 5 to 1,000
# for multiple in range(5, 1001, 5):
#     print(multiple)

# # 3.Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

# for integer in range(1, 101):
#     if integer % 5 == 0 and integer % 10 != 0:
#         print("Coding")
#     elif integer % 5 == 0 and integer % 10 == 0:
#         print("Coding Dojo")
#     else:
#         print(integer)


# # 4.Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

# sum = 0

# for i in range(0, 500001):
#     if i % 2 == 0:
#         sum = sum + i
# print(sum)

# # 5.Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

# for i in range(2018, 0, -4):
#     print(i)

# 6.Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

low_num = 2
high_num = 9
mult = 3

for i in range(low_num, high_num + 1, mult):
    if mult <= high_num:
        print(mult, ",", (low_num * mult), ",", (mult * mult))
