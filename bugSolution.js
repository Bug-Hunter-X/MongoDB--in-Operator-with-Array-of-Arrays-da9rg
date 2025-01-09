```javascript
// Correct usage using $elemMatch
db.collection.find({ field: { $elemMatch: { $in: [1, 2] } } }); 
//Another correct usage
db.collection.aggregate([
  { $match: { field: { $in: [[1, 2], [3, 4]] } } },
  { $unwind: '$field' },
  { $match: { 'field': { $in: [1,2,3,4] } } }
]);
```