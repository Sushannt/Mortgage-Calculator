import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import {
  calculatePrincipleAmount,
  calculateMonthlyInterestRate,
  calculateNoOfPayments,
  calculateMonthlyPayableAmount,
  calculateTotalInterest,
} from "../helper/calculateLoanData";
import PieChart from "./PieChart";

export const Result = ({ data }) => {
  const [results, setResults] = useState({
    principleAmount: calculatePrincipleAmount(
      data["Purchase Price"],
      data["Down Payment"]
    ),
    monthlyInterestRate: calculateMonthlyInterestRate(data["Interest Rate"]),
    numberOfPayments: calculateNoOfPayments(data["Repayment Time"]),
    monthlyPayment: 0, // Initial value, calculated below
  });

  const [totalInterest, setTotalInterest] = useState(
    calculateTotalInterest(
      results.monthlyPayment,
      results.numberOfPayments,
      results.principleAmount
    )
  );

  useEffect(() => {
    console.log("result component Rendered");
    const newPrincipleAmount = calculatePrincipleAmount(
      data["Purchase Price"],
      data["Down Payment"]
    );
    const newMonthlyInterestRate = calculateMonthlyInterestRate(
      data["Interest Rate"]
    );
    const newNumberOfPayments = calculateNoOfPayments(data["Repayment Time"]);
    const newMonthlyPayment = calculateMonthlyPayableAmount(
      newPrincipleAmount,
      newMonthlyInterestRate,
      newNumberOfPayments
    );

    setResults({
      principleAmount: Math.max(0, newPrincipleAmount),
      monthlyInterestRate: newMonthlyInterestRate,
      numberOfPayments: newNumberOfPayments,
      monthlyPayment: Math.max(0, newMonthlyPayment),
    });

    const calculatedTotalInterest = calculateTotalInterest(
      newMonthlyPayment,
      newNumberOfPayments,
      newPrincipleAmount
    );

    setTotalInterest(calculatedTotalInterest);
  }, [data]);

  const { principleAmount, monthlyPayment } = results;

  return (
    <div className="grid grid-cols-1 gap-5 mx-[5%] font-kanit">
      {/* Piechart */}
      <PieChart
        principleAmount={principleAmount}
        totalInterest={totalInterest}
      />
      <div className="flex flex-nowrap text-shade2 font-semibold text-lg pb-1 justify-between">
        Principle Amount:{" "}
        <span className="text-2xl text-shade">
          ${principleAmount.toLocaleString("en-US")}
        </span>
      </div>
      <div className="flex flex-nowrap text-shade2 font-semibold text-lg pb-1 justify-between">
        Monthly Payment:{" "}
        <span className="text-3xl text-shade">
          ${monthlyPayment.toLocaleString("en-US")}
        </span>
      </div>
    </div>
  );
};

Result.propTypes = {
  data: PropTypes.shape({
    "Purchase Price": PropTypes.number.isRequired,
    "Down Payment": PropTypes.number.isRequired,
    "Repayment Time": PropTypes.number.isRequired,
    "Interest Rate": PropTypes.number.isRequired,
  }).isRequired,
};
