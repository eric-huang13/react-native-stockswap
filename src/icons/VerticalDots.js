import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function VerticalDots(props) {
  return (
    <Svg
      width={3}
      height={16}
      viewBox="0 0 3 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 12.845a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default VerticalDots
