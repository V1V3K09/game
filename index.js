// !normal function
function sum(a, b) {
  return a + b
}

console.log(sum(1, 2)) // 3

// ? fat arrow function

const sumo = (a, b) => {
  return a + b
}

console.log(sumo(1, 2)) // 3

// ? fat arrow function with one line

const sumo2 = (a, b) => a + b


console.log(sumo2(1, 2)) // 3


// !object

let object = {
  name: 'John',
  age: 30,
  isMarried: false,
  showstatus: function() {
    if(this.isMarried == false)
      {
        console.log('happy')
      }
      else 
      {
        console.log('not happy')
      }
  },
  hiring: function() {
    if(this.profile === "SDE1")
      {
        console.log(ongoingHiring.name)
      }
      else 
      {
        console.log(ongoinghiring.name)
      }
  }

}

object.showstatus()



// console.log(arr1)

// console.log(arr2)
let numStack = [134,22,7,98,6];
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let square = arr[i] * arr[i];
    if (square > 50) {
      sum += arr[i];
    }
  }
  return sum;
}
const result = sum(numStack);
console.log(result);
