import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Frame1  from "./frames/frame1"
import Frame2  from "./frames/frame2"
import Frame3  from "./frames/frame3"
import Entrance1  from "./entrances/entrance1"

function randomElement(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function range(start, stop) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += 1);
    }
    return a;
}

function selectRandomFrame(fillColor) {
  return randomElement([
    <Frame1 fillColor={fillColor} />,
    <Frame2 fillColor={fillColor} />,
    <Frame3 fillColor={fillColor} />,
  ])
}

class VictorianGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainColor: 'black',
      accentColor: 'green',
      secondaryAccentColor: 'blue',
      frame: null,
    };
  }

  handleClick() {
    this.timer = setTimeout(_ => {
      const colorRange = range(100,255);
      const mainColor = `rgb(${randomElement(colorRange)},${randomElement(colorRange)}, ${randomElement(colorRange)})`;
      const frame = selectRandomFrame(mainColor);

      this.setState({
        mainColor: mainColor,
        frame: frame
    })}, 400);
  }

  renderVictorian() {
    return (
      <>
      <svg id="appendSVG" style={{height: '500px'}}>
        {this.state.frame}
        <Entrance1 />
      </svg>
      </>
    )
  }

  render() {
    return (
      <>
      { this.renderVictorian() }
    <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
      Generate a new Victorian
    </button>
  </>
    )
  }
}

export default VictorianGenerator
