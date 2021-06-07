import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Rect } from "react-native-svg"
import { moderateScale } from "../util/responsiveFont"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function PostIcon(props) {
  return (
    <Svg
      width={moderateScale(118)}
      height={moderateScale(81)}
      viewBox="0 0 118 81"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__a">
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__b">
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__c">
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__d">
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__e">
          <Stop stopColor="#5A70A2" offset="0%" />
          <Stop stopColor="#506189" offset="100%" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Rect fill="url(#prefix__a)" width={118} height={41} rx={2} />
        <Rect fill="url(#prefix__b)" y={49} width={103} height={5} rx={2.5} />
        <Rect fill="url(#prefix__c)" y={58} width={118} height={5} rx={2.5} />
        <Rect fill="url(#prefix__d)" y={67} width={105} height={5} rx={2.5} />
        <Rect fill="url(#prefix__e)" y={76} width={113} height={5} rx={2.5} />
      </G>
    </Svg>
  )
}

export default PostIcon
