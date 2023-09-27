import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import ItemCounter from './ItemCounter'

const LootDeckSelect:React.FC = () => {

    const [coins, setCoins] = useState(0);
    const [lumber, setLumber] = useState(0);
    const [metal, setMetal] = useState(0);
    const [hide, setHide] = useState(0);
    const [flamefruit, setFlamefruit] = useState(0);
    const [rockroot, setRockroot] = useState(0);
    const [snowthistle, setSnowthistle] = useState(0);
    const [axenut, setAxenut] = useState(0);
    const [arrowvine, setArrowvine] = useState(0);
    const [corpsecap, setCorpsecap] = useState(0);
    const [randomItem, setRandomItem] = useState(0);
    const [total, setTotal] = useState(0);
    const [sectionCoins, setSectionCoins] = useState(false);

    const handleSectionCoins = () => {
        setSectionCoins(!sectionCoins);
    }

    useEffect(() => {
        setTotal(coins + lumber + metal + hide + flamefruit + rockroot + snowthistle + axenut + arrowvine + corpsecap + randomItem);
    }, [coins, lumber, metal, hide, flamefruit, rockroot, snowthistle, axenut, arrowvine, corpsecap, randomItem])

    return (
        <div className="flex flex-col h-11/12 w-11/12 mt-14 bg-white self-center">
          <div className="grid grid-cols-2 justify-self-center">
            <div className="flex items-center text-black h-16 justify-self-center border-b-2">
              Coins
              <FormGroup className="p-4">
                <FormControlLabel
                  control={<Checkbox />}
                  labelPlacement="end"
                  label="Section Coins?"
                  checked={sectionCoins}
                  onClick={handleSectionCoins}
                />
              </FormGroup>
            </div>
            {sectionCoins ? <ItemCounter startingValue={0} maxValue={22} value={coins} setItemValue={setCoins}/> : <ItemCounter startingValue={0} maxValue={20} value={coins} setItemValue={setCoins} />}
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Lumber</div>
            <ItemCounter startingValue={0} maxValue={8} value={lumber} setItemValue={setLumber} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Metal</div>
            <ItemCounter startingValue={0} maxValue={8} value={metal} setItemValue={setMetal} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Hide</div>
            <ItemCounter startingValue={0} maxValue={8} value={hide} setItemValue={setHide} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Flamefruit</div>
            <ItemCounter startingValue={0} maxValue={2} value={flamefruit} setItemValue={setFlamefruit} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Rockroot</div>
            <ItemCounter startingValue={0} maxValue={2} value={rockroot} setItemValue={setRockroot} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Snowthistle</div>
            <ItemCounter startingValue={0} maxValue={2} value={snowthistle} setItemValue={setSnowthistle} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Axenut</div>
            <ItemCounter startingValue={0} maxValue={2} value={axenut} setItemValue={setAxenut} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Arrowvine</div>
            <ItemCounter startingValue={0} maxValue={2} value={arrowvine} setItemValue={setArrowvine} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Corpsecap</div>
            <ItemCounter startingValue={0} maxValue={2} value={corpsecap} setItemValue={setCorpsecap} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2">Random Item</div>
            <ItemCounter startingValue={0} maxValue={1} value={randomItem} setItemValue={setRandomItem} />
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2 font-bold">Total</div>
            <div className="flex items-center text-black h-16 self-center justify-self-center border-b-2 font-bold">{total}</div>
            <Button variant="contained" className="flex col-span-2 h-20 self-center w-full bg-green-600 font-bold">
              Create Loot Deck
            </Button>
          </div>
        </div>
    )
}

export default LootDeckSelect;