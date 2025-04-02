import React from "react";

const VideoGallery = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Video Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video 
            controls 
            className="w-full h-64 object-cover"
          >
            <source
              src="https://csitdurg.in/Photos/csit_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video 
            controls 
            className="w-full h-64 object-cover"
          >
            <source
              src="https://csitdurg.in/Photos/csit_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;