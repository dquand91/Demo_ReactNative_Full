import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { fetchError, fetchSuccess, startFetchData, fetchDataThunk } from '../redux/actionCreators';
// Vì trong file actionCreators.js chứa 4 function trên, nên viết kiểu này OK.
// Cách để import nhiều function của cùng 1 file vào
import * as actionCreators from '../redux/actionCreators';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage() {
        const { error, isLoading, cityName, temp } = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho cua ban!';
        return `${cityName} hiện tại là ${temp}oC`;
    }

    getTempByCityName() {
        const { cityName } = this.state;
        // this.props.startFetchData();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName, temp))
        // .catch(() => this.props.fetchError());
        this.props.fetchDataThunk(cityName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>{this.getWeatherMessage()}</Text>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({ cityName: text })}
                />
                <TouchableOpacity style={styles.button} onPress={this.getTempByCityName.bind(this)}>
                    <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'lightblue', 
        flex: 1, 
        alignSelf: 'stretch', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    message: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        paddingHorizontal: 10,
        color: 'white'
    }
});

function mapStateToProps(state) {
    return { 
        cityName: state.cityName, 
        temp: state.temp, 
        error: state.error, 
        isLoading: state.isLoading 
    };
}

// export default connect(mapStateToProps, { startFetchData, fetchSuccess, fetchError, fetchDataThunk })(Main);
// Vì ở trên mình đã dùng "* as actionCreators" để import actionCreator vào, nên ở đây nó vẫn hiểu
export default connect(mapStateToProps, actionCreators)(Main);
