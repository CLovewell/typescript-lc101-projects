import { Payload } from "./Payload.js";

export class Astronaut implements Payload{
    name: string;
    massKg: number;

    constructor(mass: number, name: string) {
        this.name = name;
        this.massKg = mass;
    }
}