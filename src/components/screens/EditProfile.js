import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import {EditUser} from '../../actions/user'
import LinearGradient from 'react-native-linear-gradient';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
      name: '',
      username: '',
      hashtag: '',
      bio: '',
      image: '',
    };
  }
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
  componentDidMount() {
    const {user, userAccount} = this.props;
    const userid = 15;
    // const selectedUser = users.filter((user) => user.id === userid);
    
      // selectedUser.map((user) => {
        this.setState({
          id:userAccount.id,
          name: userAccount.name,
          username: userAccount.username,
          hashtag: userAccount.hashtag,
          bio: userAccount.bio,
          image: userAccount.img,
        });
      // });
    
  
  }
  handleSubmit = (input) => {
    EditUserAccount(input)
  };
  render() {
    const {EditUserAccount} = this.props;
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',
          // '#485476',
          '#3d4b6e',
        ]}
        style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <SafeAreaView style={style.mainContainer}>
            <ScrollView>
              <Text style={style.header}>Fill Profile Info</Text>

              {this.state.image === '' ? (
                <View style={style.uploadPhotoContainer}></View>
              ) : (
                <Image style={style.image} source={{uri: this.state.image}} />
              )}

              <View style={style.topRow}>
                <View style={style.rowInputContainer}>
                  <Text style={style.inputHeader}>Name</Text>
                  <TextInput
                    style={style.inputStyle}
                    value={this.state.name}
                    onChangeText={(text) => this.handleNameChange(text)}
                    placeholder="Enter your name"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="next"
                    onSubmitEditing={() => this.username.focus()}
                    ref={(input) => (this.name = input)}
                  />
                </View>

                <View style={style.rowInputContainer}>
                  <Text style={style.inputHeader}>User name</Text>
                  <TextInput
                    style={style.inputStyle}
                    value={this.state.username}
                    onChangeText={(text) => this.handleUsernameChange(text)}
                    placeholder="@example"
                    placeholderTextColor="#FFFFFF"
                    style={style.inputStyle}
                    ref={(input) => (this.username = input)}
                    onSubmitEditing={() => this.image.focus()}
                  />
                </View>
              </View>
              <View style={style.bottomColumn}>
                <View style={style.imageContainer}>
                  <Text style={style.inputHeader}>Image</Text>
                  <TextInput
                    value={this.state.image}
                    // onChangeText={(text) => this.handleImageChange(text)}
                    placeholder="Image"
                    placeholderTextColor="#9ea6b5"
                    style={style.inputStyle}
                    ref={(input) => (this.image = input)}
                    onSubmitEditing={() => this.hashtag.focus()}
                  />
                </View>
                <View>
                  <Text style={style.inputHeader}>Hashtag (up to 3 tags)</Text>

                  <TextInput
                    style={style.inputStyle}
                    value={this.state.hashtag}
                    // onChangeText={(text) => this.handleHashtagChange(text)}
                    placeholder="Add hashtags which describe you"
                    placeholderTextColor="#9ea6b5"
                    returnKeyType="next"
                    ref={(input) => (this.hashtag = input)}
                    onSubmitEditing={() => this.bio.focus()}
                  />
                </View>
                <View>
                  <Text style={style.inputHeader}>Bio</Text>
                  <TextInput
                    style={style.inputStyleBio}
                    value={this.state.bio}
                    // onChangeText={(text) => this.handleBioChange(text)}
                    placeholder="Tell a bit about yourself"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.bio = input)}
                  />
                </View>

                <View style={style.buttonsContainer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.cancelButton}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => EditUserAccount(this.state)}>
                    <Text style={style.saveButton}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
    userAccount: state.user.userFakeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditUserAccount: (input) => dispatch(EditUser(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 30,
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    // backgroundColor: "#B8A0FF",
    borderRadius: 100,
    width: 135,
    height: 135,
    marginBottom: 30,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#515581',
    // backgroundColor: "#B8A0FF",
    borderRadius: 100,
    width: 135,
    height: 135,
    marginBottom: 30,
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputContainer: {
    width: 160,
  },
  inputHeader: {
    fontSize: 12,
    color: '#babec8',
    marginBottom: 1,
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 14,
    backgroundColor: '#3e4d6c',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  inputStyleBio: {
    borderRadius: 8,
    backgroundColor: '#3e4d6c',
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 14,
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },

  buttonsContainer: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 160,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: 1,
    borderColor: '#8b64ff',
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 160,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
});
