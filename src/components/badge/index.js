import "./badge.css";

const badge = ({ label, value, variant }) => {
  const regex = /^\d+$/;
  const newVal = Number.isInteger(value)
    ? value
    : regex.test(value)
    ? value
    : 0;

  return (
    <div className={`badge ` + variant}>
      <div>{label}</div>
      <span>{newVal}</span>
    </div>
  );
};

export default badge;
