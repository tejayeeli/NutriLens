const API_URL = "http://localhost:5000";

export async function analyzeImage(file) {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(`${API_URL}/api/analyze`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to analyze image.");
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
    throw new Error(data.message || "Failed to submit feedback.");
  }

  return data;
}