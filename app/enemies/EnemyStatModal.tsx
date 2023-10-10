import React from "react";
import Image, { StaticImageData } from 'next/image';
import Picker from 'react-mobile-picker';
import baneActive from 'public/img/conditions/fh-bane-condition.png';
import baneFaded from 'public/img/conditions/fh-bane-condition-faded.png';
import blessActive from 'public/img/conditions/fh-bless-condition.png';
import blessFaded from 'public/img/conditions/fh-bless-condition-faded.png';
import brittleActive from 'public/img/conditions/fh-brittle-condition.png';
import brittleFaded from 'public/img/conditions/fh-brittle-condition-faded.png';
import curseActive from 'public/img/conditions/fh-curse-condition.png';
import curseFaded from 'public/img/conditions/fh-curse-condition-faded.png';
import disarmActive from 'public/img/conditions/fh-disarm-condition.png';
import disarmFaded from 'public/img/conditions/fh-disarm-condition-faded.png';
import immobilizeActive from 'public/img/conditions/fh-immobilize-condition.png';
import immobilizeFaded from 'public/img/conditions/fh-immobilize-condition-faded.png';
import impairActive from 'public/img/conditions/fh-impair-condition.png';
import impairFaded from 'public/img/conditions/fh-impair-condition-faded.png';
import invisibleActive from 'public/img/conditions/fh-invisible-condition.png';
import invisibleFaded from 'public/img/conditions/fh-invisible-condition-faded.png';
import muddleActive from 'public/img/conditions/fh-muddle-condition.png';
import muddleFaded from 'public/img/conditions/fh-muddle-condition-faded.png';
import poisonActive from 'public/img/conditions/fh-poison-condition.png';
import poisonFaded from 'public/img/conditions/fh-poison-condition-faded.png';
import regenerateActive from 'public/img/conditions/fh-regenerate-condition.png';
import regenerateFaded from 'public/img/conditions/fh-regenerate-condition-faded.png';
import strengthenActive from 'public/img/conditions/fh-strengthen-condition.png';
import strengthenFaded from 'public/img/conditions/fh-strengthen-condition-faded.png';
import stunActive from 'public/img/conditions/fh-stun-condition.png';
import stunFaded from 'public/img/conditions/fh-stun-condition-faded.png';
import wardActive from 'public/img/conditions/fh-ward-condition.png';
import wardFaded from 'public/img/conditions/fh-ward-condition-faded.png';
import woundActive from 'public/img/conditions/fh-wound-condition.png';
import woundFaded from 'public/img/conditions/fh-wound-condition-faded.png';


type EnemyStatModalProps = {
    showStatModal: boolean;
    setShowStatModal: React.Dispatch<React.SetStateAction<boolean>>;
    conditions: string[];
    setConditions: React.Dispatch<React.SetStateAction<string[]>>;
    props: any;
}

