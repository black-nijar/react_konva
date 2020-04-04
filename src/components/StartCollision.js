import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Star, Text } from "react-konva";
var storedPoints = [];

const haveIntersection = r1 => {
  return storedPoints.includes(r1.target.attrs.x);
};
class StarCollision extends Component {
  handleDragMove = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      fill: haveIntersection(e) ? "#008080" : "#89b717"
    });
  };
  handleDragStart = e => {
    console.log(storedPoints);

    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      fill: haveIntersection(e) ? "#0000FF" : "#89b717"
    });
  };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try to drag a star" />
          {[...Array(2)].map((_, i) => {
            const pointX = Math.random() * window.innerWidth;
            storedPoints.push(Math.round(pointX));
            return (
              <Star
                key={i}
                x={Math.round(pointX)}
                y={Math.random() * window.innerHeight}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={Math.random() * 180}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                onDragMove={this.handleDragMove}
              />
            );
          })}
        </Layer>
      </Stage>
    );
  }
}
export default StarCollision;
