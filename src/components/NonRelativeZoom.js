import React, { Component } from "react";
import { Stage, Layer, Circle } from "react-konva";

export class NonRelativeZoom extends Component {
  handleMouseEnter = e => {
    //console.log("ENTER :", e);
    const layer = this.layerRef;
    layer.scale({
      x: 2,
      y: 2
    });
  };
  handleMouseMove = e => {
   // console.log("MOVING", e);
    const stage = this.stageRef;
    const layer = this.layerRef;
    const pos = stage.getPointerPosition();
    layer.x(-pos.x);
    layer.y(-pos.y);
  };
  handleMouseLeave = e => {
   // console.log("LEAVE", e);
    const layer = this.layerRef;
    layer.x(0);
    layer.y(0);
    layer.scale({
      x: 1,
      y: 1
    });
  };
  render() {
    return (
      <Stage
        ref={ref => (this.stageRef = ref)}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer
          ref={ref => (this.layerRef = ref)}
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <Circle
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={50}
            fill="blue"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    );
  }
}

export default NonRelativeZoom;
