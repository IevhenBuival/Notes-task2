import React from "react";

interface ISvgButton {
  children: React.ReactNode;
  className: string;
  handleClick: () => void;
}

function SvgButton({ children, className, handleClick }: ISvgButton) {
  return (
    <button className={className} onClick={handleClick}>
      <div className="flex space-around">{children}</div>
    </button>
  );
}

export default SvgButton;
