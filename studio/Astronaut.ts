import { Payload } from "./Payload.js";

export class Astronaut implements Payload{
    name: string;
    massKg: number;

    constructor(name: string, mass: number) {
        this.name = name;
        this.massKg = mass;
    }
}