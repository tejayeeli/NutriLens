import { useState } from "react";

import { submitFeedback } from "../../services/api";

import "./FeedbackForm.css";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    setSuccess("");
    setError("");

    if (rating === 0) {
      setError("Please select a rating.");
      return;
    }

    if (!feedback.trim()) {
      setError("Please enter your feedback.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await submitFeedback({
        rating,
        feedback,
      });

      setSuccess(response.message);

      setRating(0);
      setFeedback("");

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="settings-card">

      <div className="settings-card-header">
        <h3>⭐ Feedback</h3>
      </div>

      <p className="settings-description">
        Help us improve Plateora by sharing your experience.
      </p>

      <div className="rating-stars">

        {[1, 2, 3, 4, 5].map((star) => (

          <button
            key={star}
            type="button"
            className={
              star <= rating
                ? "star active"
                : "star"
            }
            onClick={() => setRating(star)}
          >
            ★
          </button>

        ))}

      </div>

      <textarea
        className="feedback-input"
        placeholder="Tell us what you liked or what we can improve..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        maxLength={500}
      />

      {success && (
        <p className="feedback-success">
          {success}
        </p>
      )}

      {error && (
        <p className="feedback-error">
          {error}
        </p>
      )}

      <div className="feedback-footer">

        <span>
          {feedback.length}/500
        </span>

        <button
          className="submit-feedback-btn"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading
            ? "Submitting..."
            : "Submit Feedback"}
        </button>

      </div>

    </section>
  );
}

export default FeedbackForm;