export abstract class BasePizza {
  abstract getDescription(): string;
  abstract getCost(): number;
  
  // A common method
  printDetails(): void {
    console.log(`${this.getDescription()} - ₹${this.getCost()}`);
  }
}