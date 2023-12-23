// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const Box = () => {
//   const theme = useContext(ThemeContext);

//   return (
//     <div
//       style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
//     >
//       Theme context
//     </div>
//   );
// };

import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { setUncaughtExceptionCaptureCallback } from "process";

export const Box = () => {
  const theme = useContext(ThemeContext);

  const [bgColor, setBgColor] = useState(theme.primary.main);
  const [color, setColor] = useState(theme.primary.text);

  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      theme contest
      <button
        onClick={() => {
          setBgColor(theme.secondary.main);
          setColor(theme.secondary.text);
        }}
      >
        change theme
      </button>
    </div>
  );
};
