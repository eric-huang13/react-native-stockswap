import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import SearchInput from '../../icons/SearchInput';
import {connect} from 'react-redux';
import UserBox from '../SearchTabComponents/UserBox';
import {fetchFake} from '../../actions/people'

import {moderateScale} from '../../util/responsiveFont';

export class TopUsersPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      timeFilter: 'day',
    };
  }
 componentDidMount() {
  this.props.fetchFake(this.props.page, this.props.offset)
}

 //fetches more data, increases page number by 1
  fetchMoreData = () => {
  if (!this.props.loading && this.props.loadMore){
  this.props.fetchFake(this.props.page, this.props.offset);
  console.log(this.props.page,'ran')
  }
};

  timeFilterSelect(time) {
    this.setState({timeFilter: time});
  }
  handleChange = (text) => {
    this.setState({input: text});
  };
  accountId = this.props.userAccount.id;

  navigationByCondition = (item) => {
    const {navigation} = this.props;
    if (item.id === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: item.id},
      });
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: item.id},
      });
    }
  };
 

  render() {
    console.log(this.props.loadMore,'ran')

    const {timeFilter, input} = this.state;
    const {users, userAccount} = this.props;
    const accountId = userAccount.id;

    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );

    return (
      <SafeAreaView style={style.mainContainer}>
          <FlatList

          ListHeaderComponent={
            <View>
          <View style={style.searchInputContainer}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 14,
                top: 10,
              }}>
              <SearchInput />
            </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
          <Text style={style.timeFilterHeader}>Time filter:</Text>
          <View style={style.timeFilterContainer}>
            <TouchableOpacity onPress={() => this.timeFilterSelect('day')}>
              <Text
                style={
                  timeFilter === 'day'
                    ? {...style.timeFilterButtons, color: '#8257FF'}
                    : {...style.timeFilterButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('week')}>
              <Text
                style={
                  timeFilter === 'week'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('month')}>
              <Text
                style={
                  timeFilter === 'month'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('3M')}>
              <Text
                style={
                  timeFilter === '3M'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('6M')}>
              <Text
                style={
                  timeFilter === '6M'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                6M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('1Y')}>
              <Text
                style={
                  timeFilter === '1Y'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('ALL')}>
              <Text
                style={
                  timeFilter === 'ALL'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                All
              </Text>
            </TouchableOpacity>
          </View>
          </View>
          }
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={filteredUsers}
           renderItem={({item, index}) => (
            <TouchableOpacity
            // key={item.id}
            onPress={() => this.navigationByCondition(item)}>
            <UserBox item={item} index={index} />
          </TouchableOpacity>
           )}  
           onEndReachedThreshold={0.1} 
           onEndReached={this.fetchMoreData}
        ListFooterComponent={
          <View style={style.footer}>
            {this.props.loading ? <Text style={style.loadingText}>LOADING...</Text> : null}
          </View>
        }                   
          />
          
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFake: (page, offset) => dispatch(fetchFake(page, offset)),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
    userAccount: state.user.userFakeData,
    loading:state.people.loading,
    page:state.people.page,
    loadMore:state.people.loadMore,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopUsersPeople);

const style = StyleSheet.create({
  fakeView: {
    flexDirection: "column",
    borderColor: "black",
    justifyContent: "space-between", 
  },
  fakeText: {
    marginVertical: 30,
    backgroundColor: "lightgray",
    textAlign: "center",
    color:'blue',
    fontSize:18,
  },
  loadingText:{
    color:'#8B64FF',
    textAlign:"center",
    fontSize:18,
  },
   mainContainer: {},
  searchInputContainer: {
    marginBottom: moderateScale(15),
  },
  searchInput: {
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(15),
    height: moderateScale(36),
    fontFamily: 'Montserrat-Italic',
    paddingVertical: moderateScale(0),
  },
  timeFilterHeader: {
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(18),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  timeFilterContainer: {
    marginTop: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: moderateScale(12),
    paddingBottom: moderateScale(9),
  },
  timeFilterButtons: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
  },
  footer:{
    height: 0, 
    marginBottom: 200,
  }
});
