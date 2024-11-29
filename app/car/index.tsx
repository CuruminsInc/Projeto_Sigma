import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, LogBox } from 'react-native';
import useCar from './car.vm';

LogBox.ignoreLogs(['ERROR: ...']);
LogBox.ignoreAllLogs();

export default function Car() {

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
        type
    } = useCar()

    const FormSlide = (slideNumber: number) => {
        switch (slideNumber) {
            case 1:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Registre o veículo
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Número do chassi"
                                value={chassis}
                                onChangeText={setChassis}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Placa"
                                value={plate}
                                onChangeText={setPlate}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Marca"
                                value={brand}
                                onChangeText={setBrand}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ width: 320, alignItems: 'center' }}>

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
                                        <Text style={{ alignSelf: 'center' }}>Continue</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );
            case 2:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Continue preenchendo
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Ano de fabricação"
                                value={yearfabrication}
                                onChangeText={setYearFabrication}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Ano do modelo"
                                value={yearmodel}
                                onChangeText={setYearModel}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Cor"
                                value={color}
                                onChangeText={setColor}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>

                                <TouchableOpacity onPress={() => setCurrentSlide(1)}>
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
                                        <Text style={{ alignSelf: 'center' }}>Continue</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );


            case 3:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Termine o preenchimento
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            {type === 'SELL' &&
                                <>
                                    <TextInput
                                        placeholder="Valor da entrada"
                                        value={entry}
                                        onChangeText={setEntry}
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                    />

                                    <TextInput
                                        placeholder="Valor do financiamento"
                                        value={installment}
                                        onChangeText={setInstallment}
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                    />
                                </>
                            }

                            <TextInput
                                placeholder="Valor total"
                                value={totalvalue}
                                onChangeText={setTotalValue}
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

                                <TouchableOpacity onPress={() => setCurrentSlide(1)}>
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
                                        <Text style={{ alignSelf: 'center' }}>{type === 'SELL' ? 'Vender' : (type === 'BUY') ? 'Comprar' : 'Pedir'}</Text> {/* Text inside Text component */}
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


    const OrderSlide = (slideNumber: number) => {
        switch (slideNumber) {
            case 1:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Registre o pedido
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Montadora"
                                value={installment}
                                onChangeText={setInstallment}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Modelo"
                                value={model}
                                onChangeText={setModel}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Ano"
                                value={year}
                                onChangeText={setYear}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ width: 320, alignItems: 'center' }}>

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
                                        <Text style={{ alignSelf: 'center' }}>Continue</Text> {/* Text inside Text component */}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );
            case 2:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Finalize o pedido
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>

                            <TextInput
                                placeholder="Cor"
                                value={color}
                                onChangeText={setColor}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Acessórios"
                                value={accessories}
                                onChangeText={setAccessories}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <TextInput
                                placeholder="Valor"
                                value={totalvalue}
                                onChangeText={setTotalValue}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>

                                <TouchableOpacity onPress={() => setCurrentSlide(1)}>
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

                                <TouchableOpacity onPress={() => setCurrentSlide(1)}>
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
                                        <Text style={{ alignSelf: 'center' }}>Fazer pedido</Text> {/* Text inside Text component */}
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
                    <Text style={{ fontSize: 20, fontWeight: '700', fontStyle: 'italic' }}>{type === 'BUY' ? 'Comprar carro' : (type === 'SELL') ? 'Vender carro' : 'Solicitar peça'}</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                {type === 'ORDER' ? OrderSlide(currentSlide) : FormSlide(currentSlide)} {/* Renderiza o slide atual */}
            </ScrollView>


        </View>
    );
}
