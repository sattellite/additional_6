const repeatsCount = (str, char) => {
  const match = str.toString().match(new RegExp(`${char}+$`));
  if (match) return match[0].length;
  return 0;
};

const primeFactors = (num) => {
  const factors = [];
  let divisor = 2;

  while (num > 2) {
    if (num % divisor === 0) {
       factors.push(divisor);
       num = num / divisor;
    } else {
      divisor += 1;
    }
  }

  return factors;
};

const zeroFactorsOfFactorial = (num, step) => {
  let countOf2 = 0;
  let countOf5 = 0;
  for (let i = num; i > 0; i -= step) {
    const pf = primeFactors(i);
    if (i % 5 === 0) countOf5 += pf.filter(n => n === 5).length;
    if (i % 2 === 0) countOf2 += pf.filter(n => n === 2).length;
  }

  return [countOf2, countOf5];
};

module.exports = function zeros(expression) {
  let countOf2 = 0;
  let countOf5 = 0;

  expression.split('*').forEach((elem) => {
    const [a, b] = zeroFactorsOfFactorial(parseInt(elem, 10), repeatsCount(elem, '!'));
    countOf2 += a;
    countOf5 += b;
  });

  return Math.min(countOf2, countOf5);
};
