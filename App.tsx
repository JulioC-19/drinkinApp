import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomTextInput} from './components/CustomTextInput';
import {CustomButton} from './components/CustomButton';

function App() {
  const [emailInput, onChangeEmailInput] = React.useState('');
  const [passInput, onChangePassInput] = React.useState('');
  const [isLoading, setLoading] = useState(true);

  const drinkingImage = './assets/drinking.png';

  const getUser = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.parentView}>
        <Image style={styles.imageStyle} source={require(drinkingImage)} />
        <Text style={styles.textStyle}>MyDrinkingPal</Text>
      </View>
      <CustomTextInput
        label={'Email'}
        isPassword={false}
        onChangeText={onChangeEmailInput}
        value={emailInput}
      />

      <CustomTextInput
        label={'Password'}
        isPassword={true}
        onChangeText={onChangePassInput}
        value={passInput}
      />
      <CustomButton buttonText={'SIGN IN'} />
      <View>
        <Text>Don't have an account?</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
  textStyle: {
    fontSize: 30,
  },
  parentView: {
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
