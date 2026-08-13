const API_URL = import.meta.env.VITE_API_URL;

export async function analyzeImage(
  file,
  trainingConsent
) {
  const formData = new FormData();

  formData.append("image", file);
  formData.append("trainingConsent", trainingConsent);

  const response = await fetch(`${API_URL}/api/analyze`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Failed to analyze image."
    );
  }

  return data;
}

export async function submitFeedback(feedbackData) {
  const response = await fetch(`${API_URL}/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Failed to submit feedback."
    );
  }

  return data;
}

export async function getHistory() {
  const response = await fetch(
    `${API_URL}/api/history`
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Failed to load meal history."
    );
  }

  return data.meals;
}