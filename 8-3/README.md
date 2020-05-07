1 - The sum (a, b) function returns the sum of parameter a and b.

1. Test if the sum return (4, 5) is 9
2. Test if the sum return (0, 0) is 0
3. Test if the sum function throws an error when the parameters are 4 and "5" (string 5)
4. Test if the error message is “parameters must be numbers” when making the sum call (4, "5")

2 - The function myIndexOf (arr, item) receives an arr array, an item and returns the item index or -1 if the item does not belong to the arr array.

1. Test if the myIndexOf call ([1, 2, 3, 4], 3) returns the expected value
2. Test whether the myIndexOf call ([1, 2, 3, 4], 5) returns the expected value

3 - The mySum (arr) function receives an arr array and returns the sum of its elements.

1. Test if the mySum call ([1, 2, 3, 4]) returns the value 10
2. Test whether the mySum call ([1, -2, -3, 4]) returns the expected value

4 - The myRemove (arr, item) function receives an arr array and returns a copy of that array without the item element if it exists in the array.

1. Check if the myRemove call ([1, 2, 3, 4], 3) returns the expected array
2. Check that the myRemove call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
3. Check that the array passed by parameter has not changed
4. Check if the myRemove call ([1, 2, 3, 4], 5) returns the expected array

5 - The myRemoveWithoutCopy (arr, item) function receives an arr array and returns the array itself without the item element if it exists in the array.

1. Check if the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) returns the expected array
2. Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
3. Make a call to the myRemoveWithoutCopy function and check if the array passed by parameter has changed
4. Check if the myRemoveWithoutCopy call ([1, 2, 3, 4], 5) returns the expected array

6 - The function myFizzBuzz (num) receives a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible by only 3, returns "buzz" if divisible only by 5, returns the number itself if it is not divisible by 3 or 5 and returns false if one is not a number.

1. Make a call with a number divisible by 3 and 5 and check if the return is as expected
2. Make a call with a number divisible by 3 and check if the return is as expected
3. Make a call with a number divisible by 5 and check if the return is as expected
4. Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected
5. Make a call with a parameter that is not a number and check if the return is as expected

7 - Test if a variable has been defined.

8 - Test if a function has been defined.

9 - Use assert.ok () to test a condition.

10 - Compare two objects (JSON) to check if they are identical or not.

11 - Test a function that compares two numbers and returns true if the first is greater than the second and false otherwise.
