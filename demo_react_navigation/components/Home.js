import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

export default class Home extends Component {
    // Tạo biến static với tên navigationOptions để set title, màu,... cho page
    // navigationOptions: để thiết lập các thuộc tính cho màn hình
    static navigationOptions = ({navigation}) => {
        let myHeaderTitle = "Home title";
        let myHeaderTitleStyle = {color:'pink'};
        let headerRightButton = (
            <Button 
                containerStyle={{ margin: 5, padding: 10, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 15, color: 'white' }}
                onPress={() => {
                    // params.onSave();
                }}   
            >Save</Button>
        );
        let myHeaderBackTitle = 'Back';
        return {myHeaderTitle, myHeaderTitleStyle, headerRightButton, myHeaderBackTitle};
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Home Screen 123</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                    onPress={()=>{ 
                        this.props.navigation.navigate(
                            'ManHinh_Detail',
                            // Cách truyền tham số và navigation
                            {thamso: "Tôi từ trang Home đến"}
                            )
                        }}>
                    <Text>Click to go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}