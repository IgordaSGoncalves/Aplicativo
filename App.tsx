import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

    const [novaVariavel, setNovaVariavel] = React.useState("");
    const [outraVariavel, setOutraVariavel] = React.useState("");
    const calculo = (parseFloat(novaVariavel) + parseFloat(outraVariavel)) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Número 1: </Text>
      <TextInput onChangeText={setNovaVariavel} style={styles.txtField}/>
      <Text style={styles.field}>Número 2: </Text>
      <TextInput onChangeText={setOutraVariavel} style={styles.txtField}/>
      {!isNaN(calculo)&&<Text style={styles.field}>{calculo}</Text>}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.field}>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  field:{
    color: 'white',
    fontSize: 31,
  },
  txtField:{
    backgroundColor: '#363636',
    width: 'auto',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#363636',
    width: 'auto',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});