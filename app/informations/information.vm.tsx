import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';
import { API_BASE_URL } from '../../env'
import axios from 'axios';
import { ClientData } from '@/interfaces/Client.interface';
import { VehicleData } from '@/interfaces/Vehicle.interface';


const useInformation = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'User'>>();
    const { type } = route.params;
    const [openItemId, setOpenItemId] = useState<string | null>(null);
    const [dataClient, setDataClient] = useState<ClientData[]>([])
    const [dataVehicle, setDataVehicle] = useState<VehicleData[]>([])
    const apiUrl = API_BASE_URL;
    const [filterText, setFilterText] = useState('');

    const filteredDataVehicle = dataVehicle.filter(item => 
        item.brand.toLowerCase().includes(filterText.toLowerCase()) ||
        item.model.toLowerCase().includes(filterText.toLowerCase())
    );


    const handlePress = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    async function findAll() {

        axios.get(apiUrl + 'client/FindAll')
            .then((response) => {
                setDataClient(response.data)
            })
            .catch((error) => {
                console.error('Erro na requisição:', error.message);
            });


        axios.get(apiUrl + 'vehicle/FindAll')
            .then((response) => {
                setDataVehicle(response.data)
            })
            .catch((error) => {
                console.error('Erro na requisição:', error.message);
            });

    }

    useEffect(() => {
        findAll()
    }, [])

    return {
        dataClient,
        dataVehicle,
        openItemId,
        handlePress,
        filterText, 
        setFilterText,
        filteredDataVehicle,
        type
    };
};

export default useInformation;