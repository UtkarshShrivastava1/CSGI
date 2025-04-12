import React, { useState, useCallback } from "react";
import { Upload, Loader2, CheckCircle2, XCircle, Image } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

function GalleryForm() {
  const [formData, setFormData] = useState({
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

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

      const postData = new FormData();
      if (formData.image) {
        postData.append("image", formData.image);
      }

      const response = await fetch("http://localhost:5000/api/gallery", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload image");
      }

      setStatus({ type: "success", message: "Image uploaded successfully!" });
      setFormData({ image: null });
      setPreviewUrl("");
      e.target.reset();
    } catch (error) {
      console.error("Error uploading image:", error);
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
            <p className="text-gray-600 text-lg">Add stunning visuals to your gallery collection</p>
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
                  {isDragActive ? "Drop your image here" : "Drag & drop an image here"}
                </p>
                <p className="text-base text-gray-500">or click to browse from your device</p>
                <p className="text-sm text-gray-400 mt-3">Supported formats: JPG, PNG, GIF</p>
              </div>
            </div>
          </div>

          {previewUrl && (
            <div className="mt-8 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <p className="text-base font-medium text-[#0d173b]">Image Preview</p>
                <button 
                  type="button"
                  onClick={() => {
                    setPreviewUrl("");
                    setFormData(prev => ({ ...prev, image: null }));
                  }}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <XCircle className="w-4 h-4" /> Remove
                </button>
              </div>
              <div className="relative w-full h-72 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
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
            disabled={loading || !formData.image}
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