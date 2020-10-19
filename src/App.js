import React from "react";
import UseRefPractice from "./components/UseRefPractice";
import DragableComponent from "./components/DragableComponent";
import CanvasSplineComponent from "./components/CanvasSplineComponent";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <UseRefPractice />
      <DragableComponent />
      <CanvasSplineComponent />
    </div>
  );
}

export default App;
