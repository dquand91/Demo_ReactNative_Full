import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiUrlTest1 = 'https://reqres.in/api/unknown';

// Async tức là bất đồng bộ
// getDataFromServer123 sẽ chạy bất đồng bộ, và sẽ gọi api lấy data.
// await chỉ được dùng bên trong async function
// await là chạy từng cái một. Ở đây mình chạy fetch() xong, rồi chạy tiếp cái response.json()
// Vì Async xử lý bất đồng bộ, nên nó sẽ gọi api để get data rồi khi nào có kết quả mới return kết quả.
// KHi sử dụng hàm async thì phải dùng .then()
// Ví dụ:
//  getDataFromServer123().then((dataTraVeSauKhiAsyncChayXong)=>{
//     // get API OK
//  }).catch((error) => {
//     // get API NG
//  });
async function getDataFromServer123() {
    try {
        let response = await fetch(apiUrlTest1);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

//send post request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export {getDataFromServer123};
export {insertNewFoodToServer};
