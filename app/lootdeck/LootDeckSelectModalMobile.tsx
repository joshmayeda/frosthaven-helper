import React, { useState, useEffect } from "react";
import { Button, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import ItemCounter from "./ItemCounter";
import { StaticImageData } from "next/image";

type LootCard = {
    src: string;
    alt: string;
    key: number;
  }

// type LootDeckSelectModalMobileProps = {
// 	coins: number;
// 	setCoins: React.Dispatch<React.SetStateAction<number>>;
// 	lumber: number;
// 	setLumber: React.Dispatch<React.SetStateAction<number>>;
// 	metal: number;
// 	setMetal: React.Dispatch<React.SetStateAction<number>>;
// 	hide: number;
// 	setHide: React.Dispatch<React.SetStateAction<number>>;
// 	flamefruit: number;
// 	setFlamefruit: React.Dispatch<React.SetStateAction<number>>;
// 	rockroot: number;
// 	setRockroot: React.Dispatch<React.SetStateAction<number>>;
// 	snowthistle: number;
// 	setSnowthistle: React.Dispatch<React.SetStateAction<number>>;
// 	axenut: number;
// 	setAxenut: React.Dispatch<React.SetStateAction<number>>;
// 	arrowvine: number;
// 	setArrowvine: React.Dispatch<React.SetStateAction<number>>;
// 	corpsecap: number;
// 	setCorpsecap: React.Dispatch<React.SetStateAction<number>>;
// 	randomItem: boolean;
// 	setRandomItem: React.Dispatch<React.SetStateAction<boolean>>;
// 	total: number;
// 	scenarioCoins: boolean;
// 	setDiscardPile: React.Dispatch<React.SetStateAction<LootCard[]>>;
// 	setScenarioCoins: React.Dispatch<React.SetStateAction<boolean>>;
// 	createLootDeck: () => void;
// };

const LootDeckSelectModalMobile: React.FC = ({
	// coins,
	// setCoins,
	// lumber,
	// setLumber,
	// metal,
	// setMetal,
	// hide,
	// setHide,
	// flamefruit,
	// setFlamefruit,
	// rockroot,
	// setRockroot,
	// snowthistle,
	// setSnowthistle,
	// axenut,
	// setAxenut,
	// arrowvine,
	// setArrowvine,
	// corpsecap,
	// setCorpsecap,
	// randomItem,
	// setRandomItem,
	// total,
	// scenarioCoins,
	// setDiscardPile,
	// setScenarioCoins,
	// createLootDeck,

}) => {
  const [showLootDeckSelectModal, setShowLootDeckSelectModal] = useState(false);

// 	const handleRandomItem = () => {
// 		setRandomItem(!randomItem);
//   	};

//   const handleScenarioCoins = () => {
//     setScenarioCoins(!scenarioCoins);
//   };

//   const handleConfirm = () => {
// 	createLootDeck();
// 	setDiscardPile([]);
// 	setShowLootDeckSelectModal(false);
//   };

  return (
    <>
      <Button variant="contained" onClick={() => setShowLootDeckSelectModal(true)} className="flex h-20 self-center bg-green-600 font-bold">
        EDIT LOOT DECK
      </Button>
      {showLootDeckSelectModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-white">
            <Button variant="contained" onClick={() => setShowLootDeckSelectModal(false)} className="flex h-20 self-center bg-green-600 font-bold">
              CLOSE
            </Button>
        </div>
      ): null}
    </>
  );
};

export default LootDeckSelectModalMobile;
