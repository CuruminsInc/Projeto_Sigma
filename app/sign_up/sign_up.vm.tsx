import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StackTypes } from '../StackNavigation';
import { useState } from 'react';
import { API_BASE_URL } from '@/env';
import { storeSeller } from '../../storage'
import { Toast } from "toastify-react-native";
import axios from 'axios';


const useSign_up = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmsecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const navigation = useNavigation<StackTypes>();
  const apiUrl = API_BASE_URL;

  const showToasts = () => {
    Toast.error("Usuário já cadastrado");
  };

  const goSignUp = async () => {
    navigation.navigate('Sign_Up')
  }

  const goHome = async () => {
    navigation.navigate('Home')
  }

  async function sing_up() {
    axios.post(apiUrl + 'seller/Register', {
      username: username,
      password: password
    }).then((response) => {
      storeSeller(username)
      navigation.navigate('Home')
    }).catch((error) => {
      showToasts()

    })
  }

  return {
    goSignUp,
    goHome,
    secureTextEntry,
    password,
    setPassword,
    setSecureTextEntry,
    confirmsecureTextEntry,
    setConfirmSecureTextEntry,
    confirmpassword,
    setConfirmPassword,
    sing_up,
    username,
    setUsername
  };
};

export default useSign_up;