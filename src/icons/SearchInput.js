import React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"

function SearchInput() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Defs></Defs>
      <G
        transform="translate(-346 -529)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"
      >
        <Path
          d="M362.805 544.862l-5.114-5.109a5.97 5.97 0 001.32-3.753c0-3.314-2.689-6-6.005-6a6.003 6.003 0 00-6.006 6c0 3.314 2.689 6 6.006 6a5.983 5.983 0 003.74-1.306l5.115 5.11a.668.668 0 00.944-.942zM348.335 536a4.67 4.67 0 014.67-4.667 4.67 4.67 0 014.672 4.667 4.65 4.65 0 01-1.376 3.307s0 0 0 0 0 0 0 0a4.659 4.659 0 01-3.295 1.36 4.67 4.67 0 01-4.671-4.667z"
          stroke="#989EAC"
          fill="#989EAC"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

export default SearchInput
