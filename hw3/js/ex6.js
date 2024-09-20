function multiplicationTable() {
  const number = parseInt(prompt("Enter a number:"));

  // loop
  for (let i = 0; i <= 10; i++) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
  }
}
multiplicationTable();
