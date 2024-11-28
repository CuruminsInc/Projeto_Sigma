import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import useSign_up from './sign_up.vm';

export default function Sign_Up() {
    const {password,setPassword,secureTextEntry,setSecureTextEntry} = useSign_up()

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', height: '90%', width: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 140 }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 40 }}>Cadastro</Text>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 160, alignItems: 'center' }}>
                    <TextInput 
                        placeholder="Nome do interno" 
                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }} 
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}>
                        <TextInput
                            placeholder="Senha"
                            style={{ flex: 1, padding: 10 }}
                            secureTextEntry={secureTextEntry}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <MaterialIcons name={secureTextEntry===true?'blur-off':'blur-on'} color="black" size={25} style={{marginRight:5}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}>
                        <TextInput
                            placeholder="Confirmar Senha"
                            style={{ flex: 1, padding: 10 }}
                            secureTextEntry={secureTextEntry}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <MaterialIcons name={secureTextEntry===true?'blur-off':'blur-on'} color="black" size={25} style={{marginRight:5}} />
                        </TouchableOpacity>
                    </View>
                </View>
                

                <View>
                    <TouchableOpacity onPress={() => console.log('Sim')}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#2EC7C0', borderWidth: 1, borderColor: 'black', justifyContent: 'center', borderRadius: 20, marginTop: 25 }}>
                            <Text style={{ alignSelf: 'center' }}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
