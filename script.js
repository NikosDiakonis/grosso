function calculateAverageWeight() {
  let initialTotalWeight = document.getElementById("totalWeight").value;
  let totalWeight = initialTotalWeight;
  let totalBoxes = document.getElementById("totalBoxes").value;
  totalBoxes = parseInt(totalBoxes);
  let wasOdd = false;

  if (totalBoxes % 2 !== 0) {
    let boxWeight = prompt("Ο αριθμός των κιβωτίων είναι περιττός. Εισάγετε το βάρος ενός κιβωτίου για να συνεχίσετε:");
    boxWeight = parseInt(boxWeight);
    totalWeight -= boxWeight;
    totalBoxes -= 1;
    wasOdd = true;
  }

  let averageWeight = Math.round(totalWeight / totalBoxes / 10) * 10;
  let adjustments = [];

  for (let i = 0; i < totalBoxes / 2; i++) {
    let adjustment = Math.round((Math.random() * (300 - 50) + 50) / 10) * 10;
    adjustments.push(adjustment);
    adjustments.push(-adjustment);
  }

  let finalValues = adjustments.map(adjustment => averageWeight + adjustment);
  let sumFinalValues = finalValues.reduce((a, b) => a + b, 0);

  if (wasOdd) {
    let difference = initialTotalWeight - sumFinalValues;
    finalValues.push(difference);
    sumFinalValues += difference;
  }

  document.getElementById("finalValues").innerText = finalValues.join(", ");
  document.getElementById("sumFinalValues").innerText = sumFinalValues;
}
