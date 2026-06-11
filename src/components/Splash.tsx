import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronRight } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Disable body scroll when splash is active
    document.body.style.overflow = 'hidden';

    // Show skip button after 1.5 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1500);

    // Fallback timeout in case the video doesn't play or load (8 seconds max)
    const fallbackTimer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(skipTimer);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking background from skipping
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleLoadedData = () => {
    setVideoLoaded(true);
    videoRef.current?.play().catch((err) => {
      console.warn("Video play failed or was blocked:", err);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -16,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
      }}
      onClick={onComplete}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050d18] cursor-pointer overflow-hidden select-none"
    >
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src="/sfb-splash.mp4"
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={onComplete}
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient background glow to make it look extremely premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

        {/* Controls Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col gap-6 pointer-events-none">
          <div className="flex items-center justify-between w-full">
            {/* Sound toggle */}
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleToggleMute}
              className="pointer-events-auto flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>

            {/* Skip Button */}
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onComplete();
                }}
                className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
              >
                <span>Skip Intro</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Premium thin progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
