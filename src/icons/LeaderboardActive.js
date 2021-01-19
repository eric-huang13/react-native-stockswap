import React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function LeaderboardActive() {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        d="M22.382 5.538a.537.537 0 00-.661.003L16.035 9.98l-3.731-8.623c-.177-.406-.828-.406-1.005 0L7.523 10.08 1.887 5.545a.54.54 0 00-.665-.01.568.568 0 00-.185.653l3.916 12.597a.547.547 0 00.511.359h12.673c.228 0 .43-.142.512-.359l3.915-12.597a.567.567 0 00-.182-.65zm-4.62 12.484H5.84L2.783 7.692 7.4 11.408a.53.53 0 00.471.102.548.548 0 00.37-.317l3.56-8.222 3.51 8.115c.07.157.204.273.367.316a.535.535 0 00.47-.098l4.69-3.663-3.078 10.382z"
        fill="#8B64FF"
        fillRule="nonzero"
        stroke="#8B64FF"
      />
    </Svg>
  )
}

export default LeaderboardActive
