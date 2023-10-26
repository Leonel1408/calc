import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const res = eval(input);
      setResult(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="0"
        onChangeText={(text) => setInput(text)}
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
          <Button title="C" onPress={clearInput} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
          <Button title="+" onPress={() => handleButtonPress('+')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
          <Button title="-" onPress={() => handleButtonPress('-')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="." onPress={() => handleButtonPress('.')} />
          <Button title="=" onPress={calculateResult} />
          <Button title="*" onPress={() => handleButtonPress('*')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="^" onPress={() => handleButtonPress('**')} />
          <Button title="√" onPress={() => handleButtonPress('Math.sqrt(')} />
          <Button title="/" onPress={() => handleButtonPress('/')} />
          <Button title="(" onPress={() => handleButtonPress('(')} />
          <Button title=")" onPress={() => handleButtonPress(')')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
  },
  buttons: {
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
