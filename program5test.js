let pole = [1,2,3,4]
let pole2 = [2,3]

console.log(pole2.every((x) => pole.some((y)=> y == x)))
