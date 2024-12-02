
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation'
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';
import { API_BASE_URL } from '@/env';
import axios from 'axios';
import { Toast } from "toastify-react-native";

const useUser = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'User'>>();
    const { type } = route.params;
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [codeintern, setCodeIntern] = useState<number>(0);
    const [codeclient, setCodeClient] = useState<number>(0);
    const [nameclient, setNameClient] = useState<string>('');
    const [cpf, setCpfClient] = useState<string>('');
    const [cellphone, setCellPhone] = useState<string>('');
    const [homephone, setHomePhone] = useState<string>('');
    const [income, setIncome] = useState<number | null>(null);
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const apiUrl = API_BASE_URL;

    const showToasts = () => {
        Toast.error("Cliente já registrado");
      };
    
    async function clienPost() {

        axios.post(apiUrl+'client/Register', {
                name: nameclient,
                cpf: cpf,
                neighborhood: address,
                city: city,
                state: region,
                home_phone: cellphone,
                cell_phone: cellphone,
                income: income
            })
            .then((response) => {
                navigation.navigate('Car',{type, codeclient,codeintern})
                
            })
            .catch((error) => {
                showToasts()
                
            });
    }


    const formatCpf = (value: string) => {
        // Remove todos os caracteres que não sejam números
        const numericValue = value.replace(/\D/g, '');
        // Limita o número de dígitos a 11
        if (numericValue.length > 11) return cpf; // Retorna o CPF atual se exceder o tamanho
        // Aplica a máscara de CPF
        const formattedValue = numericValue
            .replace(/^(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') // Adiciona o segundo ponto
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o hífen
        return formattedValue;
    };

    const handleCpfChange = (value: string) => {
        setCpfClient(formatCpf(value)); 
    };

    const goCarWithDates = () => {
        navigation.navigate('Car',{type, codeclient,codeintern})
    };



    return {
        currentSlide,
        setCurrentSlide,
        codeintern,
        setCodeIntern,
        codeclient,
        setCodeClient,
        nameclient,
        setNameClient,
        cpf,
        setCpfClient,
        cellphone,
        setCellPhone,
        region,
        setRegion,
        city,
        setCity,
        address,
        setAddress,
        clienPost,
        homephone, 
        setHomePhone,
        handleCpfChange,
        income, 
        setIncome,
        goCarWithDates
    };
};

export default useUser;