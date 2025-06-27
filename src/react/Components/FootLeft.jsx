import React from 'react'
import PropTypes from 'prop-types'

const FootLeft = ({ width, height, onClick, style, isClicked }) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    style={style}
    viewBox="0 0 25 39"
    fill={isClicked ? 'orange' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L4.5 2L3.5 5.5V12V18V22L2.5 27V30L1.5 34.5L3.5 37.5L6 38.5H12.5H18L23.5 33.5L24 28.5L22.5 23L21 19.5L20 15V10L19 5.5L17 2L15 1H11H8Z"
      stroke="black"
    />
  </svg>
)
FootLeft.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.any.isRequired,
  isClicked: PropTypes.bool.isRequired
}
export default FootLeft