const selections = {
  HP: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
  Shield: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Retaliate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

const EnemyStatModal:React.FC<EnemyStatModalProps> = ({ showStatModal, setShowStatModal, conditions, setConditions, props }) => {

  const [pickerValue, setPickerValue] = React.useState({
    HP: props.hp,
    Shield: props.shield,
    Retaliate: props.retaliate
  });

  const [bane, setBane] = React.useState(baneFaded);
  const [bless, setBless] = React.useState(blessFaded);
  const [brittle, setBrittle] = React.useState(brittleFaded);
  const [curse, setCurse] = React.useState(curseFaded);
  const [disarm, setDisarm] = React.useState(disarmFaded);
  const [immobilize, setImmobilize] = React.useState(immobilizeFaded);
  const [impair, setImpair] = React.useState(impairFaded);
  const [invisible, setInvisible] = React.useState(invisibleFaded);
  const [muddle, setMuddle] = React.useState(muddleFaded);
  const [poison, setPoison] = React.useState(poisonFaded);
  const [regenerate, setRegenerate] = React.useState(regenerateFaded);
  const [strengthen, setStrengthen] = React.useState(strengthenFaded);
  const [stun, setStun] = React.useState(stunFaded);
  const [ward, setWard] = React.useState(wardFaded);
  const [wound, setWound] = React.useState(woundFaded);

  const handleBaneClick = () => {
    if(bane === baneFaded) {
      setBane(baneActive);
    } else {
      setBane(baneFaded);
    }
  }

  const handleBlessClick = () => {
    if(bless === blessFaded) {
      setBless(blessActive);
    } else {
      setBless(blessFaded);
    }
  }

  const handleBrittleClick = () => {
    if(brittle === brittleFaded) {
      setBrittle(brittleActive);
    } else {
      setBrittle(brittleFaded);
    }
  }

  const handleCurseClick = () => {
    if(curse === curseFaded) {
      setCurse(curseActive);
    } else {
      setCurse(curseFaded);
    }
  }

  const handleDisarmClick = () => {
    if(disarm === disarmFaded) {
      setDisarm(disarmActive);
    } else {
      setDisarm(disarmFaded);
    }
  }

  const handleImmobilizeClick = () => {
    if(immobilize === immobilizeFaded) {
      setImmobilize(immobilizeActive);
    } else {
      setImmobilize(immobilizeFaded);
    }
  }

  const handleImpairClick = () => {
    if(impair === impairFaded) {
      setImpair(impairActive);
    } else {
      setImpair(impairFaded);
    }
  }

  const handleInvisibleClick = () => {
    if(invisible === invisibleFaded) {
      setInvisible(invisibleActive);
    } else {
      setInvisible(invisibleFaded);
    }
  }

  const handleMuddleClick = () => {
    if(muddle === muddleFaded) {
      setMuddle(muddleActive);
    } else {
      setMuddle(muddleFaded);
    }
  }

  const handlePoisonClick = () => {
    if(poison === poisonFaded) {
      setPoison(poisonActive);
    } else {
      setPoison(poisonFaded);
    }
  }

  const handleRegenerateClick = () => {
    if(regenerate === regenerateFaded) {
      setRegenerate(regenerateActive);
    } else {
      setRegenerate(regenerateFaded);
    }
  }

  const handleStrengthenClick = () => {
    if(strengthen === strengthenFaded) {
      setStrengthen(strengthenActive);
    } else {
      setStrengthen(strengthenFaded);
    }
  }

  const handleStunClick = () => {
    if(stun === stunFaded) {
      setStun(stunActive);
    } else {
      setStun(stunFaded);
    }
  }

  const handleWardClick = () => {
    if(ward === wardFaded) {
      setWard(wardActive);
    } else {
      setWard(wardFaded);
    }
  }

  const handleWoundClick = () => {
    if(wound === woundFaded) {
      setWound(woundActive);
    } else {
      setWound(woundFaded);
    }
  }


  return (
    <>
      {showStatModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5">
            <div className="flex w-full h-3/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 xxl:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md xxl:text-3xl font-semibold">
                    Edit
                  </h3>
                </div>
                {/*body*/}
                <div className="p-3 h-full w-full xxl:p-6 overflow-scroll">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center border-b-2">HP</div>
                    <div className="text-center border-b-2">Shield</div>
                    <div className="text-center border-b-2">Retaliate</div>
                    <input placeholder={props.hp} onChange={(e) => props.setHp(Number(e.target.value))} className="text-center border-b-2"></input>
                    <input placeholder={props.shield} onChange={(e) => props.setShield(Number(e.target.value))} className="text-center border-b-2"></input>
                    <input placeholder={props.retaliate} onChange={(e) => props.setRetaliate(Number(e.target.value))} className="text-center border-b-2"></input>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    <button className="" onClick={() => handleBaneClick()}>
                      <Image src={bane} alt="Bane" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleBlessClick()}>
                      <Image src={bless} alt="Bless" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleBrittleClick()}>
                      <Image src={brittle} alt="Brittle" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleCurseClick()}>
                      <Image src={curse} alt="Curse" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleDisarmClick()}>
                      <Image src={disarm} alt="Disarm" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleImmobilizeClick()}>
                      <Image src={immobilize} alt="Immobilize" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleImpairClick()}>
                      <Image src={impair} alt="Impair" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleInvisibleClick()}>
                      <Image src={invisible} alt="Invisible" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleMuddleClick()}>
                      <Image src={muddle} alt="Muddle" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handlePoisonClick()}>
                      <Image src={poison} alt="Poison" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleRegenerateClick()}>
                      <Image src={regenerate} alt="Regenerate" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleStrengthenClick()}>
                      <Image src={strengthen} alt="Strengthen" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleStunClick()}>
                      <Image src={stun} alt="Stun" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleWardClick()}>
                      <Image src={ward} alt="Ward" height={40} width={40} />
                    </button>
                    <button className="" onClick={() => handleWoundClick()}>
                      <Image src={wound} alt="Wound" height={40} width={40} />
                    </button>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 xxl:p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-3 py-1 xxl:px-6 xxl:py-2 text-sm outline-none focus:outline-none xxl:mr-1 xxl:mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowStatModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowStatModal(false)}
                  >
                    Confirm
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
}

export default EnemyStatModal;