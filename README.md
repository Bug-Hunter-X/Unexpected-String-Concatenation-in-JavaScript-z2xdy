# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle error in JavaScript related to type coercion and the unexpected concatenation of strings and numbers.

## The Bug

JavaScript's dynamic typing system sometimes leads to implicit type coercion, resulting in unexpected behavior when operating on variables of different types. In this specific instance, the `+` operator performs string concatenation when one of the operands is a string.

## Solution

The solution involves explicitly type checking or converting the variables to ensure the intended operation occurs.  Use `parseInt()` or `Number()` to convert strings to numbers before performing arithmetic operations.