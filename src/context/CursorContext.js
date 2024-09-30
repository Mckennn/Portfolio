// import React, { useEffect, useRef } from "react";

// export const CursorContext = React.createContext();

// const CursorProvider = ({ children }) => {
//   const cursorRef = useRef(null);
//   const posX = useRef(0);
//   const posY = useRef(0);
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);

//   useEffect(() => {
//     const move = (e) => {
//       mouseX.current = e.clientX;
//       mouseY.current = e.clientY;
//     };

//     window.addEventListener("mousemove", move);

//     const followMouse = () => {
//       posX.current += (mouseX.current - posX.current) * 0.1;
//       posY.current += (mouseY.current - posY.current) * 0.1;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate3d(${posX.current - 16}px, ${posY.current - 16}px, 0)`;
//       }

//       requestAnimationFrame(followMouse);
//     };

//     followMouse();

//     return () => {
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <CursorContext.Provider value={{ cursorRef }}>
//       {children}
//     </CursorContext.Provider>
//   );
// };

// export default CursorProvider;

import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default")

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const mouseEnterHandler = () => {
  setCursorBG('text');
}
  const mouseLeaveHandler = () => {
  setCursorBG('default');
}

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
