import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CommentIcon(props) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.776 0H2.224C1.274 0 .5.773.5 1.724v9.195c0 .95.773 1.724 1.724 1.724h3.978l1.317 2.635c.23.459.587.722.981.722s.751-.263.98-.722l1.318-2.635h3.978c.95 0 1.724-.773 1.724-1.724V1.724C16.5.774 15.727 0 14.776 0zm.787 10.919a.787.787 0 01-.787.786h-4.268c-.177 0-.34.1-.419.26l-1.447 2.893a.57.57 0 01-.142.196.57.57 0 01-.142-.196L6.91 11.964a.469.469 0 00-.42-.259H2.225a.787.787 0 01-.787-.786V1.724c0-.434.353-.786.787-.786h12.552c.434 0 .787.352.787.786v9.195z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default CommentIcon
