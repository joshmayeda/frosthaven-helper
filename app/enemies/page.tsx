'use client';

import { useState, useEffect } from 'react'
import EnemyTile from './EnemyTile'
import EnemyModal from './EnemyModal'
import { Button } from '@mui/material'
import monsterAttackModifierCardBack from 'public/img/monster-att-mod/monster_back.png'
import dice from 'public/img/icons8-dice-80.png';


const EnemyPage:React.FC = () => {
  const [showEnemyModal, setShowEnemyModal] = useState(false);

  const enemyTiles = [
    <EnemyTile dice={dice} enemyNum={1} key={1} />, 
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
    <EnemyTile dice={dice} enemyNum={1} key={1} />,
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-between divide-y-1 mt-12">
        {enemyTiles}
        <Button className="bg-yellow-500 mt-2">Next Turn</Button>
        <EnemyModal 
          showEnemyModal={showEnemyModal} 
          setShowEnemyModal={setShowEnemyModal}
          enemyTiles={enemyTiles} 
        />
      </main>
    </div>
  )
}

export default EnemyPage;
