import SliderBar from "./common/SliderBar";
import RepaymentTimeSelector from "./RepaymentTimeSelector";
import PropTypes from "prop-types";

const Container = ({ data, setData }) => {
  const handleChange = (label, newValue) => {
    setData((prevData) => ({
      ...prevData,
      [label]: newValue,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-10 my-6 mx-6 py-5 border-2 border-shade2 rounded-md bg-shadeLight font-kanit">
      <SliderBar
        label={"Purchase Price"}
        min={0}
        max={1_000_000}
        value={data["Purchase Price"]}
        onChange={(newValue) => handleChange("Purchase Price", newValue)}
        step={100_000}
      />
      <SliderBar
        label={"Down Payment"}
        min={0}
        max={100_000}
        value={data["Down Payment"]}
        onChange={(newValue) => handleChange("Down Payment", newValue)}
        step={10_000}
      />
      <SliderBar
        label={"Interest Rate"}
        min={1}
        max={30}
        value={data["Interest Rate"]}
        onChange={(newValue) => handleChange("Interest Rate", newValue)}
        step={1}
      />
      <RepaymentTimeSelector
        label={"Repayment Time"}
        value={data["Repayment Time"]}
        onChange={(newValue) => handleChange("Repayment Time", newValue)}
      />
    </div>
  );
};

export default Container;

Container.propTypes = {
  data: PropTypes.shape({
    "Purchase Price": PropTypes.number.isRequired,
    "Down Payment": PropTypes.number.isRequired,
    "Repayment Time": PropTypes.number.isRequired,
    "Interest Rate": PropTypes.number.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
