'use client';

import { useState, useEffect } from 'react'
import EnemyTile from './EnemyTile'
import EnemySelectModal from './EnemySelectModal'
import { Button } from '@mui/material'
import Image, { StaticImageData } from 'next/image';
import abaelHerder from 'public/img/monster-stats/processed/fh-abael-herder-0.png';
import monsterAttackModifierCardBack from 'public/img/monster-att-mod/monster_back.png'
import dice from 'public/img/icons8-dice-80.png';

const enemyNames = [
  "abael-herder",
  "abael-scout",
  "algox-archer",
  "algox-guard",
  "algox-icespeaker",
  "algox-priest",
  "algox-scout",
  "algox-snowspeaker",
  "algox-stormcaller",
  "ancient-artillery",
  "black-imp",
  "burrowing-blade",
  "chaos-demon",
  "city-guard",
  "deep-terror",
  "earth-demon",
  "elder-ooze",
  "fish-king",
  "flame-demon",
  "flaming-bladespinner",
  "forest-imp",
  "fracture-of-the-deep",
  "frost-demon",
  "frozen-corpse",
  "frozen-fist",
  "harbinger-of-shadow",
  "harrower-infester",
  "hound",
  "ice-wraith",
  "lightning-eel",
  "living-bones",
  "living-doom",
  "living-spirit",
  "lord-of-chaos",
  "lurker-clawcrusher",
  "lurker-mindsnipper",
  "lurker-soldier",
  "lurker-wavethrower",
  "night-demon",
  "ooze",
  "orphan",
  "piranha-pig",
  "polar-bear",
  "prince-of-frost",
  "program-director",
  "render",
  "rending-drake",
  "robotic-boltshooter",
  "ruined-machine",
  "savvas-icestorm",
  "savvas-lavaflow",
  "seeker-of-the-abyss",
  "shrike-fiend",
  "snowdancer",
  "snow-imp",
  "spitting-drake",
  "steel-automaton",
  "sun-demon",
  "the-collector",
  "the-relic",
  "vermling-priest",
  "vermling-scout",
  "vestige-of-the-imprisoned-god",
  "wind-demon",
]

const EnemyPage:React.FC = () => {
  const [showEnemyModal, setShowEnemyModal] = useState(false);
  const [enemyTiles, setEnemyTiles] = useState([]);

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col gap-10 min-h-screen justify-between">
        <div className="flex flex-col gap-10 min-h-screen min-w-screen justify-between divide-y-1 snap-mandatory snap-y overflow-scroll">
          {enemyTiles}
        </div>
        <Button className="bg-yellow-500 mt-2">Next Turn</Button>
        <EnemySelectModal 
          showEnemyModal={showEnemyModal} 
          setShowEnemyModal={setShowEnemyModal}
          enemyNames={enemyNames}
          enemyTiles={enemyTiles}
          setEnemyTiles={setEnemyTiles}
        />
      </main>
    </div>
  )
}

export default EnemyPage;
