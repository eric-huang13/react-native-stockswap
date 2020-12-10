import {StyleSheet} from 'react-native';

export const companyBoxStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    // borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    paddingBottom: 12.5,
    width: '98%',
    alignSelf: 'center',
    // alignItems:"flex-start"
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 18,
    // marginLeft: 14,
    marginLeft: 1,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: 3,
    // borderWidth: 1,
    borderColor: 'rgb(58, 117, 167)',
    // backgroundColor: 'rgb(58, 117, 167)',
    borderRadius: 15,
    height: 130,
    width: 125,
    flexDirection: 'column',
    padding: 3,
    justifyContent: 'space-evenly',
  },
  title: {
    // alignSelf: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    // marginTop: 3,
    // color: 'rgb(246, 252, 247)',
    // marginBottom: 20,
    // textAlign: 'center',
    color: 'grey',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: 2,
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(8, 11, 9)',
    // marginLeft: 8,
    // marginBottom: -7,
  },
  percentage: {
    // fontWeight: 'bold',
    fontSize: 14,
    // color: 'rgb(8, 11, 9)',
    color: 'grey',
  },
  price: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: 'rgb(8, 11, 9)',
  },
});
