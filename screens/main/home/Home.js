import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import Slider from '../../../componnents/slider/Slider';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/constants';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'Hiphop', color: '#E0BBE4', isSelected: true},
        {title: 'Ambient', color: '#957DAD', isSelected: false},
        {title: 'Relax', color: '#D291BC', isSelected: false},
        {title: 'Chill', color: '#FEC8D8', isSelected: false},
        {title: 'Flex', color: '#FFDFD3', isSelected: false},
      ],
    };
  }

  onPressItem = title => {
    const newState = this.state.data.map((category, index) => {
      category.isSelected = category.title === title;
      return category;
    });

    this.setState({data: newState});
  };

  render() {
    const title = this.state.data.filter(
      (value, index) => value.isSelected === true,
    )[0];
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View
          style={{
            width: SCREEN_WIDTH,
            paddingTop: SCREEN_HEIGHT * 0.15,
            padding: 20,
          }}>
          <Text style={{fontSize: 34, fontWeight: 'bold'}}>Tanttran</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Good Morning</Text>
        </View>
        <View style={{height: 200}}>
          <Slider data={this.state.data} onPressItem={this.onPressItem} />
        </View>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
            width: SCREEN_WIDTH,
          }}>
          {title.title}
        </Text>
      </SafeAreaView>
    );
  }
}
