import React from "react"
import Svg, { G, Path } from "react-native-svg"

function GoogleIcon() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <G fillRule="nonzero" fill="none">
        <Path
          d="M14.79 15.845C13.23 17.163 11.204 18 9 18c-3.28 0-6.16-1.807-7.72-4.444l.584-2.693 2.59-.481c.601 1.94 2.415 3.364 4.546 3.364a4.678 4.678 0 002.784-.907l2.49.38.516 2.626z"
          fill="#59C36A"
        />
        <Path
          d="M14.79 15.845l-.517-2.626-2.489-.38c-.79.58-1.75.907-2.784.907V18c2.204 0 4.23-.837 5.79-2.155z"
          fill="#00A66C"
        />
        <Path
          d="M4.254 9c0 .485.074.95.2 1.382L1.28 13.556C.489 12.227 0 10.666 0 9s.489-3.227 1.28-4.556l2.548.438.626 2.736c-.126.433-.2.897-.2 1.382z"
          fill="#FFDA2D"
        />
        <Path
          d="M18 9c0 2.742-1.27 5.2-3.21 6.845l-3.006-3.006a4.667 4.667 0 001.466-1.73H9a.522.522 0 01-.527-.527V7.418c0-.295.232-.527.527-.527h8.325c.253 0 .475.179.517.432C17.947 7.871 18 8.441 18 9z"
          fill="#4086F4"
        />
        <Path
          d="M13.25 11.11a4.667 4.667 0 01-1.466 1.73l3.006 3.005C16.73 14.2 18 11.742 18 9a8.94 8.94 0 00-.158-1.677.521.521 0 00-.517-.432H9v4.218h4.25z"
          fill="#4175DF"
        />
        <Path
          d="M14.938 2.514a.532.532 0 01-.148.39L12.533 5.15a.516.516 0 01-.685.053A4.718 4.718 0 009 4.253c-2.13 0-3.945 1.425-4.546 3.365L1.28 4.444C2.84 1.807 5.72 0 9 0c2.099 0 4.145.773 5.748 2.123.116.095.18.243.19.39z"
          fill="#FF641A"
        />
        <Path
          d="M11.848 5.203c.21.158.506.137.685-.053l2.257-2.246a.532.532 0 00.148-.39.555.555 0 00-.19-.39C13.145.773 11.098 0 9 0v4.254c1.034 0 2.014.327 2.848.95z"
          fill="#F03800"
        />
      </G>
    </Svg>
  )
}

export default GoogleIcon