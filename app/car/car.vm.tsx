import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';
import { API_BASE_URL } from '@/env';
import { Toast } from "toastify-react-native";

export interface Automaker {
    label: string;
    value: string;
}

const useCar = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'Car'>>();
    const { type, codeclient, codeintern } = route.params;
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [idvehicle, setIdVehicle] = useState<number>(0)
    const [idclient, setIdClient] = useState<number>(0)
    const [chassis, setChassis] = useState('');
    const [plate, setPlate] = useState('');
    const [brand, setBrand] = useState('');
    const [yearfabrication, setYearFabrication] = useState('');
    const [totalvalue, setTotalValue] = useState('');
    const [yearmodel, setYearModel] = useState('');
    const [color, setColor] = useState('');
    const [entry, setEntry] = useState('');
    const [installment, setInstallment] = useState('');
    const [assembler, setAssembler] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [accessories, setAccessories] = useState('');
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);
    const apiUrl = API_BASE_URL;

    const automakers: any = [
        { label: ' Monsas montadora', value: '1' },
        { label: ' Dodo montadora', value: '2' },
        { label: ' Moboroide montadora', value: '3' },
        { label: ' Cagaho montadora', value: '4' },
        { label: ' Lapila montadora', value: '5' },
    ];


    const showToasts = () => {
        Toast.error("Ocorreu um erro");
    };
    
    const formatChassis = (value: string) => {
        const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, '');
        return alphanumeric.slice(0, 17);
    };

    const formatPlate = (value: string) => {
        const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, '');
        if (alphanumeric.length <= 3) {
            return alphanumeric.toUpperCase();
        } else if (alphanumeric.length <= 7) {
            return alphanumeric
                .toUpperCase()
                .replace(/^([A-Z]{3})(\d{1,4})$/, '$1-$2');
        } else {
            return alphanumeric
                .toUpperCase()
                .replace(/^([A-Z]{3})(\d)([A-Z])(\d{2})$/, '$1$2$3$4');
        }
    };

    const handleChassisChange = (value: string) => {
        setChassis(formatChassis(value));
    };

    const handlePlateChange = (value: string) => {
        setPlate(formatPlate(value));
    };


    async function vehiclePost() {

        if (idvehicle === 0) {
            axios.post(apiUrl + 'vehicle/Register', {
                chassis_number: chassis,
                plate: plate,
                brand: brand,
                model: model,
                manufacture_year: yearfabrication,
                model_year: yearmodel,
                color: color,
                value: totalvalue
            })
                .then((response) => {
                    setCurrentSlide(4)
                })
                .catch((error) => {
                    showToasts()

                })

        } else {
            setCurrentSlide(4)
        }
    }


    async function operationVehicle() {

        if (type === 'BUY') {
            axios.post(apiUrl + 'buy/Register', {
                date: new Date(),
                clientId: idclient,
                sellerId: codeintern,
                vehicleId: idvehicle,
                value: totalvalue
            })
                .then((response) => {
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    showToasts()

                })

        } else if (type == 'SELL') {
            axios.post(apiUrl + 'sell/Register', {
                date: new Date(),
                clientId: idclient,
                sellerId: codeintern,
                vehicleId: idvehicle,
                entry_value: entry,
                financed_value: installment,
                total_value: totalvalue
            })
                .then((response) => {
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    showToasts()

                })
        } else {
            axios.post(apiUrl + 'order/Register', {
                date: new Date(),
                clientId: idclient,
                sellerId: codeintern,
                manufacturerId: value,
                model: model,
                year: year,
                color: color,
                accessories: accessories,
                value: totalvalue
            })
                .then((response) => {
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    showToasts()

                })
        }
    }

    useEffect(() => {

        if (currentSlide === 4 && codeclient === 0 ||(type==='ORDER' && codeclient===0)) {
            axios.get(apiUrl + 'client/FindAllRecent')
                .then((response) => {
                    setIdClient(response.data[0].id)
                })
                .catch((error) => {
                    console.error('Erro na requisição:', error.message);
                });
        } else {
            setIdClient(codeclient)
        }

        if (currentSlide === 4 && idvehicle === 0) {
            axios.get(apiUrl + 'vehicle/FindAll')
                .then((response) => {
                    setIdVehicle(response.data[0].id)
                })
                .catch((error) => {
                    console.error('Erro na requisição:', error.message);
                });
        }
    }, [currentSlide])

    return {
        currentSlide,
        setCurrentSlide,
        chassis,
        setChassis,
        plate,
        setPlate,
        brand,
        setBrand,
        yearfabrication,
        setYearFabrication,
        yearmodel,
        setYearModel,
        color,
        setColor,
        entry,
        setEntry,
        installment,
        setInstallment,
        totalvalue,
        setTotalValue,
        model,
        setModel,
        year,
        setYear,
        accessories,
        setAccessories,
        type,
        handleChassisChange,
        handlePlateChange,
        vehiclePost,
        operationVehicle,
        idvehicle,
        setIdVehicle,
        assembler,
        setAssembler,
        automakers,
        isFocus,
        setIsFocus,
        value,
        setValue
    };
};

export default useCar;