import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Controller from './ComponentController';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        // Do đã liên kết với redux và khai báo trong hàm "mapStateToProps"
        // Nên mình gọi được this.props.myHighlight
        const color = this.props.myHighlight ? 'blue' : 'red';
        return (
            <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                    {/* Do đã liên kết với redux và khai báo trong hàm "mapStateToProps"
                        , nên chỗ này mình gọi được this.props.myValue */}
                    <Text style={{ fontSize: 40, color }}>{ this.props.myValue }</Text>
                </View>
                <Controller />
            </View>
        );
    }
}

// Cái này sẽ chia sẻ quy định những state nào ở Component này cần lấy ra từ Store của Redux
function mapStateToProps(state) {
    // tham số truyền vào của hàm này là cái state lấy ra được từ redux
    // Nên mình sử dụng nó để gán cho các props của Component này
    return { 
        // myValue này sẽ lấy thuộc tính "value1" của bên state của Redux ra
        // tên myValue do mình đặt
        myValue: state.value1,
        myHighlight: state.highlight1 
    };
}

// Dùng connect() để gắn redux vào Component này
// Do connect() sẽ trả ra 1 function
export default connect(mapStateToProps)(App);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});

