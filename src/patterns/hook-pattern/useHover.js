import React, { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHovered, setIsHovred] = useState(false);
  const ref = useRef(null);

  const handleMousehover = () => {
    setIsHovred(true);
  };
  const handleMouseOut = () => {
    setIsHovred(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMousehover);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      node?.removeEventListener("mouseover", handleMousehover);
      node?.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref.current]);

  return [ref, isHovered];
}
