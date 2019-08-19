import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class ComC extends Component {

    render() {
        return (
            <View style={{ width: 100, height: 100, 
                backgroundColor: this.props.mGiaTriNhanDuoc ? "green" : "blue", 
                justifyContent: 'center', 
                alignItems: 'center' }}>
            </View>
        );
    }
}

function lienKetSateVaComponent(inputState){
    return {
        mGiaTriNhanDuoc: inputState.giaTri
    }
}

export default connect(lienKetSateVaComponent)(ComC);