import React from 'react'

function Button({backGround , text , content}) {
  return (
    <button
      className={`" bg-${backGround}  w-[200px] text-${text} text-center rounded-md py-3 my-6 font-medium  mx-auto font-medium"`}
    >
      {content}{" "}
    </button>
  );
}

export default Button