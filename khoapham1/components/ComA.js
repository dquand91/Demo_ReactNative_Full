import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { connect } from 'react-redux';
import ComB from './ComB';

class ComA extends Component {
    state = {  }
    clickA(){
        this.props.dispatch({type:'DOI_MAU_CHU'})
    }
    render() {
        return (
            <View style={{ width: 200, height: 200, 
            backgroundColor: 'burlywood', justifyContent: 'center', 
            alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    this.clickA()
                }}>
                <Text>Click me</Text>
                </TouchableOpacity>
                <ComB />
            </View>
        );
    }
}
export default connect()(ComA);