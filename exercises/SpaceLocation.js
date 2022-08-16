"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
// Paste in the provided code here:
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    SpaceLocation.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " will take ").concat(this.getDaysToLocation(location.kilometersAway), "\n        to reach ").concat(location.name, "."));
    };
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
