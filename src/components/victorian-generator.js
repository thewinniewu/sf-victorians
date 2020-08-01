import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SvgComponent1  from "./svg-component1"


const CompiledSvg = () => (
  <>
  <p>suppo</p>
  <svg id="appendSVG"><SvgComponent1 /></svg>
  </>

)

const VictorianGenerator = () => (
  <CompiledSvg />
)

VictorianGenerator.propTypes = {
  // siteTitle: PropTypes.string,
}

VictorianGenerator.defaultProps = {
  // siteTitle: ``,
}

export default VictorianGenerator
