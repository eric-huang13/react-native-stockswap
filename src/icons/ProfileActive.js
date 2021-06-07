import React from "react"
import {
  View, StyleSheet,
} from "react-native";
import Svg, { Path } from "react-native-svg"
import {moderateScale, verticalScale, scale} from '../util/responsiveFont'


function ProfileActive() {
  return (
    <View style={style.outterContainer}>
    <Svg
      width={moderateScale(24)}
      height={moderateScale(24)}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M16.364 12.636a8.965 8.965 0 00-3.42-2.145 5.201 5.201 0 002.26-4.288A5.209 5.209 0 0010 1a5.209 5.209 0 00-5.203 5.203c0 1.777.896 3.349 2.26 4.288a8.965 8.965 0 00-3.42 2.145A8.941 8.941 0 001 19h1.406c0-4.187 3.407-7.594 7.594-7.594s7.594 3.407 7.594 7.594H19a8.941 8.941 0 00-2.636-6.364zM10 10a3.801 3.801 0 01-3.797-3.797A3.801 3.801 0 0110 2.406a3.801 3.801 0 013.797 3.797A3.801 3.801 0 0110 10z"
        fill="#8B64FF"
        fillRule="nonzero"
        stroke="#8B64FF"
      />
    </Svg>
    </View>
  )
}

export default ProfileActive

const style = StyleSheet.create({
  outterContainer:{
    borderBottomWidth:3, 
    borderBottomColor: '#855cff',
    paddingBottom: 1.8,
    width:40,
    paddingBottom:4,
    alignItems:'center',
    marginBottom:-8,
  },
})