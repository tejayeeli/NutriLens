import "./HistoryCard.css";

function HistoryCard({ meal, onView }) {

  function getScoreColor(score) {

    if (score >= 80) return "excellent";

    if (score >= 60) return "balanced";

    if (score >= 40) return "fair";

    return "poor";
  }

  function formatDate(date) {

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  }

  return (
    <article className="history-card">

      <div className="history-card-top">

        <div>

          <h3>{meal.mealTitle}</h3>

          <p>{formatDate(meal.createdAt)}</p>

        </div>

        <span
          className={`history-score ${getScoreColor(meal.score)}`}
        >
          {meal.score}
        </span>

      </div>

      <button
        className="history-btn"
        onClick={onView}
      >
        View Analysis
      </button>

    </article>
  );
}

export default HistoryCard;