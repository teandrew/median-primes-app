const express = require('express');
const cors = require('cors');
const app = express();

const math = require('./math');

const MAX = 100000000;

app.use(cors());

app.get('/median-prime/:limit', (req, res) => {
    const limit = req.params.limit;
    if (isNaN(limit)) {
      return res.status(400).send({message: 'Limit must be a number'});
    } else if (limit >= MAX) {
      return res.status(400).send({message: 'Limit too high'})  
    }

    const primes = math.sieve(limit)
    return res.send(math.getMedianPrime(primes));
})

app.listen(4040, () => {
  console.log('Listening to port 4040');
})

module.exports = app;
