const Logo = ({ variant = "dark", size = "default" }) => {
  const color = variant === "light" ? "#FAFAF8" : "#111110";
  const accentColor = "#1B4332";
  const h = size === "small" ? 22 : 26;

  return (
    <svg
      width={size === "small" ? 96 : 110}
      height={h}
      viewBox="0 0 110 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="archive"
    >
      {/* Geometric mark: stacked horizontal bars suggesting data/storage/archive */}
      <rect x="0" y="2" width="18" height="3.5" rx="1" fill={accentColor} />
      <rect
        x="0"
        y="8"
        width="14"
        height="3.5"
        rx="1"
        fill={accentColor}
        opacity="0.7"
      />
      <rect
        x="0"
        y="14"
        width="10"
        height="3.5"
        rx="1"
        fill={accentColor}
        opacity="0.45"
      />
      <rect
        x="0"
        y="20"
        width="6"
        height="3.5"
        rx="1"
        fill={accentColor}
        opacity="0.25"
      />

      {/* Wordmark */}
      <text
        x="26"
        y="20"
        fontFamily="Poppins, -apple-system, sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.3"
        fill={color}
      >
        archive
      </text>
    </svg>
  );
};

export default Logo;
