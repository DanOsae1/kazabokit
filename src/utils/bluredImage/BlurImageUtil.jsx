import { useState } from "react";

function BlurImage({ src, alt, width, height, ...props }) {
  const placeholder =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCwwIEwxNjAsMTYwIEwwLDB6IiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPg==";
  const [loaded, setLoaded] = useState(false);
  return (
    <span style={{ display: "block", position: "relative", width, height }}>
      <img
        src={placeholder}
        alt=""
        width={width}
        height={height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          filter: "blur(16px)",
          width: "100%",
          height: "100%",
          transition: "opacity 0.3s",
          opacity: loaded ? 0 : 1,
        }}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.3s",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}

export default BlurImage;
