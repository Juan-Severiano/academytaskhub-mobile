import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default props => (
    <View style={style.card}>
      <View style={style.cardHeader}>
        <Text style={style.cardText}>Titulo da tarefa</Text>
      <Icon name='circle' size={25} color='#FFDE59' />
      </View>
      <Text style={style.cardDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias excepturi accusantium facere, natus voluptas reiciendis rem consequuntur perspiciatis maiores at, ullam pariatur quaerat. Incidunt in mollitia alias beatae eligendi?
      </Text>
      <View style={style.cardInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='book' color='#000' />
          <Text style={(style.cardDescription, style.cardInfoText)}>Disciplina</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='person' color='#000' />
          <Text style={(style.cardDescription, style.cardInfoText)}>Professor</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='calendar-outline' color='#000' size={20} />
        <Text style={(style.cardDescription, style.cardInfoText)}>31 de Julho de 2023 às 7h00</Text>
      </View>
    </View>
)

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.2,
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 20
  },
  cardText: {
    fontSize: 30,
    color: '#000'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 15,
    color: '#000',
    margin: 5,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardInfoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    paddingLeft: 5,
  }
})