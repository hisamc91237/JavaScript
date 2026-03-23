function infinite(...args) {
  let ans = 0;
  args.forEach((x) => {
    ans += x;
  });
  return ans;
}

let sumAns = infinite(10, 20, 30);
console.log(sumAns);
