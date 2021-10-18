//React
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import SearchTab from '../components/SearchTabScreens/SearchTab';
import CompanyInformation from '../components/SearchTabScreens/CompanyInformation';
import CompanyCategory from '../components/SearchTabScreens/CompanyCategory';
import Profile from '../components/HomeTabScreens/Profile';
import UserCommentList from '../components/HomeTabScreens/UserCommentList';
import PostScreen from '../components/HomeTabScreens/PostScreen';
import UserPortfolioList from '../components/HomeTabScreens/UserPortfolioList';
import MyProfile from '../components/MyProfileTabScreens/MyProfile';
import MyProfilePosts from '../components/MyProfileTabScreens/MyProfilePosts';
import CompanySymbolList from '../components/SearchTabComponents/CompanySymbolList';
import LoggingOut from '../components/LoggedOutScreens/LoggingOutScreen';
import StockSearchInformation from '../components/SearchTabScreens/StockSearchInformation';
import Logo from '../icons/Logo.png';

//responsive scale
import {moderateScale} from '../util/responsiveFont';

const SearchStack = createStackNavigator();

export default class SearchStackNavigator extends Component {
  render() {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen
          name="SearchTab"
          component={SearchTab}
          options={{headerShown: false}}
        />
        <SearchStack.Screen
          name="LoggingOut"
          component={LoggingOut}
          options={{headerShown: false}}
        />
        <SearchStack.Screen
          name="CompanyInformation"
          component={CompanyInformation}
          options={({route}) => ({
            title: 
              <View style={style.stockHeader}>
                <Text style={style.headerText}>StockSwap</Text>
                <Image
                  style={style.logo}
                  source={require('../icons/Logo.png')}
                />
              </View>
            ,
            headerBackTitle: 'Search',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />
        <SearchStack.Screen
          name="StockSearchInformation"
          component={StockSearchInformation}
          options={({route}) => ({
            title: route.params.item.name,
            headerBackTitle: 'Search',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />

        <SearchStack.Screen
          name="CompanyCategory"
          component={CompanyCategory}
          options={({route}) => ({
            title: route.params.name,
            //Need to figure out way to make header height shown when transparent or add Linearcolors directly
            // headerTransparent: true,
            headerShown: true,
            headerBackTitle: 'Search',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />
        <SearchStack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <SearchStack.Screen
          name="PostScreen"
          component={PostScreen}
          options={({route}) => ({
            title: route.params.name,

            headerShown: true,

            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />

        <SearchStack.Screen
          name="Comments"
          component={UserCommentList}
          options={{
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <SearchStack.Screen
          name="UserPortfolioList"
          component={UserPortfolioList}
          options={{
            title: 'Portfolio',
            headerStyle: {
              backgroundColor: '#313c58',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <SearchStack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <SearchStack.Screen
          name="MyProfilePosts"
          component={MyProfilePosts}
          options={{
            title: 'All my posts',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <SearchStack.Screen
          name="CompanySymbolList"
          component={CompanySymbolList}
          options={{
            title: 'Companies',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
      </SearchStack.Navigator>
    );
  }
}

const style = StyleSheet.create({
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  logo: {
    height: 36,
    width: 36,
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
