import PropTypes from "prop-types";
const RepaymentTimeSelector = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col px-[5%]">
      <label
        htmlFor="years"
        className="mb-1 inline-block text-shade2 font-semibold text-lg pb-3"
      >
        {label}
      </label>
      <select
        id="years"
        className="w-full bg-shade3 rounded-lg px-[1%] py-2 border-2 border-shade font-mono text-shade text-medium font-extrabold"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="5">5 years</option>
        <option value="10">10 years</option>
        <option value="15">15 years</option>
        <option value="20">20 years</option>
        <option value="25">25 years</option>
        <option value="30">30 years</option>
      </select>
    </div>
  );
};

export default RepaymentTimeSelector;

RepaymentTimeSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
