import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

function TeacherList() {
  // Para exibir ou nao o formulario de filtro
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
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
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
            />

            {/* Dois inputs um ao lado do oturo */}
            {/* TODO Usar select para o dia da semana (picker) */}
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#c1bccc'
                />
              </View>

              {/* TODO Campo de selecionar horário */}
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual o horário?'
                  placeholderTextColor='#c1bccc'
                />
              </View>

            </View>

            <RectButton style={styles.submitButton}>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>

    </View>
  )

}

export default TeacherList;