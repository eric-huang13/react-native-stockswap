import React from "react"
import Svg, { Defs, G, Path, Rect } from "react-native-svg"

function CreatePostInactive() {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Defs></Defs>
      <G filter="url(#prefix__a)" fill="none" fillRule="evenodd">
        <Path
          d="M14.778 8c.47 0 .852.382.852.853v5.683h5.684a.853.853 0 010 1.705H15.63v5.684a.853.853 0 01-1.705 0v-5.684H8.24a.853.853 0 010-1.705h5.684V8.853c0-.471.382-.853.853-.853z"
          stroke="#989EAC"
          fill="#989EAC"
          fillRule="nonzero"
        />
        <Rect
          stroke="#979797"
          strokeWidth={2}
          x={1}
          y={1}
          width={27.556}
          height={28}
          rx={6}
        />
      </G>
    </Svg>
  )
}

export default CreatePostInactive
