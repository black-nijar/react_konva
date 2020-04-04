import React from "react";
import Zooming from "./components/Zooming";
import Connected from "./components/Connected";
import TestCollision1 from "./components/TestCollision1";
import NonRelativeZoom from "./components/NonRelativeZoom";
import StarCollision from "./components/StartCollision";

const App = () => {
  return (
    <div>
      <Zooming/>
      <TestCollision1/>
      <StarCollision/>
      <NonRelativeZoom/>
      <Connected />
    </div>
  );
};

export default App;
