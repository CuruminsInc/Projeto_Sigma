import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSeller = async (value) => {
    try {
        await AsyncStorage.setItem('user', value);
    } catch (e) {
        console.log(e)
    }
};

export async function getSeller(){
    try {
        const jsonValue = await AsyncStorage.getItem('user');
        return jsonValue || null ;
    } catch (e) {
        console.log(e)
    }
};

export async function removeValue(){
    try {
        await AsyncStorage.removeItem('user')
    } catch (e) {
        console.log(e)
    }
}

