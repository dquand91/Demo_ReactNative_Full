import React, { Component } from 'react';
import { AppRegistry, 
    FlatList, 
    StyleSheet, 
    Text, 
    View, Image, Alert, 
    Platform, TouchableHighlight,
    RefreshControl } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

import {getDataFromServer123} from '../networking/Server'

class MyFlatListItem extends Component {
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection:'column',                                
                }}>
                <View style={{
                    flex: 1,
                    flexDirection:'row',             
                    backgroundColor: this.props.itemList.color
                }}>            
                    <View style={{
                        flex: 1,
                        flexDirection:'column',   
                        height: 100                 
                        }}>            
                            <Text style={styles.flatListItem}>{this.props.itemList.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.itemList.year}</Text>
                    </View>              
                </View>

                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class QuanFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
            listDataToShow: []
        });
    }
    componentDidMount() {
        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
        console.log("componentDidMount");
        this.refreshDataFromServer123();
    }
    refreshDataFromServer123 = () => {
        console.log("refreshDataFromServer123")
        // To show refresh when getting data
        this.setState({ refreshing: true });

        // Xử lý callback trả về từ Async
        getDataFromServer123().then((listDataFromServer)=>{
            // get API OK
            console.log("refreshDataFromServer123 ===> OK");
            this.setState({listDataToShow: listDataFromServer});
            this.setState({refreshing: false})
        }).catch((error) => {
            // get API NG
            console.log("refreshDataFromServer123 >>>> NG");
            this.setState({listDataToShow: []});
            this.setState({refreshing: falase})
        });
    }
    onRefresh = () => {
        console.log("onRefresh");
        this.refreshDataFromServer123();
    }

    render(){
        return(
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <FlatList
                    ref={"flatList"}
                    data={this.state.listDataToShow}
                    renderItem={({ item, index }) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            // Khởi tạo Item trong list
                            <MyFlatListItem 
                                itemList={item} 
                                indexList={index}
                                parentFlatList={this}>

                            </MyFlatListItem>);
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}       
                            onRefresh={this.onRefresh}
                        />
                    }
                >
                </FlatList>
            </View>
        );
    }
}