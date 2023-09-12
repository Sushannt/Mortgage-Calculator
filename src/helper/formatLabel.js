export const formatLabel = (label, value) => {
  // Define symbols based on the label
  let symbol = "";

  //to check for symbol to put after the value
  if (label === "Purchase Price" || label === "Down Payment") {
    symbol = "$";
  } else if (label === "Repayment Time") {
    symbol = " years";
  } else if (label === "Interest Rate") {
    symbol = "%";
  }

  // Construct the label with the symbol
  const formattedLabel =
    label === "Repayment Time" || label === "Interest Rate"
      ? `${label}: ${value.toLocaleString("en-US")}${symbol}`
      : `${label}: ${symbol}${value.toLocaleString("en-US")}`;

  return formattedLabel;
};
