import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [favoriteColor, setFavoriteColor] = useState("");

  return (
    <div>
      <h1>Chose color</h1>
      <Child handleColor={setFavoriteColor} />
      {favoriteColor && <p>Your color is: {favoriteColor}</p>}
    </div>
  );
}

export default Parent;
