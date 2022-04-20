const MAX_LIMIT = process.env.MAX_LIMIT || 10000;

export class PrimesGetter {
  public getPrimes(limit: number) {
    if (limit > MAX_LIMIT) {
        throw new Error(`El límite debe ser un número menor a ${MAX_LIMIT}`)
    }
    const list: number[] = Array.from(Array(limit + 1).keys());
    return list
      .filter(PrimesGetter.isPrime)
      .sort((a: number, b: number) => b - a);
  }

  public static isPrime = (num: number) => {
    if (isNaN(num) || num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
}
