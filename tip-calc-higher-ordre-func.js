const calculateTotalWithTip = (totalWithoutTip, tipPercent) => {
  return Number(tipPercent) / 100 * Number(totalWithoutTip) + Number(totalWithoutTip);
}

const splitAmongDiners = (calculateTotalWithTip, numOfDiners) => {
  return Number(calculateTotalWithTip) / Number(numOfDiners);
}
calculateTotalWithTip(100, 15);

splitAmongDiners(50,5);//should return '10'
console.log(calculateTotalWithTip);