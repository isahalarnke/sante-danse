import React from "react"

const ShinRight = ({width, height, onClick, style, isClicked}) => (
    <svg
        width={width}
        height={height}
        onClick={onClick}
        style={style}
        viewBox="0 0 29 87"
        fill={isClicked ? "pink" : "none"}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 0.5L5 2L2.5 5L1 9.5V14.5V21V27V32.5V35V39V43.5V47.5V51.5V56V60V64V68V72L2.5 77L5 80.5L8 84.5L12 86L16 81.5L17.5 77L19 72L20 65.5L21 60L23 53L24.5 45L26 39L27.5 35L28.5 27V21V14.5L27.5 7.5L26 3.5L24.5 2L22 0.5H17.5H14H12H8Z"
            stroke="black"
        />
    </svg>
)
export default ShinRight