import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement, Legend);

const PieChart = ({ principleAmount, totalInterest }) => {
  const loanData = {
    datasets: [
      {
        data: [principleAmount, totalInterest],
        backgroundColor: ["rgb(92, 84, 112)", "rgb(250, 240, 235)"],
        hoverOffset: 4,
      },
    ],
    labels: ["Principle" + "            ", "Interest"],
  };

  return (
    <div className="mx-auto mt-4">
      <Pie data={loanData} />
    </div>
  );
};

export default PieChart;

PieChart.propTypes = {
  principleAmount: PropTypes.number.isRequired,
  totalInterest: PropTypes.number.isRequired,
};
