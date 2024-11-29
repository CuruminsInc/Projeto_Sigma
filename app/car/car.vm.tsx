import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';
import StackNavigation from '../StackNavigation';
import { RouteProp } from '@react-navigation/native';

const useCar = () => {
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
        type
    };
};

export default useCar;