# Syntax, Logical and Runtime Errors

Some of the most common errors in JavaScript:
- ReferenceError
- SyntaxError
- TypeError
- RangeError

There are some other errors in JavaScript. These other errors include:
- AggregateError
- Error
- InternalError
- URIError

## ReferenceError
A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, attempting to console log a variable that doesn't exist:

~~~
console.log(username);
~~~

If the variable named username hasn't been declared, the above line of code will result in the following output

~~~
Uncaught ReferenceError: username is not defined
~~~

## SyntaxError
any kind of invalid JavaScript code will cause a SyntaxError.

For example:
~~~
var a "this is an invalid assignment operator"
~~~

The above line of code will throw the following error:

~~~
Uncaught SyntaxError: Unexpected string
~~~

The SyntaxError cannot tbe caught using the try-catch block

## TypeError
A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the pop() method on a string:

~~~
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
~~~

## RangeError
A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

A simple example is converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (binary number)

~~~
(10).toString(2); // '1010'
~~~

The value of 2 when passed to the toString() method, is like saying to JavaScript: "convert the value of 10 of the Base 10 number system, to its counter-part in the Base 2 number system".

JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part.

Besides using Base 2 number system, I can also use the Base 8, like this:

~~~
(10).toString(8); // 12
~~~

You get back the value 12 which is the plain number 10, written in Base 8 number system.

However, ifyou try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, you will get the RangeError, because a non-existing Base 100 system is out of range of the number systems that are available to the toString() method:

~~~
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
~~~