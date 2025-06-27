import React from 'react'
import PropTypes from 'prop-types'

const FootRight = ({ width, height, onClick, style, isClicked }) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    style={style}
    viewBox="0 0 29 38"
    fill={isClicked ? 'orange' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 1H5L1 7V9.5V15.5V21.5L4 28.5L7 33L9.5 37.5H15.5H22L28 35V31L24 25.5L19 19.5L15.5 13V7L13 3.5L9.5 1Z"
      stroke="black"
    />
  </svg>
)
FootRight.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.any.isRequired,
  isClicked: PropTypes.bool.isRequired
}
export default FootRight
