import React, { useEffect, useRef, useState } from "react";
import "./hover.css";
import useHover from "../patterns/hook-pattern/useHover";

function Hover(props) {
  const [ref, isHovered] = useHover();
  const [copySuccess, setCopySuccess] = useState("");
  const textRef = useRef()

  useEffect(() => {
    if (isHovered) {
      console.log(ref.current);
    }
  }, [isHovered]);

  function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        setCopySuccess("Copied!");
      },
      () => {
        setCopySuccess("Copy failed!");
      }
    );
  }

  function copyAll() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        updateClipboard(textRef.current?.innerText);
      }
    });
  }

  return (
    <div className="container">
      <div className="hover-1" ref={ref}>
        Hover -1
        {isHovered && (
          <>
            <div ref ={textRef}>Div -1 is hovered ---copy all contents of div-1P</div>
            <button onClick={copyAll}>Copy</button>
            {copySuccess}
          </>
        )}
      </div>
      <div className="hover-2">
        Hover-2
        {isHovered && (
          <>
            <div>Div -2 is hovered</div>
          </>
        )}
      </div>
      <div className="hover-3">
        Hover-3
        {isHovered && (
          <>
            <div>Div -3 is hovered</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hover;
