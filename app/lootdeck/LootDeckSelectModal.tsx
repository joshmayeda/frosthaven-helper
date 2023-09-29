import React, { useState, useEffect } from "react";
import { Button, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import ItemCounter from "./ItemCounter";
import { StaticImageData } from "next/image";

type LootCard = {
    src: string;
    alt: string;
    key: number;
  }

type LootDeckSelectModalProps = {
	coins: number;
	setCoins: React.Dispatch<React.SetStateAction<number>>;
	lumber: number;
	setLumber: React.Dispatch<React.SetStateAction<number>>;
	metal: number;
	setMetal: React.Dispatch<React.SetStateAction<number>>;
	hide: number;
	setHide: React.Dispatch<React.SetStateAction<number>>;
	flamefruit: number;
	setFlamefruit: React.Dispatch<React.SetStateAction<number>>;
	rockroot: number;
	setRockroot: React.Dispatch<React.SetStateAction<number>>;
	snowthistle: number;
	setSnowthistle: React.Dispatch<React.SetStateAction<number>>;
	axenut: number;
	setAxenut: React.Dispatch<React.SetStateAction<number>>;
	arrowvine: number;
	setArrowvine: React.Dispatch<React.SetStateAction<number>>;
	corpsecap: number;
	setCorpsecap: React.Dispatch<React.SetStateAction<number>>;
	randomItem: boolean;
	setRandomItem: React.Dispatch<React.SetStateAction<boolean>>;
	total: number;
	scenarioCoins: boolean;
	setDiscardPile: React.Dispatch<React.SetStateAction<LootCard[]>>;
	setScenarioCoins: React.Dispatch<React.SetStateAction<boolean>>;
	createLootDeck: () => void;
};

const LootDeckSelectModal: React.FC<LootDeckSelectModalProps> = ({
	coins,
	setCoins,
	lumber,
	setLumber,
	metal,
	setMetal,
	hide,
	setHide,
	flamefruit,
	setFlamefruit,
	rockroot,
	setRockroot,
	snowthistle,
	setSnowthistle,
	axenut,
	setAxenut,
	arrowvine,
	setArrowvine,
	corpsecap,
	setCorpsecap,
	randomItem,
	setRandomItem,
	total,
	scenarioCoins,
	setDiscardPile,
	setScenarioCoins,
	createLootDeck,

}) => {
  const [showLootDeckSelectModal, setShowLootDeckSelectModal] = useState(false);

	const handleRandomItem = () => {
		setRandomItem(!randomItem);
  	};

  const handleScenarioCoins = () => {
    setScenarioCoins(!scenarioCoins);
  };

  const handleConfirm = () => {
	createLootDeck();
	setDiscardPile([]);
	setShowLootDeckSelectModal(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setShowLootDeckSelectModal(true)} className="flex h-10 self-center bg-green-600 font-bold">
        EDIT LOOT DECK
      </Button>
      {showLootDeckSelectModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 h-5/6 xxl:my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-2xl relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between bg-slate-300 p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl xxl:text-3xl font-semibold">Edit Loot Deck</h3>
                </div>
                {/*body*/}
                <div className="flex flex-col w-11/12 xxl:mt-6 xxl:mb-6 md:mt-4 bg-white self-center overflow-x-hidden overflow-y-scroll md:overflow-hidden xl:overflow-auto xl:h-5/6 xxl:overflow-hidden">
					<div className="grid grid-cols-2 justify-self-center">
						<div className="flex items-center text-black h-14 xxl:text-2xl justify-self-center border-b-2">Coins</div>
						{scenarioCoins ? <ItemCounter startingValue={0} maxValue={22} value={coins} setItemValue={setCoins}/> : <ItemCounter startingValue={0} maxValue={20} value={coins} setItemValue={setCoins} />}
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Lumber</div>
						<ItemCounter startingValue={0} maxValue={8} value={lumber} setItemValue={setLumber} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Metal</div>
						<ItemCounter startingValue={0} maxValue={8} value={metal} setItemValue={setMetal} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Hide</div>
						<ItemCounter startingValue={0} maxValue={8} value={hide} setItemValue={setHide} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Flamefruit</div>
						<ItemCounter startingValue={0} maxValue={2} value={flamefruit} setItemValue={setFlamefruit} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Rockroot</div>
						<ItemCounter startingValue={0} maxValue={2} value={rockroot} setItemValue={setRockroot} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Snowthistle</div>
						<ItemCounter startingValue={0} maxValue={2} value={snowthistle} setItemValue={setSnowthistle} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Axenut</div>
						<ItemCounter startingValue={0} maxValue={2} value={axenut} setItemValue={setAxenut} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Arrowvine</div>
						<ItemCounter startingValue={0} maxValue={2} value={arrowvine} setItemValue={setArrowvine} />
						<div className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">Corpsecap</div>
						<ItemCounter startingValue={0} maxValue={2} value={corpsecap} setItemValue={setCorpsecap} />
						<FormGroup className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">
							<FormControlLabel
							control={<Checkbox />}
							labelPlacement="start"
							label="Random Item"
							checked={randomItem}
							onClick={handleRandomItem}
							/>
						</FormGroup>
						<FormGroup className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center border-b-2">
							<FormControlLabel
							control={<Checkbox />}
							labelPlacement="start"
							label="Scenario Coins"
							checked={scenarioCoins}
							onClick={handleScenarioCoins}
							/>
						</FormGroup>
						<div className="flex items-center text-black h-14 xxl:h-14 xxl:text-2xl self-center justify-self-center font-bold">Total</div>
						<div className="flex items-center text-black h-14 xxl:h-14 xxl:text-2xl self-center justify-self-center font-bold">{total}</div>
					</div>
				</div>
                {/*footer*/}
                <div className="flex items-center justify-end bg-slate-300 p-4 xxl:p-7 md:mt-4 border-b border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLootDeckSelectModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleConfirm}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

    
  );
};

export default LootDeckSelectModal;
