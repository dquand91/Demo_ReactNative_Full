import React from 'react';
import {StackNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Home from '../components/Home';
import User from '../components/User';
import Detail from '../components/Detail';
import Menu from '../components/Menu';

const myHomeScreenOptions = {
    title:'Trang Home'
}

export const HomeStack = createStackNavigator({
    ManHinh_Home:{
        screen: Home,
        // navigationOptions: để thiết lập các thuộc tính cho màn hình
        // Cách 1:
        // navigationOptions: myHomeScreenOptions

        // Cách 2:
        // navigationOptions: {
        //     title:'Trang Home'
        // }
    },
    ManHinh_Detail:{
        screen: Detail,
        navigationOptions:{
            title:'Trang Detail'
        }

    },
})

export const UserStack = createStackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions:{
            title:'Trang User'
        }
    }
})

// Để tạo ra 1 Bottom Navigator và tuỳ biến cái buttom navigator đó
// Và bên file App.js, mình phải thêm const 
//      AppContainer = createAppContainer(MyTabBar);
// Để React sẽ dùng cái MyTabBar này bao bên ngoài app của mình và hiển thị
export const MyTabBar = createBottomTabNavigator({
    // TabBar_Home: sẽ là tên tab hiển thị trên thanh Bottom Navigator
    TabBar_Home:{
        screen: HomeStack
    },
    // TabBar_User: sẽ là tên tab hiển thị trên thanh Bottom Navigator
    TabBar_User:{
        screen: UserStack
    }
},
{   
    tabBarOptions:{
        style:{
            backgroundColor:'darkslateblue'
        }
    }
}
)