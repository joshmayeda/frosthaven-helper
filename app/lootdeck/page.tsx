'use client';

import { useState } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import lootDeckBack from 'public/img/loot-deck/fh-loot-deck-back.png';

const LootDeck:React.FC = () => {

    const deck = [
      
    ]
    const [lastDrawnCard, setLastDrawnCard] = useState('');

    return (
      <div className="overflow-y-auto overflow-x-hidden">
        <main className="flex min-h-screen divide-y-1 items-center justify-center">
          <div className="flex h-11/12 w-11/12 justify-center gap-72">
            <Button disableRipple>
              <Image src={lootDeckBack} alt="Loot Deck Back" className="min-h-fit outline outline-white rounded-xl" />
            </Button>
            <div className="bg-black outline outline-white w-391 h-600 rounded-xl">
              <Image src={lastDrawnCard} alt="Loot Deck Discard" className="min-h-fit rounded-xl text-white text-center" />
            </div>
          </div>
        </main>
      </div>
    )
}

export default LootDeck;