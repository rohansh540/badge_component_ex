import "./badge.css";

const badge = ({ label, value }) => {
  return (
    <div className="badge">
      <div>{label}</div>
      <span>{value}</span>
    </div>
  );
};

export default badge;
