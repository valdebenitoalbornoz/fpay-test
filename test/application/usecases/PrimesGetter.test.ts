import { PrimesGetter } from "../../../src/application/usecases/PrimesGetter";

describe('isPrime', () => {
    
    it('should return false if number is negative', () => {
        const isPrime = PrimesGetter.isPrime(-577);
        expect(isPrime).toBe(false);
    });
    it('should return false if number is 0', () => {
        const isPrime = PrimesGetter.isPrime(0);
        expect(isPrime).toBe(false);
    });
    
    it('should return false if number is 1', () => {
        const isPrime = PrimesGetter.isPrime(1);
        expect(isPrime).toBe(false);
    });
    
    it('should return true if number is 2', () => {
        const isPrime = PrimesGetter.isPrime(2);
        expect(isPrime).toBe(true);
    });
    
    it('should return true if number is 3', () => {
        const isPrime = PrimesGetter.isPrime(3);
        expect(isPrime).toBe(true);
    });

    it('should return true if number is 577', () => {
        const isPrime = PrimesGetter.isPrime(577);
        expect(isPrime).toBe(true);
    });
});


describe('getPrimes', () => {

    it('should return an empty array when maxnumber is <= 1', () => {
        const max = Math.floor(Math.random());
        const getter = new PrimesGetter();
        const list = getter.getPrimes(max);
        expect(list).toHaveLength(0);
    });


    it('should return an array with 4 elements when maxnumber is 7', () => {
        const max = 7;
        const getter = new PrimesGetter();
        const list = getter.getPrimes(max);
        expect(list).toHaveLength(4);
        expect(list).toEqual([ 7, 5, 3, 2 ]);
    });
    
    it('should return an array with 6 elements when maxnumber is 15', () => {
        const max = 15;
        const getter = new PrimesGetter();
        const list = getter.getPrimes(max);
        expect(list).toHaveLength(6);
        expect(list).toEqual([ 13, 11, 7, 5, 3, 2 ]);
    });

})