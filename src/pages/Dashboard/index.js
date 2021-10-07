import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Picker from '../../components/Picker';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <Picker />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite o valor a ser convertido</Text>
        <TextInput style={styles.input} placeholder="Ex: 150" keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.btnArea}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
    
      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertidos}>3 usd</Text>
        <Text style={[styles.valorConvertidos, {fontSize: 18, margin: 10}]} >Corresponde a</Text>
        <Text style={styles.valorConvertidos}>R$ 19.90</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40,
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 9,
    paddingBottom: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 2
  },
  titulo: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingBottom: 9,
    paddingTop: 9
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    height: 45,
    fontSize: 18,
    marginTop: 7,
    color: '#000',
  },
  btnArea: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8
  },
  valorConvertidos: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000',
  }
});
