import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, LogBox } from 'react-native';
import useCar from './car.vm';
import ToastManager from 'toastify-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Automaker } from './car.vm';

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
        type,
        vehiclePost,
        operationVehicle,
        idvehicle,
        setIdVehicle,
        automakers,
        setIsFocus,
        value, 
        setValue
    } = useCar()

    const FormSlide = (slideNumber: number) => {
        switch (slideNumber) {
            case 1:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: type === 'BUY' ? 40 : 150 }}>
                        {type === 'SELL' &&
                            <>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                        Digite o Código do veículo
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                                    <TextInput
                                        value={idvehicle !== null ? idvehicle.toString() : ''}
                                        onChangeText={(text) => setIdVehicle(text ? parseInt(text) : 0)}
                                        placeholder="Código do cliente"
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                                    />

                                    <TouchableOpacity disabled={idvehicle === 0} onPress={() => setCurrentSlide(3)}>
                                        <View
                                            style={{
                                                width: 150,
                                                height: 50,
                                                backgroundColor: idvehicle === 0 ? '#808080' : '#2EC7C0',
                                                borderWidth: 1,
                                                borderColor: 'black',
                                                justifyContent: 'center',
                                                borderRadius: 20,
                                                marginTop: 25,
                                            }}
                                        >
                                            <Text style={{ alignSelf: 'center' }}>Buscar veículo</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                        }

                        {type === 'BUY' &&
                            <>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 30 }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                        Registre o veículo
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                                    <TextInput
                                        placeholder="Número do chassi"
                                        value={chassis}
                                        onChangeText={(text) => {
                                            if (text.length <= 17) setChassis(text);
                                        }}
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                    />

                                    <TextInput
                                        placeholder="Placa"
                                        value={plate}
                                        onChangeText={(text) => {
                                            if (text.length <= 8) setPlate(text);
                                        }}
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                    />

                                    <TextInput
                                        placeholder="Marca"
                                        value={brand}
                                        onChangeText={setBrand}
                                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                    />

                                    <View style={{ width: 320, alignItems: 'center' }}>

                                        <TouchableOpacity disabled={idvehicle > 0} onPress={() => setCurrentSlide(2)}>
                                            <View
                                                style={{
                                                    width: 150,
                                                    height: 50,
                                                    backgroundColor: idvehicle > 0 ? '#808080' : '#2EC7C0',
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
                            </>
                        }

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
                            {idvehicle === 0 &&
                                <TextInput
                                    placeholder="Modelo"
                                    value={model}
                                    onChangeText={setModel}
                                    style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                                />
                            }


                            <TextInput
                                placeholder="Valor total"
                                value={totalvalue}
                                onChangeText={setTotalValue}
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10, marginTop: 20 }}
                            />

                            <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>

                                <TouchableOpacity onPress={() => idvehicle > 0 ? setCurrentSlide(1) : setCurrentSlide(2)}>
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

                                <TouchableOpacity disabled={totalvalue===''||installment==='' || entry===''} onPress={vehiclePost}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor:totalvalue===''||installment==='' || entry===''?'#808080':'#2EC7C0',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            justifyContent: 'center',
                                            borderRadius: 20,
                                            marginTop: 25,
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>Continue</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                );


            case 4:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 120 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                {type === 'BUY' ? 'Finalize a compra' : 'Finalize a venda'}
                            </Text>
                        </View>

                        <View style={{ height: 110, alignItems: 'center' }}>

                            <TouchableOpacity onPress={operationVehicle}>
                                <View
                                    style={{
                                        width: 190,
                                        height: 60,
                                        backgroundColor: '#2EC7C0',
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        marginTop: 20,
                                    }}
                                >
                                    <Text style={{ alignSelf: 'center' }}>{type === 'BUY' ? 'Comprar' : 'Vender'}</Text> {/* Text inside Text component */}
                                </View>
                            </TouchableOpacity>


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
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 450 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Registre o pedido 
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <Dropdown<Automaker>
                                data={automakers}
                                search
                                style={{width:300, backgroundColor:'white', height:45, borderRadius:10, borderWidth:0.7}}
                                maxHeight={200}
                                placeholder=' Escolha uma montadora'
                                labelField="label"
                                valueField="value"
                                searchPlaceholder='Pesquise'
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    if (item) { // Verifique se item não é null
                                        setValue(item.value);
                                        setIsFocus(false);
                                    }
                                }}
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

                                <TouchableOpacity disabled={year==='' || model ==='' || value===''} onPress={() => setCurrentSlide(2)}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor:year==='' || model ==='' || value===''?'#808080':'#2EC7C0',
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

                                <TouchableOpacity disabled={color==='' || accessories ==='' || totalvalue===''} onPress={operationVehicle}>
                                    <View
                                        style={{
                                            width: 150,
                                            height: 50,
                                            backgroundColor: color==='' || accessories ==='' || totalvalue===''?'#808080':'#2EC7C0',
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
            <ToastManager />
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
