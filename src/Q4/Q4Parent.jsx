import ColorDisplay from "./ColorDisplay";
import ColorSelector from "./ColorSelector";
import { ColorProvider } from "./ColorContext";

function Parent4() {
  return (
    <ColorProvider>
      <div>
        <ColorSelector />
        <ColorDisplay />
      </div>
    </ColorProvider>
  );
}

export default Parent4;
