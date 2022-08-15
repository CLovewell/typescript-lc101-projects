// Paste in the provided code here:
export class SpaceLocation {
    kilometersAway: number;
    name: string;
 
    constructor(name: string, kilometersAway: number) {
       this.name = name;
       this.kilometersAway = kilometersAway;
    }

    printDaysToLocation(location: SpaceLocation): void {
        console.log(`${this.name} will take ${this.getDaysToLocation(location.kilometersAway)}
         to reach ${location.name}.`);
    }
 }