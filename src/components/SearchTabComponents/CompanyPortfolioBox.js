import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {moderateScale, scale} from '../../util/responsiveFont';
import axios from 'axios';

export class CompanyPortfolioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: [],
      latestError: false,
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${this.props.symbol}/quote/latest`,
      )
      .then((response) => {
        this.setState({
          latest: response.data.result.quote,
        });
      })
      .catch((error) => {
         this.setState({latestError: true});
      });
  }

  render() {
    const {item, category} = this.props;
    const {width, height} = Dimensions.get('window');
    const symbol = this.props.symbol;
    const stockObject = this.props.tickersAll[symbol];

    return (
      <SafeAreaView>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#2C3957', '#5B449B']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#B8A0FF'}}>
                {this.props.symbol}
              </Text>
              {stockObject ? (
                <Text style={style.title}>
                  {stockObject.name.length < 15
                    ? `${stockObject.name}`
                    : `${stockObject.name.substring(0, 14)}...`}
                </Text>
              ) : null}
            </View>
            <View style={style.bottomDetails}>
              <Text style={style.price}>${item.closePrice}</Text>
              <Text style={{...style.percentage, color: '#B8A0FF'}}>
                {this.state.latest.close}%
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickersAll: state.company.tickersAll,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPortfolioBox);

const style = StyleSheet.create({
  linearGradient: {
    alignSelf: 'center',
    marginTop: moderateScale(3),
    borderRadius: moderateScale(12),
    height: Dimensions.get('window').height / 3 - 108,
    width: Dimensions.get('window').width / 3 - 10,
    //      height: 120,
    //      width: 127,
    height: scale(120),
    width: scale(127),

    flexDirection: 'column',
    padding: moderateScale(3),
    paddingTop: 0,
    justifyContent: 'space-around',
    marginLeft: moderateScale(4),
    marginRight: moderateScale(4),
  },
  listContainer: {
    borderRadius: moderateScale(15),
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: moderateScale(4),
    paddingTop: 0,
    justifyContent: 'space-evenly',
  },
  topDetails: {
    marginTop: moderateScale(-4),
  },
  bottomDetails: {},
  title: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
    color: '#b3b3b3',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: moderateScale(2),
  },
  symbol: {
    fontSize: moderateScale(19),
    color: 'rgb(8, 11, 9)',
    fontFamily: 'Montserrat-Bold',
  },
  percentage: {
    fontSize: moderateScale(13),
    color: 'grey',
    fontFamily: 'Montserrat-SemiBold',
  },
  price: {
    fontSize: moderateScale(19),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
});
