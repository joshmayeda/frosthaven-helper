'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material'
import ItemCounter from './Components/ItemCounter'

function HomePage() {
  


  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-between divide-y-1">
        <div className="h-11/12 w-11/12 bg-white self-center">
          <div className="grid grid-cols-2">
            <div className="text-black h-28 justify-self-center">Coins</div>
            <ItemCounter startingValue={0} maxValue={22} />
            <div className="text-black h-28 self-center justify-self-center">Lumber</div>
            <ItemCounter startingValue={0} maxValue={8} />
            <div className="text-black h-28 self-center justify-self-center">Metal</div>
            <ItemCounter startingValue={0} maxValue={8} />
            <div className="text-black h-28 self-center justify-self-center">Hide</div>
            <ItemCounter startingValue={0} maxValue={8} />
            <div className="text-black h-28 self-center justify-self-center">Flamefruit</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Rockroot</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Snowthistle</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Axenut</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Arrowvine</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Corpsecap</div>
            <ItemCounter startingValue={0} maxValue={2} />
            <div className="text-black h-28 self-center justify-self-center">Random Item</div>
            <ItemCounter startingValue={0} maxValue={1} />
          </div>

        </div>
      </main>
    </div>
  )
}

export default HomePage;