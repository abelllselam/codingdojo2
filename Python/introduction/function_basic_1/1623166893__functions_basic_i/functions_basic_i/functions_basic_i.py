# #1
# def number_of_food_groups():
#     return 5
# print(number_of_food_groups()) #I predict that it will return 5


# #2
# def number_of_military_branches():
#     return 5
# print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches()) #there is no function with number of days... so the return would be error not defined


# #3
# def number_of_books_on_hold():
#     return 5
#     return 10
# print(number_of_books_on_hold())#it would only return the first number 5


# #4
# def number_of_fingers():
#     return 5
#     print(10)
# print(number_of_fingers())#it returns 5, does not print 10


# #5
# def number_of_great_lakes():
#     print(5)
# x = number_of_great_lakes()
# print(x) #the function is assigned to the variable x, therefore it prints 5


# #6
# def add(b,c):
#     print(b+c)
# print(add(1,2) + add(2,3))#it will add 3 then it will add 5 then it will print 8 as the sum of the two function calls but there is not return value therefore it can not do the addition


# #7
# def concatenate(b,c):
#     return str(b)+str(c)
# print(concatenate(2,5)) #because it is being forced to combine a string, then the string will be 25 rather than 7


# #8
# def number_of_oceans_or_fingers_or_continents():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(number_of_oceans_or_fingers_or_continents()) #in this case the function will return 5 or 10. because the condition would not allow it ro reach the return statements outside the condition.


# #9
# def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))#this will evaluate to 7
# print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))#this will evaluate to 14
# print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3)) #this will evaluate to 21


# #10
# def addition(b,c):
#     return b+c
#     return 10
# print(addition(3,5)) # will return on the first return statement which is 8


# #11
# b = 500
# print(b) #prints 500
# def foobar():
#     b = 300
#     print(b) #prints 300
# print(b) #prints 500
# foobar() #function call
# print(b) #prints 500


# #12
# b = 500
# print(b) #prints 500
# def foobar():
#     b = 300
#     print(b) #prints 300 after the function is run
#     return b 
# print(b) #prints 500
# foobar() # function call which will evaluate to 300
# print(b) #prints 500


# #13
# b = 500
# print(b) #prints 500
# def foobar():
#     b = 300 
#     print(b) #prints 300 after the function is run
#     return b
# print(b) #prints 500
# b=foobar() #assigning the function to b and prints 300
# print(b) #the function prints 300


# #14
# def foo():
#     print(1) #prints 1
#     bar() #calls another function and prints 3
#     print(2) #prints 2
# def bar():
#     print(3)
# foo() #calls the function foo, this is when all the printing will happen.


# #15
# def foo():
#     print(1) #prints 1
#     x = bar() #prints 3 
#     print(x) #prints 5
#     return 10 #returns 10
# def bar():
#     print(3)
#     return 5
# y = foo() #the function is called and assigned where 1,3,5,10 are going to be printing
# print(y)