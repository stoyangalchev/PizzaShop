import { useState } from 'react';
import instance from '../../axios'; 

const useFetchPizzas = () => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState('');

    const fetchPizzas = async () => {
        try {
            const response = await instance.get('/pizzas/getpizzas');
            console.log(response)
            if (Array.isArray(response.data)) {
                setPizzas(response.data);
            } else {
                setPizzas([]);
            }
        } catch (error) {
            console.error(error);
            setError('Failed to fetch pizzas');
            setPizzas([]);
        }
    };

    return { pizzas, setPizzas, fetchPizzas, error };
};

export default useFetchPizzas;