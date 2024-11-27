import { Image, View, ScrollView, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 90, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#2EC7C0', borderBottomLeftRadius:15, borderBottomRightRadius:15 }}>
                <View style={{ justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'93%', alignSelf:'center'}}>
                <Text style={{ fontSize: 20, fontWeight: '700', fontStyle:'italic' }}>Olá, Fulano de tal</Text>
                <TouchableOpacity>
                <MaterialIcons name="exit-to-app" color="white" size={35} />
                </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ marginTop: 30, flexDirection: 'column', justifyContent: 'space-between', height: 600 }}>
                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0',borderWidth:1,borderColor:'black', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0',borderWidth:1,borderColor:'black', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0', alignItems: 'center',borderWidth:1,borderColor:'black', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0', alignItems: 'center',borderWidth:1,borderColor:'black', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0', alignItems: 'center',borderWidth:1,borderColor:'black', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 260, height: 80, borderRadius: 10, backgroundColor: '#2EC7C0', alignItems: 'center',borderWidth:1,borderColor:'black', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Botão</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:20}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}