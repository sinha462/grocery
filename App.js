import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, Button, TouchableOpacity} from 'react-native';

function App() {

  const [grocery, setGrocery] = useState([
    {"id": 1, "title":"Milk"},{"id": 2,"title":"Bread"},{"id": 3,"title":"Oranges"},{"id": 4,"title":"Pulse"},{"id": 5,"title":"Rice"},{"id": 6,"title":"Coffee"},
    {"id": 7,"title":"Tea"},{"id": 8,"title":"Sugar"},{"id": 9,"title":"Biscuits"},{"id": 10,"title":"Chocolates"}
  ])
  const [groceries, setGroceries] = useState([
    {"id": 1, "title":"Milk"},{"id": 2,"title":"Bread"},{"id": 3,"title":"Oranges"},{"id": 4,"title":"Pulse"},{"id": 5,"title":"Rice"},{"id": 6,"title":"Coffee"},
    {"id": 7,"title":"Tea"},{"id": 8,"title":"Sugar"},{"id": 9,"title":"Biscuits"},{"id": 10,"title":"Chocolates"}
  ]);

  const [search, setSearch] = useState('');
  const [newItem, setnewItem] = useState([]);


  const searchFilter = (text) =>{
    if (text) {
      const newData = groceries.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setGrocery(newData);
    setSearch(text);
    } else {
    setGrocery(groceries);
    setSearch(text);
    }  
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#c8c8c8'
      }}/>
    )
  }

  const data = ["Milk", "Bread", "Oranges", "Pulse", "Rice", "Coffee", "Tea", "Sugar", "Biscuits", "Chocolates"]
  const changeTextValue = () => {
    const len = data.length;
    grocery=setnewItem(data[Math.floor(Math.random()*len)]);
  } 

  const footer = () => {
    return (
      <View style={styles.item}>
        <Text>{newItem}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.searches}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Search"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}/>
          <StatusBar style="auto"/>
        </View>
        <Button title="+" onPress={changeTextValue}/>
        <FlatList
          style={styles.itemStyle}
          data={grocery}
          extraData={(data[Math.floor(Math.random()*data.length)])}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.item}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={footer}
          ItemSeparatorComponent={ItemSeparatorView}
          />  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  searches: {
    display: 'flex',
  },
  itemStyle: {
    padding: 20,
  },
  item: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
  }
});

export default App;

