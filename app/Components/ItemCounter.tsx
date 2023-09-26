import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
// import WebFont from 'webfontloader';

type ItemCounterProps = {
    startingValue: number;
    maxValue: number;
    value: number;
    setItemValue: React.Dispatch<React.SetStateAction<number>>;
}

const ItemCounter:React.FC<ItemCounterProps> = ({ startingValue, maxValue, value, setItemValue }) => {

    const [decrementDisabled, setDecrementDisabled] = useState(true);
    const [incrementDisabled, setIncrementDisabled] = useState(false);

    const handleIncrement = () => {
        setItemValue(value + 1);
        if((value + 1) === maxValue) {
            setIncrementDisabled(true);
        }
        setDecrementDisabled(false);
    }

    const handleDecrement = () => {
        setItemValue(value - 1);
        if(value === 1) {
            setDecrementDisabled(true);
        }
        setIncrementDisabled(false);
    }

    return (
        <>
            <div className="flex h-full self-center justify-self-center border-b-2">
                <Button onClick={handleDecrement} disabled={decrementDisabled}>
                    <IndeterminateCheckBoxIcon />
                </Button>
                <div className="flex items-center h-full">{value}</div>
                <Button onClick={handleIncrement} disabled={incrementDisabled}>
                    <AddBoxIcon />
                </Button>
            </div>
        </>
    )
}


export default ItemCounter;