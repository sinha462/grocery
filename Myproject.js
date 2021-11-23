import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
];

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={[styles.item, {backgroundColor: generateColor()}]}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
          
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default App;

// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';

// const MyClass = () => {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   const footer = () => {
//     return (
//       <View style={styles.headerStyle}>
//         <Text style={styles.titleStyle}>This is the footer</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         keyExtractor={(item) => item.id.toString()}
//         data={data}
//         ListFooterComponent={footer}
//         renderItem={({item}) => <Text>{item.title}</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonView: {
//     flexDirection: 'row',
//   },
//   headerStyle: {
//     flex: 1,
//     height: 40,
//     width: '100%',
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleStyle: {
//     color: 'white',
//   },
// });

// export default MyClass;