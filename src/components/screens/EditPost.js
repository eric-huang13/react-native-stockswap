import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class EditPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          enabled:'',
          image:'',
          body:'',
        };
      }
      componentDidMount() {
        const {post, userAccount} = this.props.route.params;
   
            this.setState({               
                image:post.img,
                body:post.body,
                enabled:'',
            });          
            }

    render() {
        const {post, userAccount} = this.props.route.params;
        console.log(this.state, 'initial state in editPost') 
        return (
            <View>
                <Text> Edit post </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
