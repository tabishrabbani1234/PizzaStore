import { BasePizza } from "../pizza/BasePizza.js";
import { MaregritaPizza } from "../pizza/MargeritaPizza.js";
import { ExtraCheese } from "../toppings/ExtraCheese.js";
import { ExtraVeggies } from "../toppings/ExtraVeggies.js";
import { Mushroom } from "../toppings/Mushroom.js";

function orderPizza(): void {
    // Start with a base pizza.
    let myPizza: BasePizza = new MaregritaPizza();
    console.log(`Order: ${myPizza.getDescription()}, Cost: ${myPizza.getCost()}`);
  
    // Add extra cheese.
    myPizza = new ExtraCheese(myPizza);
    console.log(`Order: ${myPizza.getDescription()}, Cost: ${myPizza.getCost()}`);
  
    // Add extra veggies.
    myPizza = new ExtraVeggies(myPizza);
    console.log(`Order: ${myPizza.getDescription()}, Cost: ${myPizza.getCost()}`);
  
    // Add mushrooms.
    myPizza = new Mushroom(myPizza);
    console.log(`Final Order: ${myPizza.getDescription()}, Cost: ${myPizza.getCost()}`);
  }
  
  orderPizza();