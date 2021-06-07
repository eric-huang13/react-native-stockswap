import React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import {moderateScale, verticalScale, scale} from '../util/responsiveFont'

function AppleIcon() {
  return (
    <Svg
      width={moderateScale(15)}
      height={moderateScale(18)}
      viewBox="0 0 15 18"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Defs></Defs>
      <G
        transform="translate(-80 -530)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"
      >
        <G fill="#000" fillRule="nonzero">
          <Path d="M90.776 530h.127c.101 1.257-.378 2.196-.962 2.876-.572.675-1.355 1.33-2.622 1.231-.085-1.239.396-2.108.978-2.787.54-.632 1.53-1.195 2.479-1.32zM94.611 543.082v.035a10.37 10.37 0 01-1.484 2.86c-.565.78-1.259 1.827-2.497 1.827-1.07 0-1.78-.688-2.877-.706-1.16-.02-1.797.575-2.858.724h-.361c-.779-.112-1.407-.729-1.865-1.285-1.35-1.642-2.394-3.762-2.588-6.477v-.797c.083-1.942 1.026-3.522 2.28-4.287.663-.407 1.573-.754 2.587-.599.434.067.878.216 1.267.363.368.142.83.393 1.266.38.296-.009.59-.163.888-.272.874-.315 1.73-.677 2.858-.507 1.357.205 2.32.808 2.914 1.738-1.147.73-2.054 1.83-1.9 3.71.138 1.706 1.13 2.705 2.37 3.293z" />
        </G>
      </G>
    </Svg>
  )
}

export default AppleIcon
