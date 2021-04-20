import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { moderateScale } from "../util/responsiveFont"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function TriangleIcon (props) {
  return (
    <Svg
      width={moderateScale(12)}
      height={moderateScale(9)}
      viewBox="0 0 12 9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.79 7.985l4.955-6.371A1 1 0 0010.955 0h-9.91a1 1 0 00-.79 1.614l4.956 6.371a1 1 0 001.578 0z"
        fill="#B8A0FF"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default TriangleIcon 
