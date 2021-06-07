import * as React from "react"
import Svg, { Defs, G, Circle, Path } from "react-native-svg"
import { moderateScale } from "../util/responsiveFont"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

function PasswordIcon(props) {
  return (
    <Svg
      width={moderateScale(80)}
      height={moderateScale(80)}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs></Defs>
      <G
        transform="translate(-222 -711)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"

      >
        <G transform="translate(222 711)" fill="#71F59C" fillRule="nonzero">
          <Circle cx={52.813} cy={54.063} r={3.125} />
          <Path d="M37.188 73.75H12.5a6.257 6.257 0 01-6.25-6.25V41.875a6.257 6.257 0 016.25-6.25h45a6.257 6.257 0 016.25 6.25v6.25a3.125 3.125 0 106.25 0v-6.25c0-6.892-5.608-12.5-12.5-12.5h-3.756v-11.02C53.744 8.233 45.333 0 34.994 0s-18.75 8.234-18.75 18.354v11.021H12.5c-6.893 0-12.5 5.608-12.5 12.5V67.5C0 74.393 5.607 80 12.5 80h24.688a3.125 3.125 0 100-6.25zM22.493 18.354c0-6.674 5.608-12.104 12.5-12.104 6.893 0 12.5 5.43 12.5 12.104v11.021h-25v-11.02z" />
          <Path d="M78.694 50.897a3.125 3.125 0 00-4.36.722L58.931 73.134a1.77 1.77 0 01-1.23.612 1.77 1.77 0 01-1.339-.478l-9.954-9.714a3.125 3.125 0 10-4.366 4.473l9.972 9.731.028.027a8.056 8.056 0 006.074 2.197 8.057 8.057 0 005.73-2.984c.035-.045.07-.091.104-.138l15.466-21.603a3.125 3.125 0 00-.722-4.36z" />
          <Circle cx={40.938} cy={54.063} r={3.125} />
          <Circle cx={17.5} cy={54.063} r={3.125} />
          <Circle cx={29.219} cy={54.063} r={3.125} />
        </G>
      </G>
    </Svg>
  )
}

export default PasswordIcon
