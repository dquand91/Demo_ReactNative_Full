import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class ChangeColor extends Component {
    render() {
        const color = this.props.mHighlight ? 'yellow' : 'green';
        return (
            <TouchableOpacity onPress={
                () => this.props.dispatch({ type: 'CHANGE_COLOR' })
            }>
                <Text style={{ color }}>Change Color</Text>
            </TouchableOpacity>
        );
    }
}

export default connect(
    function(state) {
        // Cái này sẽ chia sẻ quy định những state nào ở Component này cần lấy ra từ Store của Redux
        // tham số truyền vào của hàm này là cái state lấy ra được từ redux
        // Nên mình sử dụng nó để gán cho các props của Component này
        // mHighlight này sẽ lấy thuộc tính "highlight1" của bên state của Redux ra
        // tên highlight1 do mình đặt
        return { mHighlight: state.highlight1 };
    }
)(ChangeColor);
// Đây là chuỗi component:
//index(Provider) -> App -> Controller -> ChangeColor