import "./badge.css";

const badge = ({ label, value, variant }) => {
  return (
    <div className={`badge ` + variant}>
      <div>{label}</div>
      <span>{value}</span>
    </div>
  );
};

export default badge;
