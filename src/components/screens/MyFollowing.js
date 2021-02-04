import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import SearchInput from '../../icons/SearchInput';
import {connect} from 'react-redux';
import MyFollowingBox from './MyFollowingBox'


export class MyFollowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

 
  handleChange = (text) => {
    this.setState({input: text});
  };
   accountId = this.props.userAccount.id

   navigationByCondition = item => {
    const {navigation} = this.props;
    if (item.id === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: item.id},
      })
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: item.id}
      })
    }
  };

  render() {
    const {input} = this.state;
    const {users, userAccount} = this.props;

    const accountId = userAccount.id

    //will get actual follower data when backend hooked up
    //just using all people for styling purposes
    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );
   
    return (
      <SafeAreaView style={style.mainContainer}>
     
          <View style={style.searchInputContainer}>
            <View
              style={style.searchInputIconContainer}>
              <SearchInput />
            </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
          <FlatList
            style={style.listContainer}
            data={filteredUsers}
            renderItem={({item, index}) => (
                <TouchableOpacity
                key={item.id}
                onPress={()=>this.navigationByCondition(item)}>
                <MyFollowingBox item={item} index={index}/>
              </TouchableOpacity>
            )}
          />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
    userAccount: state.user.userFakeData,
  };
};

export default connect(mapStateToProps)(MyFollowing);

const style = StyleSheet.create({
  mainContainer: { 
    backgroundColor: '#2a334a',
    flex:1,
  },
  searchInputContainer: {
    marginBottom: 15,
   
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 15,
    height: 36,
    fontFamily: 'Montserrat-Italic',
    paddingVertical: 0,
  },
  searchInputIconContainer:{
    position: 'absolute',
    zIndex: 1,
    left: 14,
    top: 10,
  },
listContainer:{

},
});
