import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles';
import Article from './Article'


export class ArticleList extends Component {


    render() {
        const {articles} = this.props;
        return (
          <View >
          {articles.map((item) => {
            return (          
             <Article key={item.id} item={item} />
            );
          })}
        </View>
     
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
      articles: state.company.articles,
     
  
    };
  };
  

  export default connect(mapStateToProps)(ArticleList);
