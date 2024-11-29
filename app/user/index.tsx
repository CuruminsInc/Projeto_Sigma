import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, LogBox } from 'react-native';
import useUser from './user.vm';

LogBox.ignoreLogs(['ERROR: ...']);
LogBox.ignoreAllLogs();


export default function User() {

    const { currentSlide,
        setCurrentSlide,
        codeintern,
        setCodeIntern,
        codeclient,
        setCodeClient,
        nameclient,
        setNameClient,
        cpf,
        setCpfClient,
        cellphone,
        setCellPhone,
        region,
        setRegion,
        city,
        setCity,
        address,
        setAddress,
        goCar
    } = useUser()

    const FormSlide = (slideNumber: number) => {
        switch (slideNumber) {
            case 1:
                return (
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>Digite seu Código</Text>
                        <TextInput
                            placeholder="Código do interno"
                            value={codeintern}
                            onChangeText={setCodeIntern}
                            style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}>
                        </TextInput>


                        <TouchableOpacity onPress={() => setCurrentSlide(2)}>
                            <View
                                style={{
                                    width: 150,
                                    height: 50,
                                    backgroundColor: '#2EC7C0',
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    justifyContent: 'center',
                                    borderRadius: 20,
                                    marginTop: 25,
                                }}
                            >
                                <Text style={{ alignSelf: 'center' }}>Buscar código</Text> {/* Text inside Text component */}
                            </View>
                        </TouchableOpacity>

                    </View>
                );
            case 2:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Digite o Código do cliente
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                value={codeclient}
                                onChangeText={setCodeClient}
                                placeholder="Código do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                            />

                            <TouchableOpacity>
                                <View
                                    style={{
                                        width: 150,
                                        height: 50,
                                        backgroundColor: '#2EC7C0',
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        marginTop: 25,
                                    }}
                                >
                                    <Text style={{ alignSelf: 'center' }}>Buscar cliente</Text> {/* Text inside Text component */}
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 290 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 15, marginTop: 40 }}>
                                ou registre um novo cliente
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 180, alignItems: 'center' }}>
                            <TextInput
                                value={nameclient}
                                onChangeText={setNameClient}
                                placeholder="Nome do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                            />
                            <TextInput
                                value={cpf}
                                onChangeText={setCpfClient}
                                placeholder="CPF do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />
                            <TextInput
                                value={cellphone}
                                onChangeText={setCellPhone}
                                placeholder="Celular do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />
                            <TouchableOpacity onPress={() => setCurrentSlide(3)}>
                                <View
                                    style={{
                                        width: 150,
                                        height: 50,
                                        backgroundColor: '#2EC7C0',
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        marginTop: 30,
                                    }}
                                >
                                    <Text style={{ alignSelf: 'center' }}>Registre</Text> {/* Text inside Text component */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                );

            case 3:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Registre o endereço
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Digite seu Estado"
                                value={region}
                                onChangeText={setRegion}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Digite sua Cidade"
                                value={city}
                                onChangeText={setCity}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Digite seu Bairro"
                                value={address}
                                onChangeText={setAddress}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>

                                <TouchableOpacity onPress={() => setCurrentSlide(2)}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor: '#2EC7C0',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            justifyContent: 'center',
                                            borderRadius: 20,
                                            marginTop: 25,
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>Voltar</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setCurrentSlide(4)}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor: '#2EC7C0',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            justifyContent: 'center',
                                            borderRadius: 20,
                                            marginTop: 25,
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>Continue</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );

            case 4:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop:'35%' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 10 }}>
                                Termine o Registro
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Digite seu telefone residencial"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Digite sua renda mensal"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>

                                <TouchableOpacity onPress={() => setCurrentSlide(3)}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor: '#2EC7C0',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            justifyContent: 'center',
                                            borderRadius: 20,
                                            marginTop: 25,
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>Voltar</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={goCar}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor: '#2EC7C0',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            justifyContent: 'center',
                                            borderRadius: 20,
                                            marginTop: 25,
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>Registrar</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 90,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#2EC7C0',
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                }}
            >
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', fontStyle: 'italic' }}>{currentSlide===1? 'Informações do interno':'Informações do cliente'}</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                {FormSlide(currentSlide)} {/* Renderiza o slide atual */}
            </ScrollView>


        </View>
    );
}
