import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        //
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then((imgs) => {
            setState((oldValue) => ({
                //
                data: imgs,
                loading: false,
            }));
        });
    }, [category]);

    setTimeout(() => {
        setState((oldValue) => ({
            //
            ...oldValue,
            loading: false,
        }));
    }, 1500);

    return state;
};
