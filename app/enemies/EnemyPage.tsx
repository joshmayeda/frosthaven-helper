'use client';

import { useState, useEffect } from 'react'
import EnemyTile from './EnemyTile'
import EnemyModal from './EnemyModal'
import monsterAttackModifierCardBack from '../public/img/monster-att-mod/monster_back.png'
import dice from '../public/img/icons8-dice-80.png';


const EnemyPage:React.FC = () => {
  const [showEnemyModal, setShowEnemyModal] = useState(false);

  const enemyTiles = [];
  enemyTiles.push(<EnemyTile key={1} enemyNum={1} dice={dice}/>);
  enemyTiles.push(<EnemyTile key={2} enemyNum={2} dice={dice}/>);
  

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-between divide-y-1">
        <div className="sticky top-0 border-2 border-b-0 border-amber-600 flex flex-row mb-0 gap-10 w-11/12 h-12 mx-auto bg-green-100">
          <div className="flex basis-4/12 items-center justify-center border border-black h-12">
            <h1 className="text-black text-3xl">Name and Num</h1>
          </div>
          <div className="flex basis-4/12 items-center justify-center border border-black h-12">
            <h1 className="text-black text-3xl">Hp/Buffs/Conds</h1>
          </div>
          <div className="flex basis-2/12 items-center justify-center border border-black h-12">
            <h1 className="text-black text-3xl">Ability</h1>
          </div>
          <div className="flex basis-2/12 items-center justify-center border border-black h-12">
            <h1 className="text-black text-3xl">Roll</h1>
          </div>
        </div>

        <div className="absolute top-12 left-20 h-11/12 w-11/12 mb-10 gap-5 mx-auto border-2 border-amber-600">
          {enemyTiles}
        </div>

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
