import { BasePizza } from "../pizza/BasePizza.js";

// Base decorator class that implements Pizza and holds a reference to a Pizza.
export abstract class Toppings extends BasePizza {
    protected pizza: BasePizza;
  
    constructor(pizza: BasePizza) {
      super();
      this.pizza = pizza;
    }
  
    // Delegate these methods to the wrapped pizza.
    getDescription(): string {
      return this.pizza.getDescription();
    }
  
    getCost(): number {
      return this.pizza.getCost();
    }
  }