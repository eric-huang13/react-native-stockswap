import React, { PureComponent } from 'react'
import { StyleSheet, View,Text } from 'react-native'
import TextTicker from 'react-native-text-ticker'
import {connect} from 'react-redux';


export class StockTicker extends PureComponent {
  render(){
    const {gainers} = this.props;

    return(
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 24 }}
          scrollSpeed={4000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
          animationType="scroll"
        >
          {gainers.map((item) => {
    return (
      
    <><Text style={styles.marqueeSymbol}> {item.symbol} </Text><Text style={styles.marqueePrice}>{item.price} </Text></>
     
    );
  })}
         </TextTicker>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
  };
};

export default connect(mapStateToProps)(StockTicker);


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle:{
    color:"yellow"
},
marqueeSymbol:{
  color:"green",
  fontSize:20,
  fontWeight:"bold",
    },
    marqueePrice:{
      color:"green",
      fontSize:12,
  
  
    }
});
