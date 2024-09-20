let n1 = 1;
console.log(`Initial value of n1 is: ${n1}`);
{
  n1++;
  let n2 = 2;
  console.log(`In code block, n1 is: ${n1}`);
  console.log(`Initial value of n2 is: ${n2}`);
  n2 += 2;
}
console.log(`Final value of n1 is: ${n1}`);
console.log(`Final value of n2 is: ${n2}`);

