import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    //El componente no esta montado
    const isMounted = useRef(false)

    // console.log(initialValues?.count);

    const isControlled = useRef(!!onChange);


    const increaseBy = (value: number) => {
        //para obtener informacion de un hook ref usamos el .current
        // console.log('isControlled', isControlled.current );
        if (isControlled.current) return onChange!({ count: value, product })

        let newValue = Math.max(counter + value, 0)
        if( initialValues?.maxCount ){
            //Math.min toma el valor minimo de los dos que se pongan
            newValue = Math.min( newValue, initialValues.maxCount )
        }
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count|| value  )
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);


    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    }

}