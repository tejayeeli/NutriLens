import "./ImagePreview.css";

function ImagePreview({ image }) {
    return (
        <div className="image-preview">
            <img
                src={URL.createObjectURL(image)}
                alt="Selected Meal"
            />
        </div>
    );
}
export default ImagePreview;