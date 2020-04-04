import React, { Component } from "react";
import { Stage, Layer, Group, Rect, Circle } from "react-konva";

export class TestCollision1 extends Component {
  // state = {
  //   width: 40,
  //   height: 25
  // };
  // componentDidMount() {
  //   this.onDragMove();
  // }
  onDragMove = (e) => {
    const group = this.groupRef;
    // const boundingBox = this.rectRef.getClientRect({ relativeTo: group });
    // this.setState({
    //   width: boundingBox.width,
    //   height: boundingBox.height
    // });
    // console.log("LAYER REF:", this.layerRef);
    // console.log("ELEMENT :", e);
    var target = e.target;
    var targetRect = e.target.getClientRect();
    this.layerRef.children.each((group) => {
      // do not check intersection with itself
      if (group === target) {
        return;
      }
      if (this.haveIntersection(group.getClientRect(), targetRect)) {
        group.findOne(".fillShape").fill("red");
      } else {
        group.findOne(".fillShape").fill("grey");
      }
      // do not need to call layer.draw() here
      // because it will be called by dragmove action
    });
  };

  haveIntersection = (r1, r2) => {
    return !(
      r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y
    );
  };
  render() {
    // console.log("REF", this.layerRef);
    // const {  width, height } = this.state;
    // console.log(width, height);
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer ref={(ref) => (this.layerRef = ref)}>
          {[...Array(5)].map((_, i) => (
            <Group
              key={i}
              ref={(ref) => (this.groupRef = ref)}
              draggable
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              onDragMove={(e) => this.onDragMove(e)}
            >
              <Rect
                // x={x}
                // y={y}
                ref={(ref) => (this.rectRef = ref)}
                width={40}
                height={10}
                fill="grey"
                // rotation={360 * Math.random()}
                name="fillShape"
              />
              <Circle stroke="red" radius={60} strokeWidth={1} />
            </Group>
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default TestCollision1;
