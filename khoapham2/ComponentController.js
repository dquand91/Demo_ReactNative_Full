import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import ChangeColor from './ChangeColor';

class Controller extends Component {
    onDownKey() {
        // Gọi action DOWN đã định nghĩa trong REDUX
        this.props.dispatch({ type: 'DOWN' });
    }
    render() {
        return (
            <View style={styleController.controller}>
                <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                <ChangeColor />
                <View style={styleController.buttonContainer}>
                    <TouchableOpacity 
                        style={styleController.button} 
                        onPress={() => {
                            // Gọi action UP đã định nghĩa trong REDUX
                            this.props.dispatch({ type: 'UP' });
                        }}
                    >
                        <Text style={styleController.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styleController.button} 
                        onPress={this.onDownKey.bind(this)}>
                        <Text style={styleController.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//connect Controller với redux
// Sau đó để lấy giá trị từ redux ra chỉ cần dùng this.pros.dispatch({type:<tên action>})
// Ví dụ ở đây mình sẽ truyền hành động UP : this.props.dispatch({ type: 'UP' });
export default connect()(Controller);

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'darkgray',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});