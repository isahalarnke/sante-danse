import React from "react"

const LowerAbs = ({width, height, onClick, style, isClicked}) => (
    <svg
        width={width}
        height={height}
        onClick={onClick}
        style={style}
        viewBox="0 0 50 50"
        fill={isClicked ? "orange" : "none"}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M23 0.5H11C5.20101 0.5 0.5 5.20101 0.5 11V11.6738C0.5 16.8205 1.6983 21.8966 4 26.5L10 35.5L16 42.5L20.3694 46.5573C22.0603 48.1274 24.2824 49 26.5898 49C28.7893 49 30.9149 48.2071 32.577 46.7666L35.9693 43.8266C36.9874 42.9442 37.9191 41.9667 38.7515 40.9072L41.0903 37.9305C42.3612 36.313 43.4951 34.5923 44.4801 32.7864C47.4459 27.3491 49 21.2546 49 15.0611V11C49 5.20101 44.299 0.5 38.5 0.5H37.5H23Z"
            stroke="black"
        />
    </svg>
)
export default LowerAbs
