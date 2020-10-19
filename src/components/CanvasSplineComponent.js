import React, { useState, useEffect } from "react";
import { CanvasSpliner } from "CanvasSpliner/dist/CanvasSpliner";
import "../style/Canvas.css";

const CanvasSplineComponent = () => {
  const [points, setPoints] = useState([]);
  useEffect(() => {
    let cs = new CanvasSpliner("cell_1", 255, 255);
    // create a new CanvasSpliner, with a parent DIV id, a width and a heigh
    cs.add({ x: 0, y: 0 });
    cs.add({ x: 0.1, y: 0.4 });
    cs.add({ x: 0.3, y: 0.45 });
    cs.add({ x: 0.6, y: 0.8 });
    cs.add({ x: 1, y: 0.6 });

    cs.on("releasePoint", function(csObj) {
      // here, csObj is the same object as cs. We can then call
      let tempArray = [];
      csObj._pointCollection._points.forEach((point, i) => {
        console.log(`index ${i}: x = ${point.x}, y= ${point.y}`);
        tempArray.push({ x: point.x, y: point.y });
      });
      setPoints(tempArray);
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div id="cell_1" className="splineCell" />
      <ul className="positions">
        {points.length > 0 &&
          points.map((p, i) => (
            <li key={i}>
              Index {i}: x {p.x}, y {p.y}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CanvasSplineComponent;
