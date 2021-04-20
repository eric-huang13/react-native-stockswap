import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {EditUser} from '../../actions/user';
import {connect} from 'react-redux';
import { moderateScale } from '../../util/responsiveFont';

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: '',
      image: '',
      body: '',
    };
  }
  toggleSwitch = (value) => {
    this.setState({enabled: value});
  };
  handleInputChange = (inputName, inputValue) => {
    this.setState((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };
  componentDidMount() {
    const {post, userAccount} = this.props.route.params;

    this.setState({
      image: post.img,
      body: post.body,
      enabled: '',
    });
  }

  render() {
    //for testing
    // const credentials = {
    //       name: this.state.body,
    //       description:this.state.image,
    //       };
    const {UserPost} = this.props;
    const postId = this.props.route.params.post.id;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}>
            <Text style={style.header}> Post a Publication </Text>
            <View style={style.uploadImageContainer}>
              <TextInput
                value={this.state.image}
                onChangeText={(value) => this.handleInputChange('image', value)}
                placeholder="Time when you sell it"
                placeholder="Upload cover image"
                placeholderTextColor="#FFFFFF"
                style={style.inputStyleImage}
                ref={(input) => (this.image = input)}
                onSubmitEditing={() => this.hashtag.focus()}
              />
            </View>
            <View style={style.postContainer}>
              <Text style={style.inputHeader}>Post</Text>
              <TextInput
                style={style.inputStyleBody}
                value={this.state.body}
                onChangeText={(value) => this.handleInputChange('body', value)}
                placeholder="Time when you sell it"
                placeholder="Enter post text"
                placeholderTextColor="#9ea6b5"
                multiline={true}
                numberOfLines={4}
                ref={(input) => (this.body = input)}
              />
            </View>

            <View style={style.notificationsContainer}>
              <Text style={style.middleDetailsText}>Turn off comments</Text>
              <Switch
                trackColor={{false: '#1A2542', true: '#B8A0FF'}}
                thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={this.toggleSwitch}
                value={this.state.enabled}
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              />
            </View>
            <View style={style.buttonsContainer}>
              <TouchableOpacity onPress={() => UserPost(this.state)}>
                <Text style={style.publishButton}>Publish</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate({
                    name: 'CreatePostPreview',
                    params: {data: this.state, edit: postId},
                  })
                }>
                <Text style={style.previewButton}>Preview</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // UserPost: (input) => dispatch(UserPost(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(26),
  },
  header: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  uploadImageContainer: {
    marginTop: moderateScale(20),
    backgroundColor: '#46486e',
    width: '100%',
    alignSelf: 'center',
    height: moderateScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(2),
  },
  uploadImageText: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleImage: {
    fontFamily: 'Montserrat-Regular',
    color: '#FFFFFF',
    width: moderateScale(200),
    textAlign: 'center',
  },
  postContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleBody: {
    borderRadius: moderateScale(6),
    backgroundColor: '#3e4d6c',
    marginBottom: moderateScale(12),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(14),
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    height: moderateScale(200),
  },
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  buttonsContainer: {
    marginTop: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  publishButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: moderateScale(1),
    borderColor: '#8b64ff',
  },
  previewButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: 160,
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
});
