const { randomInt } = require('node:crypto');

function parseIntArg(value, fallback) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : fallback;
}

const [countArg, minArg, maxArg] = process.argv.slice(2);
const count = parseIntArg(countArg, 10);
const min = parseIntArg(minArg, 1);
const max = parseIntArg(maxArg, 10);

if (!Number.isInteger(count) || count <= 0) {
  console.error('count must be a positive integer');
  process.exitCode = 1;
  return;
}

if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) {
  console.error('range must be two integers where max >= min');
  process.exitCode = 1;
  return;
}

const nums = Array.from({ length: count }, () => randomInt(min, max + 1));
console.log(nums.join(' '));
