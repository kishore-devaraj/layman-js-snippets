/**
 * Example to describe the reselect module in redux
 */

 store = {
   points: 10,
   age: 15,
 }

 // Creating Selectors 
 const getPoints = store.points
 const getAge = store.age
 
 
 // Creating Reselectors using the selectors

const getTotalPoints = createSelectors(
  getPoints,
  getAge,
  (points, age) = points * age
)

getTotalPoints(store) // 150