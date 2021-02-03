import React from 'react'
import {
  View, 
} from "react-native";
import Svg, {Path, Defs, G, Rect} from 'react-native-svg'


const HomeTabActive = () => {
    return (
      <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:-7}}>
        <Svg
      width={27}
      height={27}
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.652 1.171a.633.633 0 01.87.004h0l9.275 8.805a.656.656 0 01.03.918.633.633 0 01-.904.03h0l-1.162-1.103v8.526a.646.646 0 01-.545.642l-.094.007h-4.798a.644.644 0 01-.64-.649h0v-4.089h-3.22v4.089c0 .358-.285.649-.639.649h0H4.05a.644.644 0 01-.64-.65h0V9.687l-1.337 1.246a.634.634 0 01-.34.165l-.092.006a.633.633 0 01-.471-.21.656.656 0 01.038-.917h0zm.43 1.363L4.687 8.493v9.209h3.498v-4.089c0-.359.286-.65.64-.65h4.498c.353 0 .64.291.64.65h0v4.089h3.518L17.48 8.61l-6.4-6.076z"
        fill="#8B64FF"
        fillRule="nonzero"
        stroke="#8B64FF"
      />
    </Svg>
    <Svg
      width={126}
      height={10}
      viewBox="2 12 140 28"
      xmlns="http://www.w3.org/2000/svg"
 
    >
      <Defs></Defs>
      <G transform="translate(30 30)" fill="none" fillRule="evenodd">
        <Rect fill="#8257FF" x={6} y={3} width={4} height={3} rx={1.5} />
        <Rect
          fill="#916BFF"
          filter="url(#prefix__a)"
          width={96}
          height={10}
          rx={2}
        />
      </G>
    </Svg>
    </View>
    )
}

export default HomeTabActive