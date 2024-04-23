class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this;
    }

    subtract(number) {
        this.result -= number;
        return this;
    }

    multiply(number) {
        this.result *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this;
    }

    getResult() {
        return this.result;
    }

    reset() {
        this.result = 0;
        return this;
    }
}

// Usage
const calculator = new Calculator();
calculator.add(5).subtract(2).multiply(3).divide(2);
console.log(calculator.getResult()); // Outputs: 4.5
calculator.reset();
console.log(calculator.getResult()); // Outputs: 0

// Import the module or class that contains the add method
const MyClass = require('./myClass');

// Test the add method
describe('add method', () => {
  it('should add the given number to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with a number
    const result = myInstance.add(5);

    // Assert that the result is updated correctly
    expect(result.result).toBe(5);
  });

  it('should return the instance of MyClass', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method and store the result
    const result = myInstance.add(5);

    // Assert that the result is the instance of MyClass
    expect(result instanceof MyClass).toBe(true);
  });
});// Import the module or class that contains the add method
const MyClass = require('./myClass');

// Test the add method
describe('add method', () => {
  it('should add the given number to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with a number
    const result = myInstance.add(5);

    // Assert that the result is updated correctly
    expect(result.result).toBe(5);
  });

  it('should return the instance of MyClass', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method and store the result
    const result = myInstance.add(5);

    // Assert that the result is the instance of MyClass
    expect(result instanceof MyClass).toBe(true);
  });

  it('should add multiple numbers to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with multiple numbers
    const result = myInstance.add(2).add(3).add(4);

    // Assert that the result is updated correctly
    expect(result.result).toBe(9);
  });

  it('should chain multiple add calls', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with multiple numbers and chain the calls
    const result = myInstance.add(2).add(3).add(4);

    // Assert that the result is the instance of MyClass
    expect(result instanceof MyClass).toBe(true);
  });
});// Import the module or class that contains the add method
const MyClass = require('./myClass');

// Test the add method
describe('add method', () => {
  it('should add the given number to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with a number
    const result = myInstance.add(5);

    // Assert that the result is updated correctly
    expect(result.result).toBe(5);
  });

  it('should return the instance of MyClass', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method and store the result
    const result = myInstance.add(5);

    // Assert that the result is the instance of MyClass
    expect(result instanceof MyClass).toBe(true);
  });

  it('should add multiple numbers to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with multiple numbers
    const result = myInstance.add(2).add(3).add(4);

    // Assert that the result is updated correctly
    expect(result.result).toBe(9);
  });

  it('should chain multiple add calls', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with multiple numbers and chain the calls
    const result = myInstance.add(2).add(3).add(4);

    // Assert that the result is the instance of MyClass
    expect(result instanceof MyClass).toBe(true);
  });

  it('should add a negative number to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with a negative number
    const result = myInstance.add(-5);

    // Assert that the result is updated correctly
    expect(result.result).toBe(-5);
  });

  it('should add zero to the result', () => {
    // Create an instance of MyClass
    const myInstance = new MyClass();

    // Call the add method with zero
    const result = myInstance.add(0);

    // Assert that the result is updated correctly
    expect(result.result).toBe(0);
  });
});