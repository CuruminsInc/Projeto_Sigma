
import { useEffect, useState } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation'
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';

const useUser = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'User'>>();
    const { type } = route.params;
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [codeintern, setCodeIntern] = useState('');
    const [codeclient, setCodeClient] = useState('');
    const [nameclient, setNameClient] = useState('');
    const [cpf, setCpfClient] = useState('');
    const [cellphone, setCellPhone] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const goCar = async () => {
        navigation.navigate('Car',{type})
    }

    useEffect(()=>{
        console.log(type)
    },[type])



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
        goCar
    };
};

export default useUser;