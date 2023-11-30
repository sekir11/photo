import React, { useState } from 'react';

const PhotoUploader = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedPhoto && (
        <div>
          <h2>Selected Photo</h2>
          <img src={selectedPhoto} alt="selected" style={{ width: '200px', height: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;