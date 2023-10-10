import React from "react";
import Image from 'next/image';

type AttackDrawModalProps = {
    showAttackDrawModal: boolean;
    setShowAttackDrawModal: React.Dispatch<React.SetStateAction<boolean>>;
    drawnCard: string;
}


const AttackDrawModal:React.FC<AttackDrawModalProps> = ({ showAttackDrawModal, setShowAttackDrawModal, drawnCard }) => {

  return (
    <>
      {showAttackDrawModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5">
            <div className="flex w-3/4 h-1/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                <Image src={drawnCard} height={300} width={300} alt="Drawn Card" />
              </div>
              <button className="absolute top-30 right-16 text-white" onClick={() => setShowAttackDrawModal(false)}>X</button>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default AttackDrawModal;