import React, { useState, useCallback } from "react";
import { Upload, Loader2, CheckCircle2, XCircle, Image, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

function GalleryForm() {
  const [formData, setFormData] = useState({
    images: []
  });
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      // Create preview URLs for all accepted files
      const newPreviewUrls = acceptedFiles.map(file => URL.createObjectURL(file));
      
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...acceptedFiles]
      }));
      
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true
  });

  const removeImage = (index) => {
    // Create new arrays without the item at the specified index
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    
    const newPreviewUrls = [...previewUrls];
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    newPreviewUrls.splice(index, 1);
    
    setFormData(prev => ({ ...prev, images: newImages }));
    setPreviewUrls(newPreviewUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setStatus({ type: "error", message: "Unauthorized! Please login first." });
        return;
      }

      if (formData.images.length === 0) {
        setStatus({ type: "error", message: "Please select at least one image to upload." });
        setLoading(false);
        return;
      }

      const postData = new FormData();
      formData.images.forEach(image => {
        postData.append("images", image);
      });

      const response = await fetch("http://localhost:5000/api/gallery/multiple", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload images");
      }

      setStatus({ 
        type: "success", 
        message: `Successfully uploaded ${data.uploadedCount} ${data.uploadedCount === 1 ? 'image' : 'images'}!` 
      });
      
      // Clear form
      setFormData({ images: [] });
      // Revoke all object URLs to prevent memory leaks
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
      e.target.reset();
    } catch (error) {
      console.error("Error uploading images:", error);
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleViewDashboard = () => {
    navigate("/admin/gallery-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0d173b] mb-3">Gallery Upload</h2>
            <p className="text-gray-600 text-lg">Add multiple images to your gallery collection</p>
          </div>
          <button
            onClick={handleViewDashboard}
            className="flex items-center gap-2 bg-[#0d173b] text-white px-5 py-3 rounded-lg hover:bg-[#0d173b]/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <Image className="w-5 h-5" />
            View Gallery
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div
            {...getRootProps()}
            className={`border-3 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-300 group
              ${isDragActive 
                ? 'border-[#0d173b] bg-[#0d173b]/5' 
                : 'border-gray-200 hover:border-[#0d173b] hover:bg-gray-50'}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                ${isDragActive 
                  ? 'bg-[#0d173b]/20 scale-110' 
                  : 'bg-gray-100 group-hover:bg-[#0d173b]/10'}`}>
                <Upload className={`w-10 h-10 transition-colors ${isDragActive ? 'text-[#0d173b]' : 'text-gray-400 group-hover:text-[#0d173b]'}`} />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-gray-700">
                  {isDragActive ? "Drop your images here" : "Drag & drop images here"}
                </p>
                <p className="text-base text-gray-500">or click to browse from your device</p>
                <p className="text-sm text-gray-400 mt-3">Supported formats: JPG, PNG, GIF, WebP</p>
                <p className="text-sm font-medium text-[#0d173b] mt-2">Upload multiple files at once!</p>
              </div>
            </div>
          </div>

          {previewUrls.length > 0 && (
            <div className="mt-8 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <p className="text-base font-medium text-[#0d173b]">
                  Image Previews ({previewUrls.length} {previewUrls.length === 1 ? 'file' : 'files'} selected)
                </p>
                <button 
                  type="button"
                  onClick={() => {
                    // Revoke all object URLs to prevent memory leaks
                    previewUrls.forEach(url => URL.revokeObjectURL(url));
                    setPreviewUrls([]);
                    setFormData(prev => ({ ...prev, images: [] }));
                  }}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <XCircle className="w-4 h-4" /> Remove All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <div className="relative w-full h-40 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {status.type && (
            <div className={`p-4 rounded-lg flex items-center gap-3 animate-fadeIn
              ${status.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-100' 
                : 'bg-red-50 text-red-700 border border-red-100'}`}
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 flex-shrink-0" />
              )}
              <p className="text-base font-medium">{status.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || formData.images.length === 0}
            className="w-full flex items-center justify-center gap-2 font-medium text-lg px-6 py-4 bg-[#0d173b] text-white rounded-lg 
              hover:bg-[#0d173b]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:hover:transform-none"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-6 h-6" />
                <span>Upload to Gallery</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GalleryForm;