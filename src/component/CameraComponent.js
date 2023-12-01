import React, { useRef, useState } from "react";

const PhotoUploader = ({ inspectionItemName }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="item">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="inspection-item-box" onClick={openFileInput}>
        <div className="inspection-item-image">
          {selectedPhoto && (
            <img src={selectedPhoto} alt="selected" style={{ width: "100%" }} />
          )}
        </div>
        <p>{inspectionItemName}</p>
      </div>
    </div>
  );
};

export default PhotoUploader;
