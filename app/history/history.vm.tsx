import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';

const useHistory = () => {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'User'>>();
    const { type } = route.params;
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [chassis, setChassis] = useState('');
    const [plate, setPlate] = useState('');
    const [brand, setBrand] = useState('');
    const [yearfabrication, setYearFabrication] = useState('');
    const [totalvalue, setTotalValue] = useState('');
    const [yearmodel, setYearModel] = useState('');
    const [color, setColor] = useState('');
    const [entry , setEntry ] = useState('');
    const [installment , setInstallment ] = useState('');
    const [assembler, setAssembler] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [accessories, setAccessories] = useState('');
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const handlePress = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };
    
    const dataBuy = [
        {
            id: 1,
            client: 'Ayrton Sandro de Bragança',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '18/03/2016',
            vehicle: 'Carro X',
            brand: 'Marca Y',
            model: 'Modelo Z',
            color: 'Preto',
            totalvalue: 10000
        },
        {
            id: 2,
            client: 'Mario Lapazoli de Lins',
            seller: 'José Luiz Rodrigues dos Santos',
            date: '24/02/2016',
            vehicle: 'Carro A',
            brand: 'Marca Z',
            model: 'Modelo Y',
            color: 'Vermelho',
            totalvalue: 40000
        },
        {
            id: 3,
            client: 'João Vitor Benchimol',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '05/02/2016',
            vehicle: 'Carro F',
            brand: 'Marca R',
            model: 'Modelo V',
            color: 'Azul',
            totalvalue: 1000
        },
        {
            id: 4,
            client: 'Ayrton Senna Bate Cuca',
            seller: 'Marcos Adriano de Bragança Lins',
            date: '13/01/2016',
            vehicle: 'Carro I',
            brand: 'Marca O',
            model: 'Modelo P',
            color: 'Roxo',
            totalvalue: 200000
        },
    ];

    const dataSell = [
        {
            id: 1,
            client: 'Ayrton Sandro de Bragança',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '18/03/2016',
            vehicle: 'Carro X',
            brand: 'Marca Y',
            model: 'Modelo Z',
            color: 'Preto',
            initialvalue:5000,
            installmentsvalue:1000,
            totalvalue: 10000
        },
        {
            id: 2,
            client: 'Mario Lapazoli de Lins',
            seller: 'José Luiz Rodrigues dos Santos',
            date: '24/02/2016',
            vehicle: 'Carro A',
            brand: 'Marca Z',
            model: 'Modelo Y',
            color: 'Vermelho',
            initialvalue:10000,
            installmentsvalue:2000,
            totalvalue: 40000
        },
        {
            id: 3,
            client: 'João Vitor Benchimol',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '05/02/2016',
            vehicle: 'Carro F',
            brand: 'Marca R',
            model: 'Modelo V',
            color: 'Azul',
            initialvalue:7000,
            installmentsvalue:500,
            totalvalue: 10000
        },
        {
            id: 4,
            client: 'Ayrton Senna Bate Cuca',
            seller: 'Marcos Adriano de Bragança Lins',
            date: '13/01/2016',
            vehicle: 'Carro I',
            brand: 'Marca O',
            model: 'Modelo P',
            color: 'Roxo',
            initialvalue:15000,
            installmentsvalue:2500,
            totalvalue: 200000
        },
    ];


    const dataOrder = [
        {
            id: 1,
            client: 'Ayrton Sandro de Bragança',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '18/03/2016',
            automaker: 'Montana',
            year: 2024,
            color: 'Preto',
            accessories:'Para-brisa',
            totalvalue: 10000
        },
        {
            id: 2,
            client: 'Mario Lapazoli de Lins',
            seller: 'José Luiz Rodrigues dos Santos',
            date: '24/02/2016',
            automaker: 'Endivar',
            year: 2022,
            color: 'Vermelho',
            accessories:'Para-choque',
            totalvalue: 5000
        },
        {
            id: 3,
            client: 'João Vitor Benchimol',
            seller: 'José Almeida Fidalgo Lapazoli',
            date: '05/02/2016',
            automaker: 'Topgun',
            year: 2022,
            color: 'Preto',
            accessories:'Motor V8',
            totalvalue: 50000
        },
        {
            id: 4,
            client: 'Ayrton Senna Bate Cuca',
            seller: 'Marcos Adriano de Bragança Lins',
            date: '13/01/2016',
            automaker: 'Ichiriro',
            year: 2021,
            color: 'Branco',
            accessories:'Caixa de câmbio',
            totalvalue: 50000
        },
    ];



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
        dataBuy,
        openItemId,
        handlePress,
        dataSell,
        dataOrder
    };
};

export default useHistory;