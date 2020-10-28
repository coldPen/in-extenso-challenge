function fizzbuzz(n) {
  let str = ``;
  for (let i = 1; i <= n; i++) {
    str = str.concat(
      i === 1 ? `` : ` `,
      `${i % 3 === 0 ? `Fizz` : ``}${i % 5 === 0 ? `Buzz` : ``}` || i
    );
  }
  return str;
}

console.log(fizzbuzz(20));
