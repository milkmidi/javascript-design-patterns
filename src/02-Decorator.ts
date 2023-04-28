class Car {
  drive() {
    console.log("Driving...");
  }
}

class CarDecorator {
  constructor(private car: Car) {}

  drive() {
    this.car.drive();
    console.log("Adding features...");
  }
}


function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${key} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };

  return descriptor;
}

class MyClass {
  // @log
  myMethod(arg1: string, arg2: number) {
    return `Hello, ${arg1}! Your number is ${arg2}.`;
  }
}

const myCar = new Car();
const myDecoratedCar = new CarDecorator(myCar);
myDecoratedCar.drive();

