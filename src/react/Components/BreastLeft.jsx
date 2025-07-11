import React from 'react'
import PropTypes from 'prop-types'

const BreastLeft = ({ width, height, onClick, style, isClicked }) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    style={style}
    viewBox="0 0 46 50"
    fill={isClicked ? 'blue' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.64805 2.85397L7.78522 3.38125C5.02283 5.06938 2.96768 7.70344 2.00205 10.7934C1.34426 12.8984 1.21796 15.1334 1.63443 17.299L3.14684 25.1635C3.38175 26.3851 3.5 27.6262 3.5 28.8701C3.5 34.0756 5.56787 39.0679 9.2487 42.7487L9.71618 43.2162C11.552 45.052 13.7495 46.4859 16.1692 47.4269C19.6438 48.7782 23.4427 49.0613 27.0792 48.2402L31.7589 47.1835C35.1753 46.412 38.3075 44.6156 40.7123 42.0693C43.7679 38.8339 45.5 34.5208 45.5 30.0706C45.5 28.0392 45.1449 26.0234 44.4507 24.1143L39.968 11.787C39.6565 10.9303 39.2776 10.0997 38.8349 9.30288L38.8098 9.25764C37.6174 7.11129 35.9748 5.24822 33.9948 3.79622C31.0745 1.65466 27.5475 0.5 23.9261 0.5H21.5H17.0143C14.0621 0.5 11.1671 1.31454 8.64805 2.85397Z"
      stroke="black"
    />
  </svg>
)
BreastLeft.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.any.isRequired,
  isClicked: PropTypes.bool.isRequired
}
export default BreastLeft
