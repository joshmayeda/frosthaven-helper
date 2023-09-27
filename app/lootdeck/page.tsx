'use client';

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import lootDeckBack from 'public/img/loot-deck/fh-loot-deck-back.png';
import LootDeckSelectModal from './LootDeckSelectModal';

const LootDeck:React.FC = () => {

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

    useEffect(() => {
      setTotal(coins + lumber + metal + hide + flamefruit + rockroot + snowthistle + axenut + arrowvine + corpsecap + randomItem);
    }, [coins, lumber, metal, hide, flamefruit, rockroot, snowthistle, axenut, arrowvine, corpsecap, randomItem])

    const deck = [
      
    ]
    const [lastDrawnCard, setLastDrawnCard] = useState('');

    return (
      <div className="overflow-y-auto overflow-x-hidden">
        <main className="flex min-h-screen divide-y-1 items-center justify-center">
          <div className="flex h-11/12 w-11/12 justify-center gap-32">
            <Button disableRipple>
              <Image src={lootDeckBack} alt="Loot Deck Back" className="min-h-fit outline outline-white rounded-xl" />
            </Button>
            <LootDeckSelectModal 
              coins={coins}
              setCoins={setCoins}
              lumber={lumber}
              setLumber={setLumber}
              metal={metal}
              setMetal={setMetal}
              hide={hide}
              setHide={setHide}
              flamefruit={flamefruit}
              setFlamefruit={setFlamefruit}
              rockroot={rockroot}
              setRockroot={setRockroot}
              snowthistle={snowthistle}
              setSnowthistle={setSnowthistle}
              axenut={axenut}
              setAxenut={setAxenut}
              arrowvine={arrowvine}
              setArrowvine={setArrowvine}
              corpsecap={corpsecap}
              setCorpsecap={setCorpsecap}
              randomItem={randomItem}
              setRandomItem={setRandomItem}
              total={total}
              setTotal={setTotal}
              sectionCoins={sectionCoins}
              setSectionCoins={setSectionCoins}
            />
            <div className="bg-black outline outline-white w-391 h-600 rounded-xl">
              <Image src={lastDrawnCard} alt="Loot Deck Discard" className="min-h-fit rounded-xl text-white text-center" />
            </div>
          </div>
        </main>
      </div>
    )
}

export default LootDeck;