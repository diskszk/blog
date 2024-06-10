import { Button } from "./Button";
import { useState } from "react";


export const About: React.FC = () => {
  const lang = "jp";

  const [x, setX] = useState(0);

  return (
    <div>
      <p>{lang}</p>
      <Button />
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        {x}
      </button>
      <h2>About ページ</h2>
    </div>
  );
};
