/* Here calculator is HOC accepting a function and a list of params */
const calculator = (wrappedFunction) => (...props) => {
  const resultValue = wrappedFunction(...props)
  console.log(resultValue)
  return resultValue
}

const add = (...props) => {
  return props.reduce((a, b) => a + b, 0)
}

const multiple = (...props) => {
  return props.reduce((a, b) => a * b, 1)
}

// Testing HOC
calculator(add)(1, 2, 3, 4)
calculator(multiple)(5, 4)
