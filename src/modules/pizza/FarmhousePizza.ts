import { BasePizza } from "./BasePizza.js";

export class FarmhousePizza extends BasePizza {
    getCost(): number {
        return 90;
    }

    getDescription(): string {
        return "Farmhouse";
    }
}