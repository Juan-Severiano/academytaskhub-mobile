import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { access } from '../commun'
import style from '../style'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  login = async () => {
    console.clear();
    const headers = {
      authorization: access,
      email: this.state.email,
      password: this.state.password
    };
    const config = {
      method: 'POST',
      headers: headers,
    };

    const response = await fetch(
      'https://academy-task-hub.onrender.com/auth/api/token',
      config
    );
    console.log('STATUS', response.status)
    console.log('STATUS', response)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder='email@aluno.ce.gov.br'
          style={styles.input}
          autoFocus={true}
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder='password'
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Entrar  <Ionicons name='send' size={20} color='#fff' /></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://academytaskhub.pythonanywhere.com/auth/register/')}
          style={styles.buttom} >
          <Text style={styles.buttomText}>Criar nova conta ...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    fontFamily: style.fontBold,
    marginBottom: 20,
    color: '#343a40',
    width: '80%',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#0068d9',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: style.fontDefault,
  },
  input: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
    fontFamily: style.fontDefault,
  },
})
