import Image from 'next/image'
import EnemyTile from './Components/EnemyTile'
import monsterAttackModifierCardBack from '../public/img/monster-att-mod/monster_back.png'
import { Button } from '@mui/material'

export default function Home() {

  const enemyTiles = [];
  for (let i = 0; i < 30; i++) {
    enemyTiles.push(<EnemyTile enemy={i} />)
  }

  return (
    <div className="overflow-x-hidden">
      <main className="grid grid-cols-1 min-h-screen items-center justify-between overflow-x-scroll overflow-y-hidden">
        <div className="h-11/12 w-screen p-10">
          {enemyTiles}
        </div>
        <Button variant="contained" className="fixed right-20 bottom-20 bg-green-500 text-black">+</Button>
      </main>
    </div>
  )
}
