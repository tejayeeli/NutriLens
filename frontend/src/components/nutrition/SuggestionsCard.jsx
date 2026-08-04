import "./SuggestionsCard.css";

function SuggestionsCard({ suggestions }) {
  return (
    <div className="suggestions-card">

      <h3>Suggestions</h3>

      {suggestions.map((suggestion) => (
        <p key={suggestion}>
          ✅ {suggestion}
        </p>
      ))}

    </div>
  );
}

export default SuggestionsCard;