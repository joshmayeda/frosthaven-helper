"use client";

import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import LootDeckSelectModal from "./LootDeckSelectModal";
import lootDeckBack from "public/img/loot-deck/fh-loot-deck-back.png";
import transparentImage from "public/img/transparent-card.png";
import randomItemImage from "public/img/loot-deck/fh-random-item-1417.png";
import useWindowSize from "@rooks/use-window-size";

const LootDeck: React.FC = () => {

  const [coins, setCoins] = useState(0);
  const [lumber, setLumber] = useState(0);
  const [metal, setMetal] = useState(0);
  const [hide, setHide] = useState(0);
  const [flamefruit, setFlamefruit] = useState(0);
  const [rockroot, setRockroot] = useState(0);
  const [snowthistle, setSnowthistle] = useState(0);
  const [axenut, setAxenut] = useState(0);
  const [arrowvine, setArrowvine] = useState(0);
  const [corpsecap, setCorpsecap] = useState(0);
  const [randomItem, setRandomItem] = useState(false);
  const [total, setTotal] = useState(0);
  const [scenarioCoins, setScenarioCoins] = useState(false);
  const [lootDeck, setLootDeck] = useState<LootCard[]>([]);
  const [discardPile, setDiscardPile] = useState<LootCard[]>([]);

  type LootCard = {
    src: string;
    alt: string;
    key: number;
  }

  const ArrowvineArray:LootCard[] = [
    {src: "/img/loot-deck/arrowvine/fh-arrowvine-1381.png", alt: "Arrowvine", key: 1},
    {src: "/img/loot-deck/arrowvine/fh-arrowvine-1382.png", alt: "Arrowvine", key: 2}
  ];

  const AxenutArray:LootCard[] = [
    {src: "/img/loot-deck/axenut/fh-axenut-1383.png", alt: "Axenut", key: 1},
    {src: "/img/loot-deck/axenut/fh-axenut-1384.png", alt: "Axenut", key: 2}
  ]

  const CoinArray:LootCard[] = [
    {src: "/img/loot-deck/coins/fh-one-coin-1361.png", alt: "Coin", key: 1},
    {src: "/img/loot-deck/coins/fh-one-coin-1362.png", alt: "Coin", key: 2},
    {src: "/img/loot-deck/coins/fh-one-coin-1363.png", alt: "Coin", key: 3},
    {src: "/img/loot-deck/coins/fh-one-coin-1364.png", alt: "Coin", key: 4},
    {src: "/img/loot-deck/coins/fh-one-coin-1365.png", alt: "Coin", key: 5},
    {src: "/img/loot-deck/coins/fh-one-coin-1366.png", alt: "Coin", key: 6},
    {src: "/img/loot-deck/coins/fh-one-coin-1367.png", alt: "Coin", key: 7},
    {src: "/img/loot-deck/coins/fh-one-coin-1368.png", alt: "Coin", key: 8},
    {src: "/img/loot-deck/coins/fh-one-coin-1369.png", alt: "Coin", key: 9},
    {src: "/img/loot-deck/coins/fh-one-coin-1370.png", alt: "Coin", key: 10},
    {src: "/img/loot-deck/coins/fh-one-coin-1371.png", alt: "Coin", key: 11},
    {src: "/img/loot-deck/coins/fh-one-coin-1372.png", alt: "Coin", key: 12},
    {src: "/img/loot-deck/coins/fh-scenario-coin-1418.png", alt: "Scenario Coin", key: 13},
    {src: "/img/loot-deck/coins/fh-scenario-coin-1419.png", alt: "Scenario Coin", key: 14},
    {src: "/img/loot-deck/coins/fh-three-coins-1379.png", alt: "Coin", key: 15},
    {src: "/img/loot-deck/coins/fh-three-coins-1380.png", alt: "Coin", key: 16},
    {src: "/img/loot-deck/coins/fh-two-coins-1373.png", alt: "Coin", key: 17},
    {src: "/img/loot-deck/coins/fh-two-coins-1374.png", alt: "Coin", key: 18},
    {src: "/img/loot-deck/coins/fh-two-coins-1375.png", alt: "Coin", key: 19},
    {src: "/img/loot-deck/coins/fh-two-coins-1376.png", alt: "Coin", key: 20},
    {src: "/img/loot-deck/coins/fh-two-coins-1377.png", alt: "Coin", key: 21},
    {src: "/img/loot-deck/coins/fh-two-coins-1378.png", alt: "Coin", key: 22}
  ]

  const CorpsecapArray:LootCard[] = [
    {src: "/img/loot-deck/corpsecap/fh-corpsecap-1385.png", alt: "Corpsecap", key: 1},
    {src: "/img/loot-deck/corpsecap/fh-corpsecap-1386.png", alt: "Corpsecap", key: 2}
  ]

  const LumberArray:LootCard[] = [
    {src: "/img/loot-deck/lumber/fh-lumber-1401.png", alt: "Lumber", key: 1},
    {src: "/img/loot-deck/lumber/fh-lumber-1402.png", alt: "Lumber", key: 2},
    {src: "/img/loot-deck/lumber/fh-lumber-1403.png", alt: "Lumber", key: 3},
    {src: "/img/loot-deck/lumber/fh-lumber-1404.png", alt: "Lumber", key: 4},
    {src: "/img/loot-deck/lumber/fh-lumber-1405.png", alt: "Lumber", key: 5},
    {src: "/img/loot-deck/lumber/fh-lumber-1406.png", alt: "Lumber", key: 6},
    {src: "/img/loot-deck/lumber/fh-lumber-1407.png", alt: "Lumber", key: 7},
    {src: "/img/loot-deck/lumber/fh-lumber-1408.png", alt: "Lumber", key: 8}
  ]

  const MetalArray:LootCard[] = [
    {src: "/img/loot-deck/metal/fh-metal-1409.png", alt: "Metal", key: 1},
    {src: "/img/loot-deck/metal/fh-metal-1410.png", alt: "Metal", key: 2},
    {src: "/img/loot-deck/metal/fh-metal-1411.png", alt: "Metal", key: 3},
    {src: "/img/loot-deck/metal/fh-metal-1412.png", alt: "Metal", key: 4},
    {src: "/img/loot-deck/metal/fh-metal-1413.png", alt: "Metal", key: 5},
    {src: "/img/loot-deck/metal/fh-metal-1414.png", alt: "Metal", key: 6},
    {src: "/img/loot-deck/metal/fh-metal-1415.png", alt: "Metal", key: 7},
    {src: "/img/loot-deck/metal/fh-metal-1416.png", alt: "Metal", key: 8}
  ]

  const HideArray:LootCard[] = [
    {src: "/img/loot-deck/hide/fh-hide-1393.png", alt: "Hide", key: 1},
    {src: "/img/loot-deck/hide/fh-hide-1394.png", alt: "Hide", key: 2},
    {src: "/img/loot-deck/hide/fh-hide-1395.png", alt: "Hide", key: 3},
    {src: "/img/loot-deck/hide/fh-hide-1396.png", alt: "Hide", key: 4},
    {src: "/img/loot-deck/hide/fh-hide-1397.png", alt: "Hide", key: 5},
    {src: "/img/loot-deck/hide/fh-hide-1398.png", alt: "Hide", key: 6},
    {src: "/img/loot-deck/hide/fh-hide-1399.png", alt: "Hide", key: 7},
    {src: "/img/loot-deck/hide/fh-hide-1400.png", alt: "Hide", key: 8}
  ]

  const FlamefruitArray:LootCard[] = [
    {src: "/img/loot-deck/flamefruit/fh-flamefruit-1387.png", alt: "Flamefruit", key: 1},
    {src: "/img/loot-deck/flamefruit/fh-flamefruit-1388.png", alt: "Flamefruit", key: 2}
  ]
  
  const RockrootArray:LootCard[] = [
    {src: "/img/loot-deck/rockroot/fh-rockroot-1389.png", alt: "Rockroot", key: 1},
    {src: "/img/loot-deck/rockroot/fh-rockroot-1390.png", alt: "Rockroot", key: 2}
  ]

  const SnowthistleArray:LootCard[] = [
    {src: "/img/loot-deck/snowthistle/fh-snowthistle-1391.png", alt: "Snowthistle", key: 1},
    {src: "/img/loot-deck/snowthistle/fh-snowthistle-1392.png", alt: "Snowthistle", key: 2}
  ]

  const createLootDeck = () => {
    console.log("arrowvine: ", arrowvine)
    let deck: LootCard[] = [];
    let tempArrowvineArray = [...ArrowvineArray];
    let tempAxenutArray = [...AxenutArray];
    let tempCoinArray = [...CoinArray];
    let tempCorpsecapArray = [...CorpsecapArray];
    let tempFlamefruitArray = [...FlamefruitArray];
    let tempHideArray = [...HideArray];
    let tempLumberArray = [...LumberArray];
    let tempMetalArray = [...MetalArray];
    let tempRockrootArray = [...RockrootArray];
    let tempSnowthistleArray = [...SnowthistleArray];
    for (let i = 0; i < arrowvine; i++) {
      tempArrowvineArray.sort(() => Math.random() - 0.5);
      let tempArrowvine = tempArrowvineArray.pop();
      if(tempArrowvine)
        deck.push(tempArrowvine);
    }
    for (let i = 0; i < axenut; i++) {
      tempAxenutArray.sort(() => Math.random() - 0.5);
      let tempAxenut = tempAxenutArray.pop();
      if(tempAxenut)
        deck.push(tempAxenut);
    }
    for (let i = 0; i < coins; i++) {
      if(!scenarioCoins) {
        tempCoinArray = tempCoinArray.filter((coin) => coin.alt === "Coin");
      }
      tempCoinArray.sort(() => Math.random() - 0.5);
      let tempCoin = tempCoinArray.pop();
      if(tempCoin)
        deck.push(tempCoin);
    }
    for (let i = 0; i < corpsecap; i++) {
      tempCorpsecapArray.sort(() => Math.random() - 0.5);
      let tempCorpsecap = tempCorpsecapArray.pop();
      if(tempCorpsecap)
        deck.push(tempCorpsecap);
    }
    for (let i = 0; i < flamefruit; i++) {
      tempFlamefruitArray.sort(() => Math.random() - 0.5);
      let tempFlamefruit = tempFlamefruitArray.pop();
      if(tempFlamefruit)
        deck.push(tempFlamefruit);
    }
    for (let i = 0; i < hide; i++) {
      tempHideArray.sort(() => Math.random() - 0.5);
      let tempHide = tempHideArray.pop();
      if(tempHide)
        deck.push(tempHide);
    }
    for (let i = 0; i < lumber; i++) {
      tempLumberArray.sort(() => Math.random() - 0.5);
      let tempLumber = tempLumberArray.pop();
      if(tempLumber)
        deck.push(tempLumber);
    }
    for (let i = 0; i < metal; i++) {
      tempMetalArray.sort(() => Math.random() - 0.5);
      let tempMetal = tempMetalArray.pop();
      if(tempMetal)
        deck.push(tempMetal);
    }
    for (let i = 0; i < rockroot; i++) {
      tempRockrootArray.sort(() => Math.random() - 0.5);
      let tempRockroot = tempRockrootArray.pop();
      if(tempRockroot)
        deck.push(tempRockroot);
    }
    for (let i = 0; i < snowthistle; i++) {
      tempSnowthistleArray.sort(() => Math.random() - 0.5);
      let tempSnowthistle = tempSnowthistleArray.pop();
      if(tempSnowthistle)
        deck.push(tempSnowthistle);
    }
    if(randomItem) {
      deck.push({src: randomItemImage.src, alt: "Random Item", key: 1});
    }
    let currentIndex = deck.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex],
        deck[currentIndex],
      ];
    }
    console.log("deck: ", deck);
    setLootDeck(deck);
  }

  const drawLootCard = () => {
    let tempDeck = [...lootDeck];
    let tempDiscardPile = [...discardPile];
    let tempCard = tempDeck.pop();
    if (tempCard) {
      tempDiscardPile.push(tempCard);
    }
    setLootDeck(tempDeck);
    setDiscardPile(tempDiscardPile);
  }

  useEffect(() => {
    if(randomItem) {
      setTotal(
        coins +
          lumber +
          metal +
          hide +
          flamefruit +
          rockroot +
          snowthistle +
          axenut +
          arrowvine +
          corpsecap +
          1
      );
    } else {
      setTotal(
        coins +
          lumber +
          metal +
          hide +
          flamefruit +
          rockroot +
          snowthistle +
          axenut +
          arrowvine +
          corpsecap 
      );
    }
  }, [
    coins,
    lumber,
    metal,
    hide,
    flamefruit,
    rockroot,
    snowthistle,
    axenut,
    arrowvine,
    corpsecap,
    randomItem,
  ]);

  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <main className="flex min-h-screen divide-y-1 items-center justify-center xxs:overflow-hidden">
        <div className="flex flex-col xl:flex-row h-11/12 w-11/12 justify-center xl:gap-32 xxs:overflow-hidden">
          <div className="relative self-center outline outline-white w-2/3 h-90 rotate-90 xxs:h-64 xxs:w-5/12 md:self-center md:h-128 md:w-5/12 xl:w-391 xl:h-600 xl:rotate-0 rounded-xl text-white text-center">
            {lootDeck.length > 0 ? (
              <Button disableRipple onClick={drawLootCard} className="w-full h-full p-0">
                <Image
                  src={lootDeckBack}
                  alt="Loot Deck Back"
                  layout="fill"
                  className="xl:rotate-0 rounded-xl"
                />
              </Button>
            ) : (
              <div className="flex justify-center items-center h-full -rotate-90 xl:rotate-0">
                Loot Deck
              </div>
            )}
          </div>
            <LootDeckSelectModal
              coins={coins}
              setCoins={setCoins}
              lumber={lumber}
              setLumber={setLumber}
              metal={metal}
              setMetal={setMetal}
              hide={hide}
              setHide={setHide}
              flamefruit={flamefruit}
              setFlamefruit={setFlamefruit}
              rockroot={rockroot}
              setRockroot={setRockroot}
              snowthistle={snowthistle}
              setSnowthistle={setSnowthistle}
              axenut={axenut}
              setAxenut={setAxenut}
              arrowvine={arrowvine}
              setArrowvine={setArrowvine}
              corpsecap={corpsecap}
              setCorpsecap={setCorpsecap}
              randomItem={randomItem}
              setRandomItem={setRandomItem}
              total={total}
              scenarioCoins={scenarioCoins}
              setDiscardPile={setDiscardPile}
              setScenarioCoins={setScenarioCoins}
              createLootDeck={createLootDeck}
            />
          <div className="relative self-center outline outline-white w-2/3 h-90 rotate-90 xxs:h-64 xxs:w-5/12 md:self-center md:h-128 md:w-5/12 xl:w-391 xl:h-600 xl:rotate-0 rounded-xl text-white text-center">
            {discardPile.length > 0 ? (
              <Image
                src={discardPile[discardPile.length - 1].src}
                alt={discardPile[discardPile.length - 1].alt}
                layout="fill"
                className="xl:rotate-0 rounded-xl"
              />
            ) : (
              <div className="flex justify-center items-center h-full -rotate-90 xl:rotate-0">
                Discard Pile
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LootDeck;
