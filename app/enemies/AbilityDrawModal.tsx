import React from "react";

type AbilityDrawModalProps = {
    showAbilityDrawModal: boolean;
    setShowAbilityDrawModal: React.Dispatch<React.SetStateAction<boolean>>;
    enemyTiles: JSX.Element[];
    setEnemyTiles: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>;
}


const AbilityDrawModal:React.FC<AbilityDrawModalProps> = ({ showAbilityDrawModal, setShowAbilityDrawModal, enemyTiles, setEnemyTiles }) => {

  return (
    <>
      {showAbilityDrawModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5">
            <div className="flex w-full h-2/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 xxl:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md xxl:text-3xl font-semibold">
                    Edit Enemy Attack Modifier Deck
                  </h3>
                </div>
                {/*body*/}
                <div className="grid grid-cols-2 gap-2 p-3 h-full w-full xxl:p-6 overflow-scroll">
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 xxl:p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-3 py-1 xxl:px-6 xxl:py-2 text-sm outline-none focus:outline-none xxl:mr-1 xxl:mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAbilityDrawModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
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

export default AbilityDrawModal;