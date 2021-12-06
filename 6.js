let arr = new Array(9).fill(0); //indexes are how many fishes there are
let input =
  `2,1,2,1,5,1,5,1,2,2,1,1,5,1,4,4,4,3,1,2,2,3,4,1,1,5,1,1,4,2,5,5,5,1,1,4,5,4,1,1,4,2,1,4,1,2,2,5,1,1,5,1,1,3,4,4,1,2,3,1,5,5,4,1,4,1,2,1,5,1,1,1,3,4,1,1,5,1,5,1,1,5,1,1,4,3,2,4,1,4,1,5,3,3,1,5,1,3,1,1,4,1,4,5,2,3,1,1,1,1,3,1,2,1,5,1,1,5,1,1,1,1,4,1,4,3,1,5,1,1,5,4,4,2,1,4,5,1,1,3,3,1,1,4,2,5,5,2,4,1,4,5,4,5,3,1,4,1,5,2,4,5,3,1,3,2,4,5,4,4,1,5,1,5,1,2,2,1,4,1,1,4,2,2,2,4,1,1,5,3,1,1,5,4,4,1,5,1,3,1,3,2,2,1,1,4,1,4,1,2,2,1,1,3,5,1,2,1,3,1,4,5,1,3,4,1,1,1,1,4,3,3,4,5,1,1,1,1,1,2,4,5,3,4,2,1,1,1,3,3,1,4,1,1,4,2,1,5,1,1,2,3,4,2,5,1,1,1,5,1,1,4,1,2,4,1,1,2,4,3,4,2,3,1,1,2,1,5,4,2,3,5,1,2,3,1,2,2,1,4`
    .split(",")
    .map(Number)
    .reduce((acc, e, i) => {
      const newAcc = acc;
      newAcc[e] += 1;
      return newAcc;
    }, arr);

const DAYS = 256; // <= PT2 // change to 80 FOR PT.1
const countElems = (arr) => arr.reduce((acc, e, i) => acc + e, 0);

const shift = (arr) => {
  let newArr = arr.slice(1); //rem first elem

  return newArr;
};

const calcAndAdd2 = (arr, prevVal) => {
  let oldFishes = arr[0];

  let shifted = shift(arr);
  shifted[6] = arr[7] + arr[0];
  shifted = [...shifted, oldFishes];
  return shifted;
};

let lanternFish;
let leng = 0;

new Array(DAYS).fill().map((e, i, thisArr) => {
  input = calcAndAdd2(input);
});

console.log(input.reduce((acc, e, i) => acc + e, 0));
