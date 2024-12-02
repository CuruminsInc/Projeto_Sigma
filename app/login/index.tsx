import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import useLogin from './login.vm';
import { MaterialIcons } from '@expo/vector-icons';
import ToastManager from 'toastify-react-native';

export default function Login() {
    const { goSignUp, goHome, password, setPassword, secureTextEntry, setSecureTextEntry, code, setCode, login } = useLogin()
    return (
        <View style={{ flex: 1 }}>
            <ToastManager width={250}  />
            <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', height: '90%', width: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 100 }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 50 }}>Login</Text>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 130, alignItems: 'center' }}>
                    <TextInput
                        value={code}
                        onChangeText={setCode}
                        placeholder='Código de interno'
                        style={{ backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}
                    ></TextInput>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: 300, borderWidth: 0.7, borderRadius: 10 }}>
                        <TextInput
                            placeholder="Senha"
                            style={{ flex: 1, padding: 10 }}
                            secureTextEntry={secureTextEntry}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                            <MaterialIcons name={secureTextEntry === true ? 'blur-off' : 'blur-on'} color="black" size={25} style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ width: 190 }} onPress={() => goSignUp()}>
                        <Text>Criar uma conta de interno</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => login(code,password)}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#2EC7C0', borderWidth: 1, borderColor: 'black', justifyContent: 'center', borderRadius: 20, marginTop: 25 }}>
                            <Text style={{ alignSelf: 'center' }}>Logar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
