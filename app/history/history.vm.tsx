import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';
import { API_BASE_URL } from '../../env'
import axios from 'axios';
import { BuyTransaction } from '@/interfaces/Buy.interface';
import { SellTransaction } from '@/interfaces/Sell.interface';
import { OrderTransiction } from '@/interfaces/Order.interface';
import { format } from 'date-fns';


const useHistory = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'User'>>();
    const { type } = route.params;
    const [openItemId, setOpenItemId] = useState<string | null>(null);
    const [dataBuy, setDataBuy] = useState<BuyTransaction>()
    const [dataSell,setDataSell] = useState<SellTransaction>()
    const [dataOrder,setDataOrder] = useState<OrderTransiction>()
    const apiUrl = API_BASE_URL;

    const handlePress = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    async function findAll() {
        if (type === 'BUY') {
            axios.get(apiUrl + 'buy/FindAll')
                .then((response) => {
                    setDataBuy(response.data)
                })
                .catch((error) => {
                    // Erro: exibe a mensagem de erro
                    console.error('Erro na requisição:', error.message);
                });
        } if (type === 'SELL') {
            axios.get(apiUrl + 'sell/FindAll')
                .then((response) => {
                    setDataSell(response.data)
                })
                .catch((error) => {
                    // Erro: exibe a mensagem de erro
                    console.error('Erro na requisição:', error.message);
                });
        }else{
            axios.get(apiUrl + 'order/FindAll')
                .then((response) => {
                    setDataOrder(response.data)
                })
                .catch((error) => {
                    // Erro: exibe a mensagem de erro
                    console.error('Erro na requisição:', error.message);
                });
        }
    }

    function FormattedDate(date: any) {

        if (date) {
            const datebuy = new Date(date);
            const formattedDate = format(datebuy, 'dd/MM/yyyy');
            return formattedDate;
        }
        return '';
    }

    useEffect(() => {
        findAll()
    }, [])
    useEffect(() => {
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        console.log(dataBuy)
    }, [dataBuy])



    return {
        type,
        dataBuy,
        openItemId,
        handlePress,
        dataSell,
        dataOrder,
        FormattedDate
    };
};

export default useHistory;