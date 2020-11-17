import { StyleSheet } from 'react-native'


export const companyBoxStyles = StyleSheet.create({
    container: {
      marginTop: 8,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',
      paddingBottom: 12,
      width: '98%',
      alignSelf: 'center',     
    },
    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',     
    },
    header: {
      fontSize: 17.5,
      marginLeft: 14,
      fontStyle: 'italic',
      color:'black'
    },
    listContainer: {
      alignSelf: 'center',
      marginTop: 6,
      borderWidth: 1,
      borderColor: 'rgb(58, 117, 167)',
      backgroundColor: 'rgb(58, 117, 167)',
      borderRadius: 15,
      height: 130,
      width: 125,
      flexDirection: 'column',
      padding: 3,      
    },
    title: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 18.5,
      marginTop: 3,
      color: 'rgb(246, 252, 247)',
      marginBottom: 20,
      textAlign:"center",  
    },
    detailsContainer:{
      position:"absolute",
      marginTop:"60%",         
    },
    symbol: {
      fontWeight: 'bold',
      fontSize: 22,
      color: 'rgb(8, 11, 9)',
      marginLeft:8,
      marginBottom:-7      
    },
    percentage: {
      fontWeight: 'bold',
      fontSize: 22,
      color: 'rgb(8, 11, 9)',
    },
  });
  