import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './redux_api_asynch/App';

export default class DemoRedux2 extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('QuanDemo', () => DemoRedux2);












// // import React, { Component } from 'react';
// // import { AppRegistry } from 'react-native';
// // import { createStore } from 'redux';
// // import { Provider } from 'react-redux';
// // import App from './khoapham1/App';

// // const defaultState1 = { value1: 0, highlight1: false };

// // const reducer = (state1 = defaultState1, action) => {
// //   // Do mình có 2 cái state: value1 và highlight1
// //   // Nên mình phải return ra đủ 2 cái state
// //   // Mặc dù action chỉ có mục đích đổi 1 state thôi, nhưng vẫn phải return 2 cái.
// //   if (action.type === 'UP') return { value1: state1.value1 + 1, highlight1: state1.highlight1 };
// //   if (action.type === 'DOWN') return { value1: state1.value1 - 1, highlight1: state1.highlight1 };
// //   if (action.type === 'CHANGE_COLOR') return { value1: state1.value1, highlight1: !state1.highlight1 }
// //   return state1;
// // };

// // const store1 = createStore(reducer);

// // export default class DemoRedux extends Component {
// //   render() {
// //     return (
// //       // Đây là bước gắn redux vào App
// //       // Mình sẽ dùng Provider bao bên ngoài của App
// //       <Provider store={store1}>
// //         <App />
// //       </Provider>
// //     );
// //   }
// // }

// // AppRegistry.registerComponent('QuanDemo', () => DemoRedux);



// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   View
// } from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import ComA from './khoapham1/components/ComA';

// const defaultState1 = { giaTri: true};

// const reducer = (reduxState = defaultState1, action) => {
//   if (action.type === 'DOI_MAU_CHU') return { giaTri: !reduxState.giaTri};
//   return reduxState;
// };

// const store1 = createStore(reducer);

// export default class DemoRedux extends Component {
//   render() {
//     return (
//       // Đây là bước gắn redux vào App
//       // Mình sẽ dùng Provider bao bên ngoài của App
//       <Provider store={store1}>
//         <View style={styles.container}>
//           <ComA />
//         </View>
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('QuanDemo', () => DemoRedux);