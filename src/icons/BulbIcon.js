import * as React from "react"
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  Path,
  
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="4 1 10 300"
    >
      <Defs>
        <RadialGradient
          id="prefix__b"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={38.59}
          cx={44.34}
          gradientTransform="matrix(.02488 2.369 -1.6036 .01684 990.76 -598.63)"
          r={86.443}
        />
        <RadialGradient
          id="prefix__d"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={376.21}
          cx={402.59}
          gradientTransform="matrix(-.00433 1.1712 -1.6037 -.00593 1002 -107.85)"
          r={86.443}
        />
        <RadialGradient
          id="prefix__e"
          gradientUnits="userSpaceOnUse"
          cy={392.24}
          cx={386.35}
          gradientTransform="matrix(-.12413 5.1809 -4.978 -.11927 2378.8 -1576.8)"
          r={31.062}
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#ff0" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient id="prefix__a">
          <Stop offset={0} stopColor="#ff0" />
          <Stop offset={1} stopColor="#ff0" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__f"
          y2={604.36}
          gradientUnits="userSpaceOnUse"
          x2={383.86}
          y1={536.17}
          x1={359.61}
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#666" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Path
        d="M435.84 571.94a199.272 199.272 0 0121.306-73.867c5.632-10.936 12.27-21.332 17.88-32.279 5.61-10.948 10.226-22.619 11.406-34.864 1.344-13.944-1.906-28.186-8.5-40.546-6.6-12.35-16.45-22.85-27.93-30.87-14.299-9.988-31.208-16.204-48.57-17.857-29.344.846-57.829 16.967-73.659 41.689-8.885 13.875-13.902 30.446-12.77 46.883 1.168 16.966 8.647 32.816 16.811 47.735 6.59 12.041 13.735 23.836 18.903 36.551 7.286 17.926 10.486 37.498 9.286 56.811l75.837.628"
        stroke="#000"
        fill=""
        transform="translate(-314.34 -341.16)"
      />
      <Path
        d="M45.27 230.37l3.03 13.637 4.546 4.04-4.546 6.061 3.03 5.556-4.545 5.556 5.051 4.04-4.546 4.546 18.183 16.162 40.911-.505 9.597-6.566.505-7.07 4.04-5.557-2.525-7.07 4.546-1.516-4.04-7.576 3.03-4.546-4.041-5.05 3.535-13.132-75.76-1.01"
        stroke="#000"
        fill="#666"
      />
      <Path
        d="M64.97 290.98l5.556 8.081h4.546l4.545 2.526 6.566-.505 3.536-1.01 6.566-.506 8.586-9.596-39.901 1.01"
        stroke="#000"
      />
      <Path
        d="M435.33 571.94a199.272 199.272 0 0121.306-73.867c5.632-10.936 12.27-21.332 17.88-32.279 5.61-10.948 10.226-22.619 11.406-34.864 1.344-13.944-1.906-28.186-8.5-40.546s-16.444-22.861-27.929-30.883c-14.299-9.988-31.208-16.204-48.57-17.857-29.344.846-57.829 16.967-73.659 41.689-8.885 13.875-13.902 30.446-12.77 46.883 1.168 16.966 8.647 32.816 16.811 47.735 6.59 12.041 13.735 23.836 18.903 36.551 7.286 17.926 10.486 37.498 9.286 56.811l75.837.628"
        filter="url(#prefix__c)"
        fill="yellow"
        transform="translate(-314.34 -341.16)"
      />
      <Path
        d="M463.15 414.96c0 18.41-51.788 61.114-68.943 61.114s-72.478-41.694-72.478-60.104 44.95-63.849 61.872-66.67c19.689-3.283 48.864 3.935 65.906 18.539 18.753 16.071 13.644 37.915 13.644 47.121z"
        fill="url(#prefix__e)"
        transform="translate(-314.34 -341.16)"
      />
      <Path
        d="M422.5 601.83c-12.627 21.403-2.84 29.8-18.183 29.8s-66.502 35.957-34.345-35.355c3.153-6.993-9.012-17.141-3.986-22.168s40.256.955 47.927.955c15.342 0 16.382 13.555 8.587 26.769z"
        fill="url(#prefix__f)"
        transform="translate(-314.34 -341.16)"
      />
    
    </Svg>
  )
}

export default SvgComponent
