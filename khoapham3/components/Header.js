import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text />
                <Text>MY WORDS 123</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({ type: 'TOGGLE_IS_ADDING' })}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(Header);

const styles = StyleSheet.create({
    header: { 
        flex: 1, 
        backgroundColor: '#D9D9D9', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20 
    }
}); 
