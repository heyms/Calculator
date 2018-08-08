'use strict';

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CalculatorActionCreators from '../actions/dispatchers';
import OutputScreen from '../components/outputScreen';
import History from '../components/history';
import Inputs from '../components/inputs';

class Calculator extends React.Component {
  render() {
    var {dispatch, calculations} = this.props;
    var boundActionCreators = bindActionCreators(CalculatorActionCreators, dispatch);
    return (
      <View style={styles.container}>
        <OutputScreen
          style={styles.outputScreen}
          calculations={calculations} />
        <History
          {...boundActionCreators}
          calculations={calculations}
          style={styles.history} />
          <View style ={{ height:1,flexDirection: 'row', backgroundColor: '#ededed'}}/> 
        <Inputs
          {...boundActionCreators}
          style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  outputScreen: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  history: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
});

const selector = state => ({
  calculations: state.calculations
})
export default connect(selector)(Calculator);
