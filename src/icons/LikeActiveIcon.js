import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { moderateScale } from "../util/responsiveFont"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function LikeActiveIcon(props) {
  return (
    <Svg
      width={moderateScale(19)}
      height={moderateScale(16)}
      viewBox="0 0 19 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.492 16c-.256 0-.503-.093-.695-.261a208.417 208.417 0 00-2.045-1.76l-.003-.002c-1.812-1.544-3.377-2.877-4.465-4.19C1.067 8.316.5 6.925.5 5.404c0-1.478.507-2.841 1.427-3.84A4.836 4.836 0 015.524 0C6.562 0 7.513.328 8.35.975c.422.327.805.727 1.142 1.193.337-.466.72-.866 1.143-1.193A4.524 4.524 0 0113.46 0c1.389 0 2.667.556 3.597 1.566.92.998 1.427 2.361 1.427 3.839 0 1.52-.567 2.913-1.784 4.381-1.088 1.314-2.653 2.647-4.464 4.19-.62.528-1.32 1.126-2.049 1.763-.192.168-.44.261-.695.261z"
        fill="#B8A0FF"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default LikeActiveIcon
