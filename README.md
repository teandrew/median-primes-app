# Median Primes App

This project is for TouchBistro's Full Stack Challenge.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Clone the repository

```
git clone git@github.com:teandrew/median-primes-app.git
```

### Install Dependencies

```
cd median-primes-app && \
npm install
```

### Run the App

```
npm run dev
```

## Demo

![median primes demo](https://user-images.githubusercontent.com/24999264/52668736-58464e80-2ee2-11e9-833b-fc52b1d405f8.gif)

## Functionality

Given a number `n` inputted by the user, the prime numbers less than the given `n` is found. The number(s) in the middle of the list is then returned and displayed.

### Front End

My chosen framework is [ReactJS](https://reactjs.org/).

Components

- App - main component of the application
- Result - displays the median prime(s)

I used `axios` for sending API requests to my express server.

### Back End

A [Node.js](https://nodejs.org/en/) backend using the [Express](https://expressjs.com/) framework.

I used the algorithm Sieve of Erastothenes for finding prime numbers less than the given limit. Upon implementing the algorithm, I followed [Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/v/sieve-of-eratosthenes-prime-adventure-part-4) as reference.

My two main functions:

- `sieve(limit)`: Returns a list of prime numbers up to `limit`;
- `getMedianPrimes(primes)`: Returns the prime numbers in the middle of `primes` list.

I have added a constant `MAX` to prevent server from heap out of memory errors.

## Testing

To test the front end component using Jest Mocks, Enzyme and React 16, run:

```
npm run test
```

Find the following test files [here](/src/components/__tests__).
Tests include snapshot testing and mocking axios.
Folders:

- `__mocks__` - Contains axios.js for mocking with Jest.
- `__snapshots__` - Shapshots generated during testing.

To test the back end component using Mocha and Chai, run:

```
npm run test:server
```

Find the following test files [here](/server/tests). Tests include API endpoint and correctness of functions.
