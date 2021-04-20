import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function TradeIcon(props) {
  return (
    <Svg
      width={136}
      height={77}
      viewBox="0 0 136 77"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          x1="71.46%"
          y1="47.73%"
          x2="1.369%"
          y2="50%"
          id="prefix__a"
        >
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        d="M45 939v5h2v33h-2v7h-2v-7h-2v-33h2v-5h2zm-10-10v5h2v33h-2v7h-2v-7h-2v-33h2v-5h2zm20 12v4h2v24h-2v5h-2v-5h-2v-24h2v-4h2zm30-10v5h2v30h-2v6h-2v-6h-2v-30h2v-5h2zm60-10v6h2v36h-2v7h-2v-7h-2v-36h2v-6h2zm-10-2v6h2v33h-2v7h-2v-7h-2v-33h2v-6h2zm-70 12v4h2v24h-2v5h-2v-5h-2v-24h2v-4h2zm-40-14v5h2v33h-2v7h-2v-7h-2v-33h2v-5h2zm80 12v4h2v23h-2v5h-2v-5h-2v-23h2v-4h2zm-10-10v5h2v30h-2v6h-2v-6h-2v-30h2v-5h2zm-20 2v4h2v24h-2v5h-2v-5h-2v-24h2v-4h2zm40-2v3h2v21h-2v4h-2v-4h-2v-21h2v-3h2zm40 0v3h2v21h-2v4h-2v-4h-2v-21h2v-3h2zm-30-12v6h2v22h-2v4h-2v-4h-2v-22h2v-6h2z"
        transform="translate(-21 -907)"
        fill="url(#prefix__a)"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default TradeIcon
