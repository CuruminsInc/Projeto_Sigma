import {useNavigation} from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import { getSeller } from '@/storage';
import { useEffect, useState } from 'react';

const useHome = () => {

  const[selleruser,setSeller]=useState<string>('')
  const navigation = useNavigation<StackTypes>();


  const goUser = async (type:string) => {
    navigation.navigate('User', { type }); 
  };

  const goHistory = async (type:string) => {
    navigation.navigate('History', { type }); 
  };

  const goLogin = async () => {
    navigation.navigate('Login'); 
  };

  const goInformation = async (type:string) => {
    navigation.navigate('Information',{type}); 
  };

  useEffect(()=>{
    const fetchSeller = async () => {
      const sellerData = await getSeller();
      if(sellerData)
      setSeller(sellerData);
    };
    fetchSeller();
  },[])

  return {
    goUser,
    goHistory,
    selleruser,
    goLogin,
    goInformation
  };
};

export default useHome;