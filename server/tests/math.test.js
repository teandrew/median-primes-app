const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const helper = require('../math');

describe('#sieve', () => {
    it('should return empty list if given 0', () => {
        const result = helper.sieve(0);
        const expected = [];
        expect(result).deep.equal(expected);
    });

    it('should return a list of primes before 100', () => {
        const result = helper.sieve(100);
        const expected = [
            2,3,5,7,11,13,17,19,23,29,31,37,
            41,43,47,53,59,61,67,71,73,79,83,89,97
        ];
        expect(result).deep.equal(expected);
    });
});

describe('#getMedianPrime', () => {
    it('should return empty', () => {
        const result = helper.getMedianPrime([]);
        const expected = [];
        expect(result).deep.equal(expected);
    });

    it('should return two primes', () => {
        const result = helper.getMedianPrime([2,3]);
        const expected = [2,3];
        expect(result).deep.equal(expected);
    });

    it('should return one prime', () => {
        const result = helper.getMedianPrime([2,3,5]);
        const expected = [3];
        expect(result).deep.equal(expected);
    });
})
