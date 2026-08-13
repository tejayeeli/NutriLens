import "./HistoryCard.css";

const API_URL = import.meta.env.VITE_API_URL;

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

      <div className="history-image-container">
        <img
          src={`${API_URL}/api/history/${meal._id}/image`}
          alt={meal.mealName}
          className="history-image"
          loading="lazy"
        />
      </div>

      <div className="history-card-content">

        <div className="history-card-top">

          <div className="history-meal-info">
            <h3>{meal.mealName}</h3>

            <p>
              {formatDate(meal.createdAt)}
            </p>
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

      </div>

    </article>
  );
}

export default HistoryCard;