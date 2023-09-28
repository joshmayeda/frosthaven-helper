'use client';

import React from 'react';
import { Button } from '@mui/material';
import useWindowSize from '@rooks/use-window-size';

function HomePage() {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-center items-center divide-y-1">
        <Button variant="contained" className="bg-green-600 font-bold">
          <a href="/lootdeck">Loot Deck Creator</a>
        </Button>
        <div>
          window size: {window.screen.width}
        </div>
      </main>
    </div>
  )
}

export default HomePage;