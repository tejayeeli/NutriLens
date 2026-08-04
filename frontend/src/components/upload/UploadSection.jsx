import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "./UploadSection.css";

import { MealContext } from "../../context/MealContext";

import ImagePreview from "./ImagePreview";
import UploadDialog from "./UploadDialog";
import NutritionCard from "../nutrition/NutritionCard";

import { analyzeImage } from "../../services/api";

import {
  FiImage,
  FiLoader,
  FiUpload,
} from "../../constants/icons";

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nutritionData, setNutritionData] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { addMeal } = useContext(MealContext);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  function handleBrowseClick() {
    fileInputRef.current.click();
  }

  function handleCameraClick() {
    cameraInputRef.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setNutritionData(null);
    setErrorMessage("");

    event.target.value = "";
  }

  useEffect(() => {
    if (!selectedFile) return;

    async function analyzeMeal() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const data = await analyzeImage(selectedFile);

        setNutritionData(data);

        addMeal({
          image: URL.createObjectURL(selectedFile),

          score: data.score,

          meal: data.meal,

          nutrients: data.nutrients,

          healthInsights: data.healthInsights,

          suggestions: data.suggestions,
        });

      } catch (error) {
        console.error(error);

        setNutritionData(null);

        setErrorMessage(
          error.message || "Unable to analyze image."
        );

      } finally {
        setIsLoading(false);
      }
    }

    analyzeMeal();
  }, [selectedFile]);

  return (
    <section className="upload-section">

      <div className="upload-box">

        <div className="upload-icon">
          <FiImage size={80} strokeWidth={1.8} />
        </div>

        <h3>Upload Your Meal</h3>

        <p>
          Choose an image from your gallery or capture one using your camera.
        </p>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button
          className="upload-btn"
          onClick={() => setShowDialog(true)}
          disabled={isLoading}
        >
          <FiUpload size={20} />

          {isLoading ? "Analyzing..." : "Upload Image"}
        </button>

        <p className="upload-note">
          Supports JPG, PNG & WEBP • Maximum file size: 5 MB
        </p>

      </div>

      <UploadDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onBrowse={() => {
          setShowDialog(false);
          handleBrowseClick();
        }}
        onCamera={() => {
          setShowDialog(false);
          handleCameraClick();
        }}
      />

      {selectedFile && (
        <ImagePreview image={selectedFile} />
      )}

      {isLoading && (
        <p className="loading-text">
          <FiLoader className="spin" size={20} />
          Analyzing your meal...
        </p>
      )}

      {errorMessage && (
        <p className="error-text">
          ⚠️ {errorMessage}
        </p>
      )}

      {nutritionData && (
        <NutritionCard nutrition={nutritionData} />
      )}

    </section>
  );
}

export default UploadSection;