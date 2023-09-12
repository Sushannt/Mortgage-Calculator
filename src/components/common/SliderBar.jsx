import PropTypes from "prop-types";
import { formatLabel } from "../../helper/formatLabel";
import "../../App.css";

const SliderBar = ({ label, min, max, value, onChange, step }) => {
  const formattedLabel = formatLabel(label, value);

  return (
    <div className="flex flex-col px-[5%]">
      <label
        htmlFor={label}
        className="mb-1 flex text-shade2 text-lg font-semibold pb-3 justify-between w-full"
      >
        <span>{formattedLabel.split(": ")[0]} : </span>
        <span className="text-2xl text-shade">
          &nbsp;{formattedLabel.split(": ")[1]}
        </span>
      </label>
      <input
        type="range"
        className="w-full h-2 appearance-none border-4 border-shade2 rounded-md focus:outline-none"
        id={label}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        step={step}
      />
    </div>
  );
};

export default SliderBar;

SliderBar.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
