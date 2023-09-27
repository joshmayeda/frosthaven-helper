'use client';

import LootDeckSelect from './lootdeck/LootDeckSelect'

function HomePage() {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-between divide-y-1">
        <LootDeckSelect />
      </main>
    </div>
  )
}

export default HomePage;