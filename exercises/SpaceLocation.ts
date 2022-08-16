import { Spacecraft } from "./parts1-5.js";

// Paste in the provided code here:
export class SpaceLocation {
   kilometersAway: number;
   name: string;

   constructor(name: string, kilometersAway: number) {
      this.name = name;
      this.kilometersAway = kilometersAway;
   }

   printDaysToLocation(origin: Spacecraft, destination: SpaceLocation): void {
       console.log(`${origin.name} will take ${origin.getDaysToLocation(destination.kilometersAway)} to reach ${destination.name}.`);
   }
}