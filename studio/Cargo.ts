import { Payload } from "./Payload.js";

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(material: string, mass: number){
        this.massKg = mass;
        this.material = material;
    }
}