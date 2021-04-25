import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectElement} from '../../../actions/HomeActions';
import Slider from '../../../componnents/slider/Slider';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressItem = title => {
    const {actions} = this.props;
    actions.selectElement(title);
  };

  render() {
    const {data} = this.props;
    const title = data.filter((value, index) => value.isSelected === true)[0];

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
          <Slider data={data} onPressItem={this.onPressItem} />
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
const ActionCreators = Object.assign({}, selectElement);

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
