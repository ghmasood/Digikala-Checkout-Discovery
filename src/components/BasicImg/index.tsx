import React, { useState } from "react";
interface IBasicImg
  extends Omit<
    React.HTMLAttributes<HTMLImageElement>,
    "className" | "src" | "loading" | "style" | "width" | "alt"
  > {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  alt?: string;
}
function BasicImg({ src, className, style, width, alt, ...rest }: IBasicImg) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={className}
      style={{
        aspectRatio: 1,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <img
        alt="Loading"
        src="/images/logo.png"
        style={{
          ...style,
          width: "66%",
          aspectRatio: 1,
          transition: "all 0.3s ease",
          opacity: `${loaded ? 0 : 30}%`,
          filter: "grayscale(100%)",
        }}
        className={className}
      />

      <img
        {...rest}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          transition: "all 0.3s ease",
          opacity: `${loaded ? 100 : 0}%`,
          borderRadius: "2rem",
          overflow: "hidden",
          ...style,
        }}
        loading="lazy"
        src={src}
        width={width}
        onLoad={() => {
          console.log("loaded");
          setLoaded(true);
        }}
        className={className}
      />
    </div>
  );
}

export default BasicImg;
