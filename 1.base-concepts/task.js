"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentNum = parseFloat(percent);
  const contributionNum = parseFloat(contribution);
  const amountNum = parseFloat(amount);
  const countMonthsNum = parseFloat(countMonths);
  
  if (isNaN(percentNum) || isNaN(contributionNum) || 
      isNaN(amountNum) || isNaN(countMonthsNum)) {
    return false;
  }
  
  const monthlyPercent = percentNum / 100 / 12;
  const loanBody = amountNum - contributionNum;
  
  if (loanBody <= 0) {
    return 0;
  }
  
  const monthlyPayment = loanBody * 
    (monthlyPercent + 
     monthlyPercent / (((1 + monthlyPercent) ** countMonthsNum) - 1));
  
  const totalAmount = monthlyPayment * countMonthsNum;
  
  return Math.round(totalAmount * 100) / 100;
}