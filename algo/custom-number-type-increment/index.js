// Increment Array<number>

function increment(number) {
  // Create a reversed shallow copy of the array to process it from the last digit until the first
  const reversedNumber = [...number].reverse();

  let incrementValue = 1;

  const incremented = reversedNumber
    // Use reduce to directly manipulate the accumulator array when needed
    .reduce((acc, digit, i) => {
      // When a simple increment is enough
      if (digit < 9) {
        digit += incrementValue;
        acc.push(digit);
        incrementValue = 0;
      }
      // When incrementing a digit does so to the next one, i.e. digit === 9
      else {
        if (incrementValue) {
          acc.push(0);
          if (i === reversedNumber.length - 1) {
            acc.push(1);
          }
        } else {
          acc.push(digit);
        }
      }
      return acc;
    }, [])
    .reverse();

  return incremented;
}

const numbers = [
  [0, 0, 0, 0],
  [0, 0, 3],
  [0, 1, 2, 3],
  [0, 1, 9, 2, 9, 0],
  [9, 9, 9, 9],
];

numbers.forEach((number) => {
  console.log(increment(number));
});
