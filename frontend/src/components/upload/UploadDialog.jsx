import "./UploadDialog.css";

import {
  FiUpload,
  FiCamera,
  FiX,
} from "react-icons/fi";

function UploadDialog({
  isOpen,
  onClose,
  onBrowse,
  onCamera,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="dialog-overlay"
      onClick={onClose}
    >
      <div
        className="upload-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dialog-header">

          <h3>Upload Image</h3>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FiX size={22} />
          </button>

        </div>

        <p className="dialog-subtitle">
          Choose how you'd like to upload your meal.
        </p>

        <button
          className="dialog-btn"
          onClick={onBrowse}
        >
          <FiUpload size={20} />

          Browse Files
        </button>

        <button
          className="dialog-btn camera"
          onClick={onCamera}
        >
          <FiCamera size={20} />

          Take Photo
        </button>

      </div>
    </div>
  );
}

export default UploadDialog;