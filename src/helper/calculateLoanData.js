// Calculate principle amount (purchase price - down payment)
export const calculatePrincipleAmount = (purchasePrice, downPayment) => {
  const principleAmount = purchasePrice - downPayment;
  return principleAmount;
};

// Calculate monthly interest rate (annual rate converted to monthly)
export const calculateMonthlyInterestRate = (interestRate) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  return monthlyInterestRate;
};

// Calculate total number of monthly payments (repayment time in years converted to months)
export const calculateNoOfPayments = (repaymentTime) => {
  const numberOfPayments = repaymentTime * 12;
  return numberOfPayments;
};

// Calculate monthly payment using loan amortization formula --> M = P[r(1+r)^n/((1+r)^n)-1)]
export const calculateMonthlyPayableAmount = (
  principal,
  monthlyInterestRate,
  numberOfPayments
) => {
  // Calculate formula components
  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

  // Calculate the monthly payment and round to two decimal places
  const monthlyPayment = principal * (numerator / denominator);
  return monthlyPayment.toFixed(2);
};

//Calculate total Interest
export const calculateTotalInterest = (
  monthlyPayableAmount,
  numberOfPayments,
  principleAmount
) => {
  const totalInterest =
    monthlyPayableAmount * numberOfPayments - principleAmount;
  return totalInterest;
};
