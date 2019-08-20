import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Detail extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Detail</Text>
                <TouchableOpacity style={{backgroundColor:'gray'}}
                    onPress={()=>{ this.props.navigation.goBack()}}>
                    <Text style={{color:"white"}}>Back to reprevious</Text>
                </TouchableOpacity>
                {/* Cách lấy ra tham số được truyền vào navigation */}
                <Text>{this.props.navigation.state.params.thamso}</Text>
            </View>
        );
    }
}