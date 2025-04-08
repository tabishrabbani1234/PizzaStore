import { BasePizza } from "./BasePizza.js";

export class MaregritaPizza extends BasePizza {
    getCost(): number {
        return 100;
    }

    getDescription(): string {
        return "Margerita";
    }
}