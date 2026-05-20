import { useRef, useState } from "react";
import capoeiraVideo from "../assets/example.mp4";

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#24160f] px-6 py-24 text-white">
      {/* Ambient Background */}
      <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-105 w-105 rounded-full border-35 border-[#c98b2b]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Video Container */}
        <div className="group relative overflow-hidden rounded-[40px] border border-[#c98b2b]/20 shadow-2xl shadow-black/30">
          <video
            ref={videoRef}
            src={capoeiraVideo}
            loop
            playsInline
            className="h-[80vh] min-h-140 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/40" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]" />

          {/* TOP HEADER */}
          <div className="absolute left-0 top-0 w-full p-8 sm:p-10 lg:p-14">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
                Experience The Energy
              </p>

              {/* Desktop Only */}
              <div className="hidden lg:block">
                <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-6xl">
                  Feel The Rhythm Of Capoeira
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#d7cec5] sm:text-lg">
                  A glimpse into the movement, music and connection that bring
                  Bath Capoeira Group to life.
                </p>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <button
            onClick={toggleVideo}
            className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-[0.15em] text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-[#c98b2b] hover:bg-black/55"
          >
            <span>{isPlaying ? "Pause Video" : "Play Video"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
