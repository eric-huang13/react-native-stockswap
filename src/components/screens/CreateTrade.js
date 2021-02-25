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
  TouchableOpacity,
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';

export default class CreateTrade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      orderType: '',
      time: '',
      quantity: '',
      privacy: 'Visible for all',
      shouldShow: false,
    };
  }

  dropDownSelect(setting) {
    this.setState({privacy: setting, shouldShow: false});
  }
  orderTypeSelect(type) {
    this.setState({orderType: type});
  }
  handleInputChange = (inputName, inputValue) => {
    this.setState((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  render() {
    const {shouldShow} = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.mainContainer}>
          <KeyboardAvoidingView>
            <Text style={style.header}>Post a Trade</Text>
            <View style={style.uploadContainer}>
              <Text style={style.uploadText}>
                Upload trade screenshot for autofill
              </Text>
            </View>
            <View style={style.nameInputContainer}>
              <Text style={style.inputHeader}>Stock name</Text>
              <TextInput
                style={style.inputStyleBody}
                value={this.state.name}
                onChangeText={(value) => this.handleInputChange('name', value)}
                placeholder="Start typing stock name"
                placeholderTextColor="#9ea6b5"
                multiline={true}
                numberOfLines={4}
                ref={(input) => (this.body = input)}
              />
            </View>
            <View>
              <Text style={style.inputHeader}>Order Type</Text>
              <View style={style.buttonsContainer}>
                <TouchableOpacity onPress={() => this.orderTypeSelect('buy')}>
                  <Text style={style.buyButton}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.orderTypeSelect('sell')}>
                  <Text style={style.sellButton}>Sell</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.TimeContainer}>
              <Text style={style.inputHeader}>Time</Text>
              <TextInput
                style={style.inputStyleBody}
                value={this.state.time}
                onChangeText={(value) => this.handleInputChange('time', value)}
                placeholder="Time when you sell it"
                placeholderTextColor="#9ea6b5"
                multiline={true}
                numberOfLines={4}
                ref={(input) => (this.body = input)}
              />
            </View>
            <View style={style.quantityConatiner}>
              <Text style={style.inputHeader}>Quantity</Text>
              <TextInput
                style={style.inputStyleBody}
                value={this.state.orderType}
                onChangeText={(value) =>
                  this.handleInputChange('orderType', value)
                }
                placeholder="Number of shares"
                placeholderTextColor="#9ea6b5"
                multiline={true}
                numberOfLines={4}
                ref={(input) => (this.body = input)}
              />
            </View>
            <View>
              <Text style={style.inputHeader}>Stock privacy</Text>


                <View style={style.dotsDropdownContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      shouldShow: !shouldShow,
                    })
                  }>
                  <View style={style.visibleButtonContainer}>
                    <Text style={style.middleDetailsText}>
                      {this.state.privacy}
                    </Text>
                    <TriangleIcon style={style.icon} />
                  </View>
                </TouchableOpacity>
                {this.state.shouldShow ? (
                  <View style={style.dropdown}>
                    {this.state.privacy == 'Visible for all' ? 
                      <TouchableOpacity
                        onPress={() => this.dropDownSelect('Private')}>
                        <Text style={style.dropDownText}>Private</Text>
                      </TouchableOpacity>
                   : 
                      <TouchableOpacity
                        onPress={() => this.dropDownSelect('Visible for all')}>
                        <Text style={style.dropDownText}>Visible for all</Text>
                      </TouchableOpacity>

                  }
                </View>
                ) : null}
              </View>
            </View>
            <Text style={style.publishButton}>Publish</Text>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: 8,
    paddingHorizontal: 36,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  uploadContainer: {
    backgroundColor: '#46486e',
    height: 48,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  nameInputContainer: {
    marginTop: 20,
  },
  inputHeader: {
    fontSize: 12,
    color: '#babec8',
    marginBottom: 1,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 3,
  },
  inputStyleBody: {
    borderRadius: 6,
    backgroundColor: '#3e4d6c',
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 14,
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    height: 42,

      },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,

      },
  buyButton: {
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 141,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#536183',
  },
  sellButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 141,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 41,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height: 35,
    position: 'absolute',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 6,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: 4,
  },
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 303,
    borderRadius: 6,
    fontSize: 14,
    marginTop: 30,
    fontFamily: 'Montserrat-SemiBold',
  },
});
