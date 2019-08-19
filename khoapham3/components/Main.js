import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWordList() {
        // Cách viết bên dưới để khai báo là mình sẽ lấy ra được biến:
        //      "myFilter" từ this.props
        //      "listWords" từ this.props
        // Mà this.props ở đây đã liên kết với Redux
        const { myFilter, listWords } = this.props;
        
        if (myFilter === 'MEMORIZED') return listWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return listWords.filter(e => !e.memorized);
        return listWords;
    }
    render() {
        return (
            <View style={{ backgroundColor: 'darkgrey', flex: 1, 
            alignSelf: 'stretch', 
            justifyContent: 'center',
            marginTop:30 }}>
                <Header />
                <View style={{ flex: 10 }}>
                    { this.props.myIsAdding ? <Form /> : null }
                    <FlatList 
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}


function mapStateToProps(state) {
    return { 
        myFilter: state.filterStatus,
        listWords: state.arrWords,
        myIsAdding: state.isAdding 
    };
}

export default connect(mapStateToProps)(Main);
