import { BasePizza } from "./BasePizza.js";

export class VegDelightPizza extends BasePizza {
    getCost(): number {
        return 80;
    }

    getDescription(): string {
        return "Veg Delight";
    }
}