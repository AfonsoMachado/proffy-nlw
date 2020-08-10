import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  // Para exibir ou nao o formulario de filtro
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  // capturando todos os professoar que o usuario ja favoritou

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        // capturando a resposta com os favoritos, convertendo em objeto e salvando
        const favoritedTeachers = JSON.parse(response)
        // Array com os ids dos professores favoritados
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  // Disparada quando o usuario clica no botão filtrar
  async function handleFiltersSubmit() {
    loadFavorites()
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
    setIsFiltersVisible(false)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        // icone para liberar o formulario
        headerRight={(
          // no clique altera o estado  do icone do filtro, e torna o formulario de filtros visivel
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm} >
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              // texto digitado
              onChangeText={text => setSubject(text)}
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
            />

            {/* Dois inputs um ao lado do oturo */}
            {/* TODO Usar select para o dia da semana para não uasr um numero (picker) */}
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  // texto digitado
                  onChangeText={text => setWeekDay(text)}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#c1bccc'
                />
              </View>

              {/* TODO Campo de selecionar horário */}
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  // texto digitado
                  onChangeText={text => setTime(text)}
                  placeholder='Qual o horário?'
                  placeholderTextColor='#c1bccc'
                />
              </View>

            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      {/* TELA COM SCROLL */}
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {/* Exibindo a lista de professores */}
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )

        })}

      </ScrollView>

    </View>
  )

}

export default TeacherList;