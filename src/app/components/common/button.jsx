import React from "react";

function ButtonComp({ width, height, text }) {
  return (
    <button
      className={`w-${width} h-${height} bg-btnBGColor text-white text-16 font-normal rounded-5 border-none`}
    >
      {text}
    </button>
  );
}

export default ButtonComp;
