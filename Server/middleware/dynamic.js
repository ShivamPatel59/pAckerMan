const Box = require('../model/boxmodel.js');

let objects;

async function readData() {
    objects = await Box.find();
}


async function main() {
    // console.log("Main function called");
    await readData();
    var maxWeight = 1000;
    var containerVolume = 1000;
    function getTotals(obj){
      let totPrice = 0, totWeight = 0, totVolume = 0;
      obj.forEach((item) => {
        totPrice += item.price;
        totWeight += item.weight;
        totVolume += item.volume;
      });

      return {totPrice, totWeight, totVolume};
    }
    
    const packedEfficiency = maximizePackingEfficiency(objects, containerVolume, maxWeight);
    // console.log('Maximized Packing Efficiency:', packedEfficiency);
    
    const maxProfit = maximizeProfit(objects, containerVolume, maxWeight);
    // console.log('Maximized Profit:', maxProfit);

    const maxWeightPacking = maximizeWeight(objects, containerVolume, maxWeight);
    // console.log('Maximized Weight Packing:', maxWeightPacking);

    const findResult = () => {
      let schemes = [];
      const effScheme = getTotals(packedEfficiency);
      const priceScheme = getTotals(maxProfit);
      const weightScheme = getTotals(maxWeightPacking);

      schemes.push(effScheme);
      schemes.push(priceScheme);
      schemes.push(weightScheme);

      return schemes;
    };

    return {packedEfficiency, maxProfit, maxWeightPacking, result: findResult()}
     
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
      if(objects[i].containerNum.length!=0)continue;
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
      if(objects[i].containerNum.length!=0)continue;
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
      if(objects[i].containerNum.length!=0)continue;
      if (packedVolume + objects[i].volume <= containerVolume && packedWeight + objects[i].weight <= maxWeight) {
        packedVolume += objects[i].volume;
        packedWeight += objects[i].weight;
        packedObjects.push(objects[i]);
      }
    }
    return packedObjects;
  }


exports.main = main;