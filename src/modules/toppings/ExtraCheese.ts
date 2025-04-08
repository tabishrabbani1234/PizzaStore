import { Toppings } from "./Topping.js";

// Base decorator class that implements Pizza and holds a reference to a Pizza.
export class ExtraCheese extends Toppings {

    // Delegate these methods to the wrapped pizza.
    getDescription(): string {
      return this.pizza.getDescription() + " Extra Cheese";
    }
  
    getCost(): number {
      return this.pizza.getCost() + 50;
    }
  }