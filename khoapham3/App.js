import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

//defaultState

const defaultState = {
    arrWords: [
        { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
        { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
        { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
        { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
        { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
        { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
        { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
        { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
        { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
        { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
        { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
        { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
        { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
        { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
    ],
    filterStatus: 'SHOW_ALL',
    isAdding: false
};

//reducer -> tien doan action
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FILTER_SHOW_ALL':
            // ...state ở đây là giữ nguyên các state còn lại, chỉ thay đổi state "filterStatus" thôi
            // Có 3 cái nút Filter: SHOW_ALL, MEMORIZED, NEED_PRACTICE
            // Mỗi khi bấm 1 nút thì state "filterStatus" sẽ được set lại.
            return { ...state, filterStatus: 'SHOW_ALL' };
        case 'FILTER_MEMORIZED':
            return { ...state, filterStatus: 'MEMORIZED' };
        case 'FILTER_NEED_PRACTICE':
            return { ...state, filterStatus: 'NEED_PRACTICE' };
        case 'TOGGLE_MEMORIZED': return {
            ...state,
            arrWords: state.arrWords.map(e => {
                if (e.id !== action.id) return e;
                return { ...e, memorized: !e.memorized };
            })
        };
        case 'TOGGLE_SHOW': return {
            ...state,
            arrWords: state.arrWords.map(e => {
                if (e.id !== action.id) return e;
                return { ...e, isShow: !e.isShow };
            })
        };
        case 'TOGGLE_IS_ADDING': return {
            ...state,
            isAdding: !state.isAdding
        };
        case 'ADD_WORD': return {
            ...state,
            // Do bên gọi dispatch đã truyền thêm en và vn vào
            // Nên ở đây gọi được action.en, action.vn 
            // hàm "concat" có nghĩa là mình sẽ thêm cái phần tử mới này vào trên cùng của mãng
            // nếu viết state.arrWords.concat({
                // id: state.arrWords.length + 1, 
                // en: action.en, 
                // vn: action.vn, 
                // memorized: false, 
                // isShow: false })
            // ===> Thì phần tử mới này sẽ được thêm vào dưới cùng của mãng
            arrWords: [{ 
                id: state.arrWords.length + 1, 
                en: action.en, 
                vn: action.vn, 
                memorized: false, 
                isShow: false 
            }].concat(state.arrWords)
        };
        default:
            break;
    }
    return state;
};

//tao ra store
const store = createStore(reducer);

//tich hop vao trong ung dung react - Provider -> 1 component - 1 props -> store
