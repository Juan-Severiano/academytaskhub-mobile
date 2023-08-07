import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { access } from '../commun'
import axios from 'axios'

import style from '../style'

export default class Perfil extends Component {
  state = {
    username: '',
    email: ''
  }
  
  logout = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Navegar para a tela de login (rota inicial)
    });
  }

  conect = async () => {
    console.clear();

    const headers = {
      Authorization: `Bearer ${this.props.route.params.access}`,
    };

    const config = {
      headers: headers,
    };

    try {
      const response = await axios.get(
        'https://academy-task-hub.onrender.com/client/api/person/me',
        config
      );

      console.log('STATUS Profile', response.status);

      this.setState({
        username: response.data.user.username,
        email: response.data.user.email,
      });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  render() {
    const options = { email: 'sla@aluno.ce.gov.br', secure: true }
    return (
      <View style={styles.container} onReady={this.conect()}>
        <Ionicons name='person-circle-outline' style={styles.avatar} size={200} color='#000' />
        <Text style={styles.nickname}>{this.state.username}</Text>
        <Text style={styles.email}>{this.state.email}</Text>
        <TouchableOpacity onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nickname: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: style.fontDefault,
    alignItems: 'center',
  },
  email: {
    marginTop: 10,
    fontSize: 20, 
    alignItems: 'center',
    fontFamily: style.fontMedium
  },
  buttom: {
    marginTop: 100,
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: style.fontDefault,
  }
})
