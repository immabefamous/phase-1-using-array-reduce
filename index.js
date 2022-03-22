const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries;
const reducer = batteryBatches.reduce((batteries, number) => {
    totalBatteries = batteries + number
    return totalBatteries 
})