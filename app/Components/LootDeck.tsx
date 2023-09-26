import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import ItemCounter from './ItemCounter'
import Image from 'next/image';

const LootDeck:React.FC = () => {

    
    return (
        <div className="flex h-11/12 w-11/12 mt-14 bg-white self-center">
          <Image src="/public/img/loot-deck/fh-loot-deck-back.png" alt="Loot Deck Back">

          </Image>
          <div>

          </div>
        </div>
    )
}

export default LootDeck;