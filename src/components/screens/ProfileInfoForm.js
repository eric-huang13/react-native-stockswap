import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProfileInfoForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          username: "",
          hashtag:"",
          bio:"",
          image:"",
          
        };

         handleNameChange = (text) => {
            this.setState({
              name: text,
            });
          };
          
         handleUsernameChange = (text) => {
            this.setState({
              username: text,
            });
          };

          handleHashtagChange = (text) => {
            this.setState({
              hashtag: text,
            });
          };
          handleBioChange = (text) => {
            this.setState({
              bio: text,
            });
          };
          handleImageChange = (text) => {
            this.setState({
              image: text,
            });
          };
          
      }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
