function add(a, b) {
  console.log(a+b)
  return (a+b)
}
add(3,5)

function subtract (a,b) {
  console.log (a-b)
  return a-b
}
subtract(5,3)

function multiply (a,b) {
  console.log(a*b)
  return a*b
}
multiply(3,5)

function divide (a,b) {
  console.log(a/b)
  return a/b
}

divide(5,3)

function increment(a) {
  console.log(a++)
  return a++
}
increment(3)

function decrement(a) {
  console.log(a--)
  return a--
}
decrement(3)

function makeInt(a) {
  console.log(parseInt(a, 10))
  return parseInt(a, 10)
}

makeInt("5")

function makeInt(c) {
  console.log(parseInt(c, 10))
  return parseInt(c, 10)
}

makeInt("5.3432")

function makeInt(d) {
  console.log(parseInt(d, 10))
  return parseInt(d,10)
}

makeInt("abracadabra!")

function preserveDecimal(a) {
  console.log(parseFloat(a))
  return parseFloat(a)
}

preserveDecimal("8.324")

function preserveDecimal(b) {
  console.log(parseFloat(b))
  return parseFloat(b)
}

preserveDecimal("nonsensedasf", 10)