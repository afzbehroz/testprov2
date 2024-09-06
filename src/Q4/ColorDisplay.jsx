import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorDisplay() {
  const { color } = useContext(ColorContext);

  return (
    <div>
      <p>Selected color: {color}</p>
    </div>
  );
}
