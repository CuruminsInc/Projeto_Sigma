import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import { StackTypes } from '../StackNavigation';
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/env';
import {storeSeller} from '../../storage'
import { Toast } from "toastify-react-native";


const useLogin = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation<StackTypes>();
  const apiUrl = API_BASE_URL;

  const showToasts = () => {
    Toast.error("Usuário não encontrado");
};

  const goSignUp = async () =>{
    navigation.navigate('Sign_Up')
  }

  const goHome = async () =>{
    navigation.navigate('Home')
  }

  const login = (id: string,password:string) => {
    axios.get(apiUrl+'seller/FindOne', { params: { id,password } })
      .then((response) => {
        storeSeller(response.data.username)
        navigation.navigate('Home')
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        showToasts()
      });
  };

  return {
    goSignUp,
    goHome,
    secureTextEntry,
    password,
    setPassword,
    setSecureTextEntry,
    code, 
    setCode,
    login
  };
};

export default useLogin;