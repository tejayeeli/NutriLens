import "./StatCard.css";

function StatCard({ title, value }) {
  return (
    <article className="stat-card">

      <h2>{value}</h2>

      <p>{title}</p>

    </article>
  );
}

export default StatCard;