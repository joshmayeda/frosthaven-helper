'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import useWindowSize from '@rooks/use-window-size';

function HomePage() {

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-center items-center divide-y-1">
        <Button variant="contained" className="bg-green-600 font-bold">
          <a href="/lootdeck">Loot Deck Creator</a>
        </Button>
        <Button variant="contained" className="bg-green-600 font-bold">
          <a href="/enemies">Enemy Tracker</a>
        </Button>
        <div>
          window size: {screenWidth} x {screenHeight}
        </div>
      </main>
    </div>
  )
}

export default HomePage;