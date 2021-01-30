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
import TriangleIcon from '../../icons/TriangleIcon';


export class ManagePortfolioCompany extends Component {
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
      live: true,
      day: false,
      week: false,
      month: false,
      threeMonth: false,
      year: false,
      all: false,
      shouldShow:false,
      dropDown:'Visible for all',
    };
  }
  dropDownSelect(pick) {
    this.setState({dropDown:pick, shouldShow:false});
  }

  render() {
    //X and Y
    //X
    const xDates = this.props.route.params.item.dates.map(
      (item) => new Date(item * 1000),
    );
    //Y
    const yPrices = this.props.route.params.item.priceHistory;
    //X and Y data
    const xyData = xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });

    //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);

    //Info to display
    //Current stock price
    const currentPrice = yPrices[yPrices.length - 1];
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

    const {route} = this.props;
    const {graphData, percent, range, shouldShow} = this.state;
    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.title}>{route.params.item.title}</Text>
              </View>
              <View style={style.titleView}>
                  <View style={style.priceSharesContainer}>
                <Text style={style.price}>{route.params.item.price}</Text>
                <Text style={style.shares}>Shares</Text>

                </View>
                <Text style={style.percentage}>({percent}%)</Text>
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          <View style={style.graphContainer}>
            <CompanyStockGraph graphData={graphData} range={range} />
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
                  live: true,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.live
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: true,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.day
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
                  live: false,
                  day: false,
                  week: true,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.week
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
                  live: false,
                  day: false,
                  week: false,
                  month: true,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.month
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: true,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.threeMonth
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: true,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.year
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: true,
                })
              }>
              <Text
                style={
                  this.state.all
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.accountPrivacyContainer}>
              <Text style={style.detailsText}>Account privacy</Text>

              <View style={style.dotsDropdownContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                  <View style={style.visibleButtonContainer}>
          <Text style={style.middleDetailsText}>{this.state.dropDown}</Text>
        <TriangleIcon style={style.icon}/>        
          </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  { this.state.dropDown == 'Visible for all' ?
                  <TouchableOpacity onPress={() => this.dropDownSelect('Private')}>
                  <Text style={style.dropDownText}>Private</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.dropDownSelect('Visible for all')}>
                  <Text style={style.dropDownText}>Visible for all</Text>
              </TouchableOpacity>
              
                  }          
                </View>
              ) : null}
            </View>         


              
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
            <Text style={style.buyButton}>Publish a trade</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ManagePortfolioCompany;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2a334a',
    paddingVertical:10,
  },
  aboveGraphContainer: {
    paddingVertical: 14,
    // backgroundColor: '#324165',
    marginBottom: 10,
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
  priceSharesContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily:'Montserrat-ExtraBold',
  },
  title: {
    color: 'lightgrey',
    fontSize: 16,
    fontFamily:'Montserrat-Regular',

  },
  shares: {
    color: 'lightgrey',
    fontSize: 12,
    marginLeft:10,
    fontFamily:'Montserrat-Regular',

  },
  percentage: {
    color: 'rgb(8, 177, 40)',
    fontSize: 12,
    fontFamily:'Montserrat-Medium',
  },
  accountPrivacyContainer: {
      paddingHorizontal:6,
  },
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsText: {
    color: 'lightgrey',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 2,
    marginTop:6,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 44,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height:35,
    position:'absolute',
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
    marginBottom:6,  
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor:'#2C3957',
  },
  icon:{
    marginRight:4,
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
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily:'Montserrat-Bold',
    marginTop: 28,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  vitalsLeftColumn: {
    flexDirection: 'column',
    color: 'black',
    fontSize: 31,
    fontWeight: 'bold',
    // justifyContent:'space-between'
  },
  vitalsRightColumn: {
    flexDirection: 'column',
    color: 'black',
    fontSize: 31,
    fontWeight: 'bold',
  },
  vitalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalDetails: {
    color: 'lightgrey',
    fontSize: 14,
    fontFamily:'Montserrat-Medium',
    marginBottom: 10,
  },
  vitalDetailsData: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily:'Montserrat-Bold',
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyButtonContainer: {
    marginTop: 24,
    alignItems: 'center',
    marginBottom:4,
  },
  buyButton: {
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    borderRadius: 6,
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontFamily:'Montserrat-SemiBold',

  },
  aboutSection: {
    marginTop: 36,
    marginBottom: 22,
    paddingLeft: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  aboutHeader: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectorText: {
    color: 'lightgrey',
    fontSize: 19,
  },
  sectorData: {
    color: 'white',
    fontSize: 19,
  },
  about: {
    marginTop: 10,
    color: 'white',
    fontSize: 17,
  },
});
