import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
// import WebFont from 'webfontloader';

type ItemCounterProps = {
    startingValue: number;
    maxValue: number;
}

const ItemCounter:React.FC<ItemCounterProps> = ({ startingValue, maxValue }) => {

    const [value, setValue] = useState(startingValue);
    const [decrementDisabled, setDecrementDisabled] = useState(true);
    const [incrementDisabled, setIncrementDisabled] = useState(false);

    const handleIncrement = () => {
        setValue(value + 1);
        if((value + 1) === maxValue) {
            setIncrementDisabled(true);
        }
        setDecrementDisabled(false);
    }

    const handleDecrement = () => {
        setValue(value - 1);
        if(value === 1) {
            setDecrementDisabled(true);
        }
        setIncrementDisabled(false);
    }

    return (
        <>
            <div className="flex h-full self-center justify-self-center">
                <Button onClick={handleDecrement} disabled={decrementDisabled}>
                    <IndeterminateCheckBoxIcon />
                </Button>
                <div className="h-full">{value}</div>
                <Button onClick={handleIncrement} disabled={incrementDisabled}>
                    <AddBoxIcon />
                </Button>
            </div>
        </>
    )
}


export default ItemCounter;