const Box = require('../model/boxmodel.js');

let objects;

async function readData() {
    // console.log("Read data function called");
    objects = await Box.find();
}

async function main() {
    // console.log("Main function called");
    await readData();
    var maxWeight = 1000;
    var containerVolume = 1000;
    
    const packedEfficiency = maximizePackingEfficiency(objects, containerVolume, maxWeight);
    console.log('Maximized Packing Efficiency:', packedEfficiency);

    const maxProfit = maximizeProfit(objects, containerVolume, maxWeight);
    console.log('Maximized Profit:', maxProfit);

    const maxWeightPacking = maximizeWeight(objects, containerVolume, maxWeight);
    console.log('Maximized Weight Packing:', maxWeightPacking);

}
function maximizePackingEfficiency(objects, containerVolume, maxWeight) {
    // Calculate density for each object
    objects.forEach(object => {
      object.density = object.weight / object.volume;
    });
  
    // Sort objects in descending order of density
    objects.sort((a, b) => b.density - a.density);
  
    let packedVolume = 0;
    let packedWeight = 0;
    let packedObjects = [];
  
    for (let i = 0; i < objects.length; i++) {
      if (packedVolume + objects[i].volume <= containerVolume && packedWeight + objects[i].weight <= maxWeight) {
        packedVolume += objects[i].volume;
        packedWeight += objects[i].weight;
        packedObjects.push(objects[i]);
      }
    }
  
    return packedObjects;
  }
  
  function maximizeProfit(objects, containerVolume, maxWeight) {
    // Calculate profit density for each object
    objects.forEach(object => {
      object.profitDensity = object.price / object.volume;
    });
  
    // Sort objects in descending order of profit density
    objects.sort((a, b) => b.profitDensity - a.profitDensity);
  
    let packedVolume = 0;
    let packedWeight = 0;
    let packedObjects = [];
  
    for (let i = 0; i < objects.length; i++) {
      if (packedVolume + objects[i].volume <= containerVolume && packedWeight + objects[i].weight <= maxWeight) {
        packedVolume += objects[i].volume;
        packedWeight += objects[i].weight;
        packedObjects.push(objects[i]);
      }
    }
  
    return packedObjects;
  }
  
  function maximizeWeight(objects, containerVolume, maxWeight) {
    // Sort objects in descending order of weight
    objects.sort((a, b) => b.weight - a.weight);
  
    let packedVolume = 0;
    let packedWeight = 0;
    let packedObjects = [];
  
    for (let i = 0; i < objects.length; i++) {
      if (packedVolume + objects[i].volume <= containerVolume && packedWeight + objects[i].weight <= maxWeight) {
        packedVolume += objects[i].volume;
        packedWeight += objects[i].weight;
        packedObjects.push(objects[i]);
      }
    }
    return packedObjects;
  }


exports.main = main;