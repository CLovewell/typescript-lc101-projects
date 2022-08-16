import { Cargo } from "./Cargo.js";
import { Astronaut } from "./Astronaut.js";
import { Payload } from "./Payload.js";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }

        return totalMass;
    }

    currentMassKg():number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else return false;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else return false;
    }
}