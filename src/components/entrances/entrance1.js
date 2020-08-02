import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Entrance1 = ({ lineColor, roofColor, doorColor, stairColor }) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 100 100" width="400" height="400" shapeRendering="crispEdges">
      <path stroke={roofColor} d="M60 66h2M59 67h4M58 68h6M57 69h8M56 69h10M55 70h12M54 71h14M53 72h16" />
      <path stroke={lineColor} d="M60 65h2M59 66h1M62 66h1M58 67h1M63 67h1M57 68h1M64 68h1M56 69h1M65 69h1M55 70h1M66 70h1M54 71h1M67 71h1M53 72h1M68 72h1M53 73h16M53 74h1M55 74h1M66 74h1M68 74h1M53 75h1M55 75h1M58 75h6M66 75h1M68 75h1M53 76h1M55 76h1M57 76h1M64 76h1M66 76h1M68 76h1M53 77h1M55 77h1M57 77h1M64 77h1M66 77h1M68 77h1M53 78h1M55 78h2M65 78h2M68 78h1M53 79h1M55 79h2M65 79h2M68 79h1M53 80h1M55 80h2M65 80h2M68 80h1M53 81h1M55 81h2M65 81h2M68 81h1M53 82h1M55 82h2M65 82h2M68 82h1M53 83h1M55 83h2M65 83h2M68 83h1M53 84h1M55 84h2M65 84h2M68 84h1M53 85h1M55 85h2M65 85h2M68 85h1M53 86h1M55 86h2M65 86h2M68 86h1M53 87h1M55 87h12M68 87h1M53 88h1M55 88h2M65 88h2M68 88h1M53 89h1M55 89h12M68 89h1M53 90h1M55 90h1M66 90h1M68 90h1M53 91h16M53 92h1M68 92h1M53 93h16" />
      <path stroke={stairColor} d="M54 74h1M67 74h1M54 75h1M67 75h1M54 76h1M67 76h1M54 77h1M67 77h1M54 78h1M67 78h1M54 79h1M67 79h1M54 80h1M67 80h1M54 81h1M67 81h1M54 82h1M67 82h1M54 83h1M67 83h1M54 84h1M67 84h1M54 85h1M67 85h1M54 86h1M67 86h1M54 87h1M67 87h1M54 88h1M57 88h8M67 88h1M54 89h1M67 89h1M54 90h1M56 90h10M67 90h1M54 92h14" />
      <path stroke={doorColor} d="M58 76h6M58 77h6M57 78h8M57 79h8M57 80h8M57 81h8M57 82h8M57 83h8M57 84h8M57 85h8M57 86h8" />
      </svg>
  </>
)

Entrance1.propTypes = {
  lineColor: PropTypes.string,
  roofColor: PropTypes.string,
  doorColor: PropTypes.string,
  stairColor: PropTypes.string,
}

Entrance1.defaultProps = {
  lineColor: '#000000',
  roofColor: '#ffffff',
  doorColor: '#6affea',
  stairColor: '#ffff00',
}

export default Entrance1
