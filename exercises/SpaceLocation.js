"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
// Paste in the provided code here:
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    SpaceLocation.prototype.printDaysToLocation = function (origin, destination) {
        console.log("".concat(origin.name, " will take ").concat(origin.getDaysToLocation(destination.kilometersAway), "\n        to reach ").concat(destination.name, "."));
    };
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
