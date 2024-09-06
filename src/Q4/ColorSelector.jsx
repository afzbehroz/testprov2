import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorSelector() {
  const { setColor } = useContext(ColorContext);

  return (
    <select onChange={(e) => setColor(e.target.value)}>
      <option value="">Select a color</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
    </select>
  );
}
