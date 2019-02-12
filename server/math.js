module.exports = {
  sieve,
  getMedianPrime
};

function sieve(limit) {
  let numbers = new Array(limit).fill(0);
  let primes = [];

  for (var i = 2; i < Math.sqrt(limit); i++) {
    if (numbers[i] !== 1) {
      for (var z = i * i; z <= limit; z += i) {
        numbers[z] = 1;
      }
    }
  }
  for (var j = 2; j < limit; j++) {
    if (numbers[j] !== 1) {
      primes.push(j);
    }
  }
  return primes;
}

function getMedianPrime(primes) {
  let listLength = primes.length;
  let middle = listLength / 2;

  if (listLength === 0) {
    return [];
  }

  if (listLength % 2 === 0) {
    return [primes[middle - 1], primes[middle]];
  }

  return [primes[parseInt(middle)]];
}
