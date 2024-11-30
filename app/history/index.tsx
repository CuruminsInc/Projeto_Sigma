import { View, Text, TextInput, TouchableOpacity, FlatList, LogBox } from 'react-native';
import useHistory from './history.vm';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

LogBox.ignoreLogs(['ERROR: ...']);
LogBox.ignoreAllLogs();

export default function History() {

    const { currentSlide,
        setCurrentSlide,
        chassis,
        setChassis,
        plate,
        setPlate,
        brand,
        setBrand,
        yearfabrication,
        setYearFabrication,
        yearmodel,
        setYearModel,
        color,
        setColor,
        entry,
        setEntry,
        installment,
        setInstallment,
        totalvalue,
        setTotalValue,
        model,
        setModel,
        year,
        setYear,
        accessories,
        setAccessories,
        type,
        dataBuy,
        openItemId,
        handlePress,
        dataSell,
        dataOrder
    } = useHistory()

    const renderItemBuy = (item: any) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View
                style={{
                    width: 400,
                    borderWidth: 0.6,
                    borderColor: 'black',
                    borderRadius: 20,
                    padding: 20,
                    alignSelf: 'center',
                    marginBottom: 10,
                    marginTop:10
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 375,
                        alignSelf: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                        <Text style={{fontWeight:'bold'}}>Compra N. {item.id}#</Text>
                        <Text>Cliente: {item.client}</Text>
                        <Text>Vendedor: {item.seller}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{item.date}</Text>
                        <MaterialIcons
                            name={openItemId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            color="black"
                            size={45}
                            style={{ marginLeft: 20 }}
                        />
                    </View>
                </View>
                {openItemId === item.id && (
                    <View style={{ width: 400, borderTopWidth: 0.6, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ marginLeft: 14, marginTop: 10, height: 110 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 115 }}>
                                <Text>Veículo: {item.vehicle}</Text>
                                <Text>Marca: {item.brand}</Text>
                                <Text>Modelo: {item.model}</Text>
                                <Text>Cor: {item.color}</Text>
                                <Text>Valor Total: R${item.totalvalue.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    const renderItemSell = (item: any) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View
                style={{
                    width: 400,
                    borderWidth: 0.6,
                    borderColor: 'black',
                    borderRadius: 20,
                    padding: 20,
                    alignSelf: 'center',
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 375,
                        alignSelf: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                        <Text style={{fontWeight:'bold'}}>Venda N. {item.id}#</Text>
                        <Text>Cliente: {item.client}</Text>
                        <Text>Vendedor: {item.seller}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{item.date}</Text>
                        <MaterialIcons
                            name={openItemId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            color="black"
                            size={45}
                            style={{ marginLeft: 20 }}
                        />
                    </View>
                </View>
                {openItemId === item.id && (
                    <View style={{ width: 400, borderTopWidth: 0.6, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ marginLeft: 14, marginTop: 10, height: 160 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 170 }}>
                            <Text>Veículo: {item.vehicle}</Text>
                                <Text>Marca: {item.brand}</Text>
                                <Text>Modelo: {item.model}</Text>
                                <Text>Cor: {item.color}</Text>
                                <Text>Valor Entrada: R${item.initialvalue.toFixed(2)}</Text>
                                <Text>Valor Financiado: R${item.installmentsvalue.toFixed(2)}</Text>
                                <Text>Valor Total: R${item.totalvalue.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );


    const renderItemOrder = (item: any) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View
                style={{
                    width: 400,
                    borderWidth: 0.6,
                    borderColor: 'black',
                    borderRadius: 20,
                    padding: 20,
                    alignSelf: 'center',
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 375,
                        alignSelf: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                        <Text style={{fontWeight:'bold'}}>Pedido N. {item.id}#</Text>
                        <Text>Cliente: {item.client}</Text>
                        <Text>Vendedor: {item.seller}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{item.data}</Text>
                        <MaterialIcons
                            name={openItemId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            color="black"
                            size={45}
                            style={{ marginLeft: 20 }}
                        />
                    </View>
                </View>
                {openItemId === item.id && (
                    <View style={{ width: 400, borderTopWidth: 0.6, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ marginLeft: 14, marginTop: 10, height: 110 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 115 }}>
                                <Text>Montadora: {item.automaker}</Text>
                                <Text>Ano: {item.year}</Text>
                                <Text>Cor: {item.color}</Text>
                                <Text>Acessórios: {item.accessories}</Text>
                                <Text>Valor Total: R${item.totalvalue.toFixed(2)}</Text>
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
                    <Text style={{ fontSize: 20, fontWeight: '700', fontStyle: 'italic' }}>Histórico {type === 'BUY' ? 'de compra' : (type === 'SELL') ? 'de venda' : 'de pedidos'}</Text>
                </View>
            </View>
dataOrder
            <FlatList
                data={type==='BUY'?dataBuy:(type==='SELL')?dataSell:dataOrder}
                renderItem={({ item }) => (type === 'BUY' ? renderItemBuy(item) : (type === 'SELL' ? renderItemSell(item) : renderItemOrder(item)))}
                style={{ marginTop: 20 }}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

        </View>
    );
}
