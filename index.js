/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityInKmPerHour = 10000; // velocity (km/h)
const accelerationInMperSecs = 3; // acceleration (m/s^2)
const timeInSecs = 3600; // seconds (1 hour)
const distanceInKm = 0; // distance (km)
const fuelInKg = 5000; // remaining fuel (kg)
const FuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distanceInKm + ( velocityInKmPerHour * timeInSecs )
const remainingFuel = FuelBurnRate * timeInSecs
const newVelocity = calcNewVel(accelerationInMperSecs, velocityInKmPerHour, timeInSecs)


// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel (accelerationInMperSecs, velocityInKmPerHour, timeInSecs) { 
  return velocityInKmPerHour + ( accelerationInMperSecs * timeInSecs )
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






