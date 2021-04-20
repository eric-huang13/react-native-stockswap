import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import TopUsersPeople from './TopUsersPeople';

import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../util/responsiveFont'


export class TopUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      timeFilter: 'day',
      allPeople: true,
      following: false,
      trending: false,
    };
  }

  timeFilterSelect(time) {
    this.setState({timeFilter: time});
  }
  handleChange = (text) => {
    this.setState({input: text});
  };
  render() {
    const {timeFilter, input} = this.state;
    const {users} = this.props;

    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );

    return (
      <LinearGradient
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 1}}
        colors={[
          '#1d2842',
          '#1f2a45',
          '#222d47',
          '#242f4a',
          '#27324d',
          '#293450',
          '#2c3752',
          '#2e3955',
          '#313c58',
          '#333e5c',
          '#36415f',
          '#394463',
        ]}
        style={{flex: 1}}>
        <SafeAreaView>
          {/* <ScrollView> */}
          <LinearGradient
            start={{x: 0.1, y: 0.1}}
            end={{x: 1, y: 1}}
            colors={[
              '#2c3752',
              '#2e3955',
              '#313c58',
              '#333e5c',
              '#36415f',
              '#394463',
            ]}>
            <Text style={style.header}>Top Users</Text>

            <View style={style.tabSelectorContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    allPeople: true,
                    users: false,
                    following: false,
                  })
                }>
                <View
                  style={
                    this.state.allPeople
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.allPeople
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    All people
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    allPeople: false,
                    following: true,
                    trending: false,
                  })
                }>
                <View
                  style={
                    this.state.following
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.following
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    Following
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    allPeople: false,
                    following: false,
                    trending: true,
                  })
                }>
                <View
                  style={
                    this.state.trending
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.trending
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    Trending
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* //Most likey this will instead be determining which data gets passed into the TopUsersPeople component, unless for some reason we need 3 different components here. I will wait to mess with it until there's actual data coming from backend */}
          {this.state.allPeople ? (
            <TopUsersPeople navigation={this.props.navigation} />
          ) : this.state.following ? (
            <TopUsersPeople navigation={this.props.navigation} />
          ) : this.state.trending ? (
            <TopUsersPeople navigation={this.props.navigation} />
          ) : (
            <View>
              <Text>Search Screen</Text>
            </View>
          )}
          {/* </ScrollView> */}
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
  };
};

export default connect(mapStateToProps)(TopUsers);

const style = StyleSheet.create({
  searchInputContainer: {
    alignItems: 'center',
    padding: moderateScale(4.8),
    marginTop: moderateScale(0),
  },
  searchInput: {
    borderWidth: moderateScale(0.5),
    width: '90%',
    fontSize: moderateScale(17),
    fontStyle: 'italic',
    textAlign: 'left',
    padding: moderateScale(2.5),
    opacity: 0.8,
    marginBottom: moderateScale(20),
    paddingLeft: moderateScale(5),
  },
  header: {
    color: '#FFFFFF',
    fontSize: moderateScale(19),
    fontWeight: '700',
    marginVertical: moderateScale(8),
    textAlign: 'center',
  },
  tabSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: moderateScale(15),
    paddingBottom: moderateScale(2),
  },
  tabHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
  },
  activeTabHeaderView: {
    borderBottomWidth: moderateScale(3),
    borderBottomColor: '#855cff',
    paddingBottom: moderateScale(1.8),
  },
  activeTabHeader: {
    fontFamily: 'Montserrat-Bold',
    color: '#8257FF',
    textShadowColor: '#8257FF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 50,
    fontSize: moderateScale(14),
  },
});
