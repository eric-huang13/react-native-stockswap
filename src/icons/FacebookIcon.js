import React from "react"
import Svg, { G, Path } from "react-native-svg"
import { moderateScale } from "../util/responsiveFont"

function FacebookIcon() {
  return (
    <Svg
      width={moderateScale(18)}
      height={moderateScale(18)}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
  
    >
      <G fillRule="nonzero" fill="none">
        <Path
          d="M15.75 0H2.25C1.01 0 0 1.01 0 2.25v13.5C0 16.99 1.01 18 2.25 18h13.5c1.24 0 2.25-1.01 2.25-2.25V2.25C18 1.01 16.99 0 15.75 0z"
          fill="#1976D2"
        />
        <Path
          d="M15.188 9h-2.813V6.75c0-.621.504-.563 1.125-.563h1.125V3.376h-2.25A3.375 3.375 0 009 6.75V9H6.75v2.813H9V18h3.375v-6.188h1.688L15.187 9z"
          fill="#FAFAFA"
        />
      </G>
    </Svg>
  )
}

export default FacebookIcon
