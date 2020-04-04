import React, { Component } from "react";
import { Stage, Layer, Circle } from "react-konva";

class Zooming extends Component {
  state = {
    stageScale: 1,
    stageX: 0,
    stageY: 0
  };
  handleWheel = e => {
    e.evt.preventDefault();
    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    this.setState({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
  };
  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onWheel={this.handleWheel}
        scaleX={this.state.stageScale}
        scaleY={this.state.stageScale}
        x={this.state.stageX}
        y={this.state.stageY}
      >
        <Layer>
          <Circle
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={50}
            fill="green"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    );
  }
}

export default Zooming;
