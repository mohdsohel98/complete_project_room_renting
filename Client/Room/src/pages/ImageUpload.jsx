import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const ImageUpload = ({ onImagesUploaded, uploadedImages, onRemoveImage, maxImages }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList) => {
    if (uploadedImages.length >= maxImages) {
      alert(`You can upload a maximum of ${maxImages} images.`);
      return;
    }

    const files = Array.from(fileList);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const availableSlots = maxImages - uploadedImages.length;
    const filesToUpload = imageFiles.slice(0, availableSlots);

    onImagesUploaded(filesToUpload);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 
          ${isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          multiple
          accept="image/*"
          className="hidden"
        />
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-2 flex text-sm text-gray-600 justify-center">
          <p>
            <span className="font-medium text-teal-600 hover:text-teal-500">
              Upload images
            </span>{' '}
            or drag and drop
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          PNG, JPG, GIF up to 10MB
        </p>
      </div>

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Room preview ${index + 1}`}
                  className="h-32 w-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => onRemoveImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm opacity-90 hover:opacity-100 transition-opacity duration-200"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          {uploadedImages.length} of {maxImages} images
        </span>
        {uploadedImages.length > 0 && (
          <div className="h-2 bg-gray-200 rounded-full w-32">
            <div
              className="h-2 bg-teal-500 rounded-full"
              style={{ width: `${(uploadedImages.length / maxImages) * 100}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
