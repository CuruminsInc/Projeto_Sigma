import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

export default function User() {

    const slideform = [
        {
          slide:1
        },
        {
          slide:2
        }
      ]

      const FormSlide = (slideform: any) => { 
        switch (slideform.type) {
            case 1:
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, marginTop: 60 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20 }}>
                                Digite o Código do cliente
                            </Text>
                        </View>
    
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                            <TextInput
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
                                    }}>
                                    <Text style={{ alignSelf: 'center' }}>Buscar cliente</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
    
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 290 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 15, marginTop: 40 }}>
                                ou registre um novo cliente
                            </Text>
                        </View>
    
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 160, alignItems: 'center' }}>
                            <TextInput
                                placeholder="Nome do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                            />
                            <TextInput
                                placeholder="CPF do cliente"
                                style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                            />
                            <TextInput
                                placeholder="Celular do cliente"
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
                                        marginTop: 30,
                                    }}>
                                    <Text style={{ alignSelf: 'center' }}>Registre</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case 2:
                return <View></View>;
    
            default:
                return null;
        }
    };
    

    return (
        <View style={{ flex: 1 }}>
             <View style={{ width: '100%', height: 90, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#2EC7C0', borderBottomLeftRadius:15, borderBottomRightRadius:15 }}>
                <View style={{ alignItems:'center', alignSelf:'center'}}>
                <Text style={{ fontSize: 20, fontWeight: '700', fontStyle:'italic' }}>Informações do cliente</Text>
                </View>
            </View>
           <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center'}}>
                
            </ScrollView>
        </View>
    );
}
