import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };          
    }

    refreshFlatListItem123 = () => {
        // Gọi setState để yêu cầu React vẽ lại cái Item đã được cập nhật
        // numberOfRefresh chỉ để giả thôi, ko có ý nghĩa j cả
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });        
    }
    render() {   
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }              
            },          
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },      
            right: [
                { 
                    // nút Edit
                    onPress: () => {                            
                        // alert("Update");
                        this.props.itemProsParentFlatList123.refs.editModal123.showEditModal123(flatListData[this.props.index], this);
                    }, 
                    text: 'Edit', 
                    // type = primary nên cái nút edit này sẽ có màu xanh dương
                    type: 'primary' 
                },
                { 
                    // nút Delete
                    onPress: () => {    
                        const deletingRow = this.state.activeRowKey;          
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [                              
                              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'Yes', onPress: () => {        
                                flatListData.splice(this.props.index, 1); 
                                //Refresh FlatList ! 
                                this.props.itemProsParentFlatList123.refreshFlatList123(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          ); 
                    }, 
                    text: 'Delete', 
                    // type = delete => cái nút delete sẽ có màu đỏ
                    type: 'delete' 
                }
            ],  
            rowId: this.props.index, 
            sectionId: 1    
        };               
        return (  
            <Swipeout {...swipeSettings}>
                <View style={{
                flex: 1,
                flexDirection:'column',                                
                }}>            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                            backgroundColor: 'mediumseagreen'
                    }}>            
                        <Image 
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >

                        </Image>
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                height: 100                 
                            }}>            
                                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>              
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor:'white'                            
                    }}>
                
                    </View>
                </View>   
            </Swipeout>      
            
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

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        // Nếu không có dòng này, khi mình gọi this.prefs.addModal123 => REACT sẽ không hiểu
        // Nên mình phải gắn cái "_onPressAdd123" vào trong "BasicFlatList" để nó hiểu được.
        this._onPressAdd123 = this._onPressAdd123.bind(this);        
    }
    refreshFlatList123 = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd123 () {
        // alert("You add Item");
        // Để dùng được this.refs.addModal123 thì phải 
        //  dùng this._onPressAdd123 = this._onPressAdd123.bind(this) để gắn cái BasicFlatList vào.
        // Nếu ko có dòng này, thì "this" ở đây có nghĩa là cái nút "ADD" chứ ko phải cái class  BasicFlatList
        this.refs.addModal123.showAddModal123();
    }
    render() {
      return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            <View style={{
                backgroundColor: 'tomato', 
                flexDirection: 'row',
                justifyContent:'flex-end',                
                alignItems: 'center',
                height: 64}}>
                <TouchableHighlight 
                    style={{marginRight: 10}}
                    underlayColor='tomato'
                    onPress={this._onPressAdd123}
                    >
                <Image
                    style={{width: 35, height: 35}}
                    source={require('../icons/icons-add.png')}
                />
                </TouchableHighlight>
            </View>
            <FlatList 
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    // Tạo FlatListItem và:
                    // 1. tuyền vào item và index cho nó
                    // 2. Khởi tạo và gán pros "itemProsParentFlatList123" cho nó
                    // *** this ở đây là BasicFlatList
                    <FlatListItem item={item} index={index} itemProsParentFlatList123={this}>

                    </FlatListItem>);
                }}
                >

            </FlatList>

            <AddModal 
                // Tạo 1 cái AddModal và:
                // 1. Định danh cho nó là addModal123
                // 2. Khởi tạo, gán pros "parentFlatList123" cho nó.
                // *** this ở đây là BasicFlatList
                ref={'addModal123'} parentFlatList123={this} >

            </AddModal>

            <EditModal
            // Tạo 1 cái EditModal và:
                // 1. Định danh cho nó là editModal123
                ref={'editModal123'}
                >

            </EditModal>
        </View>
      );
    }
}