import React from 'react';
import SliderItem from './SliderItem';
import {ScrollView, Text} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/constants';

export default class Slider extends React.Component {
  renderItems = () => {
    return this.props.data.map((category, index) => {
      return (
        <SliderItem
          onPressItem={this.props.onPressItem}
          title={category.title}
          color={category.color}
          isSelected={category.isSelected}
        />
      );
    });
  };

  render() {
    console.log('Rerender');
    return (
      <ScrollView
        style={{
          width: SCREEN_WIDTH,
          flexDirection: 'row',
        }}
        horizontal={true}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}
