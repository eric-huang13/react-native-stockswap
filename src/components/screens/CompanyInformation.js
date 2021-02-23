import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CompanyStockGraph from './CompanyStockGraph';
import CompanySymbolList from './CompanySymbolList'

export class CompanyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},
      ],
      percent: '1.22',
      range: [10, 15],
      timeFilter:'live',
      xDates:[],
      yPrices:[],
    };
  }


  //All logic needs to be handled before hand, either in backend or in action? Will change this when we actually have data coming in
  
  componentDidMount() {
    
        //X
        const xDates = this.props.route.params.item.dates.map(
          (item) => new Date(item * 1000),
        );
        //Y
        const yPrices = this.props.route.params.item.priceHistory;
        
    
        this.setState({
          xDates:xDates,
          yPrices:yPrices,
          });
    
  
  }
  
  componentDidUpdate(prevProps) {
    
    if (this.props.route.params.item.dates !== prevProps.route.params.item.dates) {
      this.setState({
        xDates:this.props.route.params.item.dates,
        yPrices:this.props.route.params.item.priceHistory,
        });
    }
   }
 

  render() {
    //X and Y
    //X
    // const xDates = this.props.route.params.item.dates.map(
    //   (item) => new Date(item * 1000),
    // );
    //Y
    const yPrices = this.state.yPrices;
    //X and Y data
    const xyData = this.state.xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });

    //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);

    //Info to display
    //Current stock price
    const currentPrice = this.state.yPrices[yPrices.length - 1];
    // Growth/Loss percentage
    const percentChange = (
      ((currentPrice - yPrices[yPrices.length - 7]) / yPrices[yPrices.length - 7]) *100).toFixed(2);

    // Growth/Loss percentage
    const percentChangeMonth = (
      ((currentPrice - yPrices[yPrices.length - 30]) / yPrices[yPrices.length - 30]) *
      100
    ).toFixed(2);

    //Range of highest and lowest numbers on graph, passed into graph component
    //Total range of stock prices
    const newrange = [Math.min(...yPrices), Math.max(...yPrices)];

   const newweek = yPrices.slice(yPrices.length - 7)
    //Week range of stock prices
    const weekRange = [
      Math.min(...newweek),
      Math.max(...newweek),
         ];

    //Numbers to display graph numbers, can also use use built in graph numbers instead
    //Graph high number
    const chartHigh = this.state.range[1];
    //Graph low number
    const chartLow = this.state.range[0];
    //High/Low difference
    const numberDifference = (chartHigh - chartLow) / 3;
    //Graph three quarter numbernumber
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(0);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(0);
// console.log(weekData, 'WEEKDATA')
    const {route} = this.props;
    const {graphData, percent, range} = this.state;
    return (
      <SafeAreaView style={style.mainContainer}> 
       <CompanySymbolList navigation={this.props.navigation} symbol={route.params.item.symbol} itemId={route.params.item.id}/>
        <ScrollView>
      

          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.symbol}>{route.params.item.symbol}</Text>
                <Text style={style.price}>${currentPrice}</Text>
              </View>
              <View style={style.titleView}>
                <Text style={style.title}>{route.params.item.title}</Text>
                <Text style={style.percentage}>({route.params.item.percentage})</Text>
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          <View style={style.graphContainer}>
            <CompanyStockGraph graphData={graphData} symbol={route.params.item.title} range={range} />
            <View style={style.graphNumbers}>
              <Text style={style.graphNumberText}>-{chartLow}</Text>
              <Text style={style.graphNumberText}>-{chartOneQuarter}</Text>
              <Text style={style.graphNumberText}>-{chartThreeQuarter}</Text>
              <Text style={style.graphNumberText}>-{chartHigh}</Text>
            </View>
          </View>
          <View style={style.stockButtonsContainer}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter:'live'
                })
              }>
              <Text
                style={
                  this.state.timeFilter ==='live'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({               
                  timeFilter:'day'
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'day'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: weekData,
                  percent: percentChange,
                  range: weekRange,
                  timeFilter:'week',
                })
              }>
              <Text
                style={
                  this.state.timeFilter==='week'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: monthData,
                  percent: percentChangeMonth,
                  range: newrange,
                  timeFilter:'month'
                })
              }>
              <Text
                style={
                  this.state.timeFilter==='month'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter:'3 months'
                })
              }>
              <Text
                style={
                  this.state.timeFilter==='3 months'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter:'year'
                })
              }>
              <Text
                style={
                  this.state.timeFilter==='year'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter:'all'
                })
              }>
              <Text
                style={
                  this.state.timeFilter==='all'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                All
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={style.vitalsHeader}>STATS</Text>
          <View style={style.vitalsContainer}>
            <View style={style.vitalsLeftColumn}>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Open:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>High:</Text>
                <Text style={style.vitalDetailsData}>${newrange[1]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Low:</Text>
                <Text style={style.vitalDetailsData}>${newrange[0]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Volume:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Avg Vol:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
            </View>

            <View style={style.vitalsRightColumn}>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>P/E:</Text>
                <Text style={style.vitalDetailsData}>{currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>MKT Cap:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w High:</Text>
                <Text style={style.vitalDetailsData}>${newrange[1]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w Low:</Text>
                <Text style={style.vitalDetailsData}>${newrange[0]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Div/Yield:</Text>
                <Text style={style.vitalDetailsData}>{currentPrice}%</Text>
              </View>
            </View>
          </View>
          <View style={style.buyButtonContainer}>
            <Text style={style.buyButton}>Buy {route.params.item.title}</Text>
          </View>
          <View style={style.aboutSection}>
            <Text style={style.aboutHeader}>ABOUT</Text>
            <Text style={style.sectorData}>
              <Text style={style.sectorText}>Sector:</Text>{' '}
              {route.params.item.sector}
            </Text>
            <Text style={style.about}>{route.params.item.about}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CompanyInformation;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2a334a',
    flex:1,
  },
  aboveGraphContainer: {
    paddingHorizontal: 4,
    paddingVertical: 14,
    backgroundColor: '#324165',
    marginBottom: 20,
    // marginTop:50,
  },
  graphContainer: {
    // borderWidth:1,
    flexDirection: 'row',
  },
  graphNumbers: {
    // marginTop:170,
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    // alignItems:"flex-end",
    marginRight: 10,
    borderLeftWidth: 1,
    borderLeftColor: 'lightgrey',
  },
  graphNumberText: {
    color: 'lightgrey',
    // fontWeight: 'bold',
    fontSize: 14.5,
    fontFamily: 'Montserrat-Medium',

  },
  symbolView: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  titleView: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize:12,

  },
  percentage: {
    color: 'rgb(8, 177, 40)',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',

  },
  vitalsContainer: {
    marginTop: 6,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  vitalsHeader: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 14,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  vitalsLeftColumn: {
    flexDirection: 'column',
    
  },
  vitalsRightColumn: {
    flexDirection: 'column',
   
  },
  vitalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalDetails: {
    color: 'lightgrey',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
  },
  vitalDetailsData: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    marginLeft: 55,
  },
  stockButtonsContainer: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 9,
  },
  stockButtons: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  buyButtonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    borderRadius: 6,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  aboutSection: {
    marginTop: 36,
    marginBottom: 22,
    paddingLeft: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  aboutHeader: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 4,
  },
  sectorText: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  sectorData: {
    color: '#FFFFFF', 
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  about: {
    marginTop: 10,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});
