'use client';

import React from 'react';
import { Button } from '@mui/material';

function HomePage() {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-center items-center divide-y-1">
        <Button variant="contained" className="bg-green-600 font-bold">
          <a href="/lootdeck">Loot Deck Creator</a>
        </Button>
      </main>
    </div>
  )
}

export default HomePage;