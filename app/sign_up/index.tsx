import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Sign_Up() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{alignItems:'center', alignSelf:'center', justifyContent:'center', height:'90%', width:'100%'}}>
                <View style={{alignItems:'center', justifyContent:'center', width:140}}>
                    <Text style={{ fontSize: 30, fontWeight: '700', marginBottom:40 }}>Cadastro</Text>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 100, alignItems:'center' }}>
                    <TextInput placeholder='Nome do interno' style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius:10 }}></TextInput>
                    <TextInput placeholder='Senha' style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius:10 }}></TextInput>
                </View>

                <View>
                    <TouchableOpacity onPress={() => console.log('Sim')}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#2EC7C0',borderWidth:1,borderColor:'black', justifyContent: 'center', borderRadius: 20, marginTop:25 }}>
                            <Text style={{ alignSelf: 'center' }}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
