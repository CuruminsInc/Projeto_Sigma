import { View, Text, TextInput, TouchableOpacity, FlatList, LogBox } from 'react-native';
import useInformation from './information.vm';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

LogBox.ignoreLogs(['ERROR: ...']);
LogBox.ignoreAllLogs();

export default function Information() {

    const {
        dataClient,
        dataVehicle,
        openItemId,
        handlePress,
        filterText,
        setFilterText,
        filteredDataVehicle,
        type
    } = useInformation()

    const renderItemClient = (item: any) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View
                style={{
                    width: 350,
                    borderWidth: 0.6,
                    borderColor: 'black',
                    borderRadius: 20,
                    padding: 20,
                    alignSelf: 'center',
                    marginTop: 10
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 325,
                        alignSelf: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold' }}>Client N. {item.id}#</Text>
                        <Text>Cliente: {item.name}</Text>
                        <Text>CPF: {item.cpf}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>+55 {item.cell_phone}</Text>
                        <MaterialIcons
                            name={openItemId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            color="black"
                            size={45}
                            style={{ marginLeft: 40 }}
                        />
                    </View>
                </View>
                {openItemId === item.id && (
                    <View style={{ width: 348, borderTopWidth: 0.6, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ marginLeft: 14, marginTop: 10, height: 110 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 115 }}>
                                <Text>Bairro: {item.neighborhood}</Text>
                                <Text>Cidade: {item.city}</Text>
                                <Text>Estado: {item.state}</Text>
                                <Text>Telefone Casa: {item.home_phone}</Text>
                                <Text>Renda: R${item.income.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );


    const renderItemVehicle = (item: any) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View
                style={{
                    width: 350,
                    borderWidth: 0.6,
                    borderColor: 'black',
                    borderRadius: 20,
                    padding: 20,
                    alignSelf: 'center',
                    marginBottom: 10,
                    marginTop: 10
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 325,
                        alignSelf: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold' }}>Veículo N. {item.id}#</Text>
                        <Text>N. Chassi: {item.chassis_number}</Text>
                        <Text>Placa: {item.plate}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Marca: {item.brand}</Text>
                        <MaterialIcons
                            name={openItemId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            color="black"
                            size={45}
                            style={{ marginLeft: 40 }}
                        />
                    </View>
                </View>
                {openItemId === item.id && (
                    <View style={{ width: 348, borderTopWidth: 0.6, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ marginLeft: 14, marginTop: 10, height: 110 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 115 }}>
                                <Text>Modelo: {item.model}</Text>
                                <Text>Ano de fabricação: {item.manufacture_year}</Text>
                                <Text>Ano do modelo: {item.model_year}</Text>
                                <Text>Cor: {item.color}</Text>
                                <Text>Valor: R${item.value.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

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
                    <Text style={{ fontSize: 20, fontWeight: '700', fontStyle: 'italic' }}>Histórico de Clientes</Text>
                </View>
            </View>
            {type === 'VEHICLE' &&
                <View style={{ margin: 10 }}>

                    <TextInput
                        placeholder="Filtrar por marca ou modelo"
                        value={filterText}
                        onChangeText={setFilterText}
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingLeft: 10,
                        }}
                    />
                </View>
            }

            <FlatList
                data={type === 'CLIENT' ? dataClient : filteredDataVehicle}
                renderItem={({ item }) => type === 'CLIENT' ? renderItemClient(item) : renderItemVehicle(item)}
                style={{ marginTop: 20 }}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

        </View>
    );
}
