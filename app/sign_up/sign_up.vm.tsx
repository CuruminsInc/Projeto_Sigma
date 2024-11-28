import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import { StackTypes } from '../StackNavigation';
import { useState } from 'react';


const useSign_up = () => {
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation<StackTypes>();

  const goSignUp = async () =>{
    navigation.navigate('Sign_Up')
  }

  const goHome = async () =>{
    navigation.navigate('Home')
  }

  return {
    goSignUp,
    goHome,
    secureTextEntry,
    password,
    setPassword,
    setSecureTextEntry
  };
};

export default useSign_up;