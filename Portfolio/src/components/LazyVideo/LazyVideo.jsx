import { useEffect, useRef, useState } from "react";
import "./LazyVideo.css";
import { getVideoUrl } from "../../utils/video";

const LazyVideo = ({
  src,
  poster,
  preload = "metadata",
  threshold = 0.25,
}) => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={wrapperRef} className="lazy-video-wrapper">
      {isVisible && (
        <video
          src={getVideoUrl(src)}
          poster={poster}
          controls
          preload={preload}
          playsInline
          className="lazy-video"
        />
      )}
    </div>
  );
};

export default LazyVideo;
