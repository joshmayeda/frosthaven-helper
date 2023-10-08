'use client';

import { useState, useEffect } from 'react'
import EnemyTile from './EnemyTile'
import EnemySelectModal from './EnemySelectModal'
import AttackModifierModal from './AttackModifierModal'
import AbilityDrawModal from './AbilityDrawModal';
import { Button } from '@mui/material'
import Image, { StaticImageData } from 'next/image';
import abaelHerder from 'public/img/monster-stats/processed/fh-abael-herder-0.png';
import monsterAttackModifierCardBack from 'public/img/monster-att-mod/monster_back.png'
import dice from 'public/img/icons8-dice-80.png';
import AttackDrawModal from './AttackDrawModal';

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

const attackModifierDeckBase = [
  "/img/monster-att-mod/monster/fh-am-m-01.png",
  "/img/monster-att-mod/monster/fh-am-m-02.png",
  "/img/monster-att-mod/monster/fh-am-m-03.png",
  "/img/monster-att-mod/monster/fh-am-m-04.png",
  "/img/monster-att-mod/monster/fh-am-m-05.png",
  "/img/monster-att-mod/monster/fh-am-m-06.png",
  "/img/monster-att-mod/monster/fh-am-m-07.png",
  "/img/monster-att-mod/monster/fh-am-m-08.png",
  "/img/monster-att-mod/monster/fh-am-m-09.png",
  "/img/monster-att-mod/monster/fh-am-m-10.png",
  "/img/monster-att-mod/monster/fh-am-m-11.png",
  "/img/monster-att-mod/monster/fh-am-m-12.png",
  "/img/monster-att-mod/monster/fh-am-m-13.png",
  "/img/monster-att-mod/monster/fh-am-m-14.png",
  "/img/monster-att-mod/monster/fh-am-m-15.png",
  "/img/monster-att-mod/monster/fh-am-m-16.png",
  "/img/monster-att-mod/monster/fh-am-m-17.png",
  "/img/monster-att-mod/monster/fh-am-m-18.png",
  "/img/monster-att-mod/monster/fh-am-m-19.png",
  "/img/monster-att-mod/monster/fh-am-m-20.png",
]

const monsterCurses = [
  "/img/monster-att-mod/monster-curses/fh-am-mm-01.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-02.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-03.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-04.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-05.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-06.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-07.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-08.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-09.png",
  "/img/monster-att-mod/monster-curses/fh-am-mm-10.png",
]

const monsterBlesses = [
  "/img/monster-att-mod/monster-blesses/fh-am-pm-26.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-27.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-28.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-29.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-30.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-31.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-32.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-33.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-34.png",
  "/img/monster-att-mod/monster-blesses/fh-am-pm-35.png",
]

const EnemyPage:React.FC = () => {
  const [showEnemyModal, setShowEnemyModal] = useState(false);
  const [showAttackModifierModal, setShowAttackModifierModal] = useState(false);
  const [attackModifierDeck, setAttackModifierDeck] = useState<string[]>(attackModifierDeckBase);
  const [abilityDeck, setAbilityDeck] = useState<string[]>([]);
  const [showAttackDrawModal, setShowAttackDrawModal] = useState(false);
  const [showAbilityDrawModal, setShowAbilityDrawModal] = useState(false);
  const [drawnCard, setDrawnCard] = useState<string>("");
  const [discardPile, setDiscardPile] = useState<string[]>([]);
  const [enemyTiles, setEnemyTiles] = useState<JSX.Element[]>([]);

  const shuffleAttackDeck = () => {
    setAttackModifierDeck(discardPile);
    setDiscardPile([]);
    let currentIndex = attackModifierDeck.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [attackModifierDeck[currentIndex], attackModifierDeck[randomIndex]] = [
        attackModifierDeck[randomIndex],
        attackModifierDeck[currentIndex],
      ];
    }
  }

  const drawAttackCard = () => {
    let tempDeck = [...attackModifierDeck];
    let tempDiscardPile = [...discardPile];
    if(attackModifierDeck.length === 0) {
      console.log("Im in");
      console.log(discardPile);
      setAttackModifierDeck(discardPile);
      console.log("attMod: " + attackModifierDeck)
      setDiscardPile([]);
    }
    let tempCard = tempDeck.pop()!;
    if (tempCard) {
      tempDiscardPile.push(tempCard);
    }
    setDrawnCard(tempCard);
    setAttackModifierDeck(tempDeck);
    setDiscardPile(tempDiscardPile);
    setShowAttackDrawModal(true);
  }

  const shuffleAbilityDeck = () => {
    setAbilityDeck(discardPile);
    setDiscardPile([]);
    let currentIndex = abilityDeck.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [abilityDeck[currentIndex], abilityDeck[randomIndex]] = [
        abilityDeck[randomIndex],
        abilityDeck[currentIndex],
      ];
    }
  }

  const drawAbilityCard = () => {
    let tempDeck = [...abilityDeck];
    let tempDiscardPile = [...discardPile];
    if(abilityDeck.length === 0) {
      console.log("Im in");
      console.log(discardPile);
      setAbilityDeck(discardPile);
      console.log("attMod: " + abilityDeck)
      setDiscardPile([]);
    }
    let tempCard:string = tempDeck.pop()!;
    if (tempDeck.length > 0) {
      tempDiscardPile.push(tempCard);
    }
    setDrawnCard(tempCard);
    setAbilityDeck(tempDeck);
    setDiscardPile(tempDiscardPile);
    setShowAbilityDrawModal(true);
  }

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen">
        <div className="flex flex-col gap-10 min-h-screen min-w-screen overflow-scroll">
          {enemyTiles}
        </div>
        <EnemySelectModal 
          showEnemyModal={showEnemyModal} 
          setShowEnemyModal={setShowEnemyModal}
          enemyNames={enemyNames}
          enemyTiles={enemyTiles}
          setEnemyTiles={setEnemyTiles}
        />
        <Button variant="contained" onClick={() => setShowAttackModifierModal(true)} className="fixed left-5 bottom-5 w-1/6 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">EDIT ATTACK</Button>
        <AttackModifierModal
          showAttackModifierModal={showAttackModifierModal}
          setShowAttackModifierModal={setShowAttackModifierModal}
          attackModifierDeck={attackModifierDeckBase}
          setAttackModifierDeck={setAttackModifierDeck}
          curses={monsterCurses}
          blesses={monsterBlesses}
        />
        {attackModifierDeck.length > 0 ?
          (<Button variant="contained" onClick={drawAttackCard} className="fixed left-24 bottom-5 w-1/6 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">DRAW ATTACK</Button>)
          : (
            <Button variant="contained" onClick={shuffleAttackDeck} className="fixed left-24 bottom-5 w-1/6 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">SHUFFLE ATTACK</Button>
          )
        }
        <AttackDrawModal drawnCard={drawnCard} showAttackDrawModal={showAttackDrawModal} setShowAttackDrawModal={setShowAttackDrawModal} />
        <Button variant="contained" onClick={() => setShowAbilityDrawModal(true)} className="fixed left-48 bottom-5 w-1/6 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">DRAW ABILITY</Button>
        <AbilityDrawModal showAbilityDrawModal={showAbilityDrawModal} setShowAbilityDrawModal={setShowAbilityDrawModal} enemyTiles={enemyTiles} setEnemyTiles={setEnemyTiles} />
      </main>
    </div>
  )
}

export default EnemyPage;
