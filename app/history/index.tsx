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
        type
    } = useHistory()

    const [show, setShow] = useState<boolean>(false);

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

            <TouchableOpacity onPress={()=> setShow(previousState => !previousState)} >
                <View style={{ width: 400, borderWidth: 0.6, borderColor: 'black', borderRadius: 20, padding: 20, alignSelf:'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 375, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-between' }}>
                            <Text>Compra N. 1#</Text>
                            <Text>Cliente: Ayrton Sandro de Bragança</Text>
                            <Text>Vendedor:José Almeida Fidalgo Lapazoli</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>18/03/2016</Text>
                            <MaterialIcons name={show===true?"keyboard-arrow-up":"keyboard-arrow-down"} color="black" size={45} style={{ marginLeft: 20 }} />
                        </View>
                    </View>
                    {show===true &&
                    <View style={{width:400, borderTopWidth:0.6, alignSelf:'center', marginTop:10}}>
                        <View style={{marginLeft:14, marginTop:10}}>
                        <Text>Veículo</Text>
                        <Text>Marca</Text>
                        <Text>Modelo</Text>
                        <Text>Cor</Text>
                        </View>
                    </View>
                    }
                </View>
            </TouchableOpacity>

        </View>
    );
}
