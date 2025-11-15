import React from "react";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <img
    src="../image/C&A-17.png"
    alt="CloudAdept Systems Logo"
    className={`h-12 w-auto ${className}`}
  />
);

export default Logo;
