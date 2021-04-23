import React from 'react';
import {View, Text, TouchableOpacity, Touchable, Animated} from 'react-native';
import Icon from 'react-native-ionicons';

type PropsType = {
  isSelected: Boolean,
  color: String,
  title: String,
  icon: String,
  onPressItem: void,
};

export default class SliderItem extends React.Component<PropsType> {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(130),
      marginTop: new Animated.Value(0),
      opacity: new Animated.Value(0.6),
    };
  }

  onPressItem = () => {
    const {onPressItem, title} = this.props;
    if (onPressItem) {
      onPressItem(title);
    }
  };

  render() {
    const {color, title, icon} = this.props;
    const {isSelected} = this.props;
    if (isSelected) {
      Animated.parallel([
        Animated.timing(this.state.height, {
          toValue: 200,
          duration: 500,
        }),
        Animated.timing(this.state.marginTop, {
          toValue: 0,
          duration: 500,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(this.state.height, {
          toValue: 130,
          duration: 500,
        }),
        Animated.timing(this.state.marginTop, {
          toValue: 30,
          duration: 500,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0.6,
          duration: 500,
        }),
      ]).start();
    }
    return (
      <Animated.View
        style={{
          maxHeight: 200,
          height: this.state.height,
          width: 120,
          margin: 10,
          justifyContent: 'flex-start',
          marginTop: this.state.marginTop,
          marginBottom: 0,
          padding: 0,
          opacity: this.state.opacity,
        }}>
        <TouchableOpacity
          onPress={this.onPressItem}
          style={{
            flex: 1,
            backgroundColor: color,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            borderRadius: 14,
            padding: 10,
            shadowColor: color,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1,
          }}>
          <Icon color={'white'} name={icon} />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            {title}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
