# MongoDB $in Operator with Array of Arrays
This example demonstrates an incorrect usage of MongoDB's `$in` operator with an array of arrays. The `$in` operator is intended to match documents where a field's value is present in a specified array. However, when providing an array of arrays, the `$in` operator does not function as expected. 

The bug lies in how the query is structured.  The `$in` operator is not designed to compare against nested arrays in this way. 

The solution shows how to use the `$elemMatch` operator to correctly match documents based on the nested arrays.