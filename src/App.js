import React from "react";
import UseRefPractice from "./components/UseRefPractice";
import DragableComponent from "./components/DragableComponent";
import CanvasSplineComponent from "./components/CanvasSplineComponent";
import RotateImage from "./components/RotateImage";

import "./style/App.css";

function App() {
  return (
    <div className="App">
      {/* <UseRefPractice />
      <DragableComponent />
      <CanvasSplineComponent /> */}
      <RotateImage />
    </div>
  );
}

export default App;
