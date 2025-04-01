import { Play } from "lucide-react";
import { useState } from "react";
import placeholderImageUrl from "@/assets/Mockup.jpg";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    // Replace this with your actual video URL
    setVideoUrl("https://kazabokit.biz/wp-content/uploads/2024/08/Video.mp4");
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-subtitle">Watch Us in Action</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">
            Experience Kaz A Bokit
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 bg-caribbean-black">
            {isPlaying && videoUrl ? (
              <div className="relative w-full h-0 pt-[56.25%]">
                <iframe
                  src={videoUrl}
                  title="Kaz A Bokit Promotional Video"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            ) : (
              <div className="relative w-full h-0 pt-[56.25%]">
                <img
                  src={placeholderImageUrl}
                  alt="Kaz A Bokit Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-caribbean-black/30 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 rounded-full bg-caribbean-orange/90 flex items-center justify-center transform transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-caribbean-orange/50"
                    aria-label="Play video"
                  >
                    <Play size={36} className="text-white ml-2" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-medium">
                    Video coming soon! Check back later for our promotional
                    video.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg">
            Follow us on social media for more videos and updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;