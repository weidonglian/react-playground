import React from 'react';
import { useStateContext } from '../utils/state';

export const Counter = () => {
    const [{ counter }, dispatch] = useStateContext();
    const increment = () => dispatch({ type: 'INCREMENT' });
    return (
        <button type='button' onClick={increment}>
            {counter.value}
        </button>
    );
};