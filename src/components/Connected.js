import React, { Component } from "react";
import { Stage, Layer, Circle, Arrow } from "react-konva";

class Connectd extends Component {
  state = {
    window: {},
    nodes: [
      // {
      //   id: new Date().getTime(),
      //   position: {
      //     x: Math.random() * window.innerWidth,
      //     y: Math.random() * window.innerHeight
      //   }
      // },
      // {
      //   id: 2,
      //   position: {
      //     x: 400,
      //     y: 100
      //   }
      // }
    ],
  };

  componentDidMount() {
    this.setState({ window, nodes: this.generateTargets() });
  }
  generateTargets = () => {
    var circle = 5;
    var nodes = [];
    while (nodes.length < circle) {
      nodes.push({
        id: new Date().getTime() * Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }
    return nodes;
  };
  handleDrag = (node) => (e) => {
    const nodes = [...this.state.nodes];

    const newObj = Object.assign(node, {
      x: e.target.x(),
      y: e.target.y(),
    });
    const index = nodes.indexOf(node);
    nodes[index] = newObj;
    this.setState({ nodes });
  };

  render() {
    const { nodes, window } = this.state;
    console.log("NODE :", nodes);
    var points = [];
    for (let key in nodes) {
      const x = nodes[key].x;
      const y = nodes[key].y;
      points.push(x, y);
    }
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {nodes.map((node) => (
            <Arrow
              // tension={0.2}
              points={points}
              key={node.id}
              stroke="black"
              fill="black"
              strokeWidth={2}
            />
          ))}
          {nodes.map((node) => (
            <Circle
              x={node.x}
              y={node.y}
              radius={50}
              fill="green"
              key={node.id}
              draggable
              onDragMove={this.handleDrag(node)}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default Connectd;
