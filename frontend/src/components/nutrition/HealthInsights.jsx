import "./HealthInsights.css";

function HealthInsights({ insights }) {
  return (
    <div className="health-insights">

      <h3>🩺 Health Insights</h3>

      {insights.map((insight) => (
        <p key={insight}>
          💚 {insight}
        </p>
      ))}

    </div>
  );
}

export default HealthInsights;