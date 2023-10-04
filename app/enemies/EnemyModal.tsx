import React from "react";
import { Button } from '@mui/material'
import { Combobox } from '@headlessui/react'

type EnemyModalProps = {
    showEnemyModal: boolean;
    setShowEnemyModal: React.Dispatch<React.SetStateAction<boolean>>;
    enemyTiles: JSX.Element[];
}

const enemies = [
  'Abael Herder',
  'Algox Icespeaker',
  'Algox Snowpiercer',
  'Ancient Artillery',
  'Archer',
  'Boss',
  'Burrowing Blade',
  'Chaos Demon',
  'Deep Terror',
  'Earth Demon',
  'Flame Demon',
  'Flaming Bladespinner',
  'Frost Demon',
  'Frozen Corpse',
]

const EnemyModal:React.FC<EnemyModalProps> = ({ showEnemyModal, setShowEnemyModal, enemyTiles }) => {
  
  const [selectedEnemy, setSelectedEnemy] = React.useState(enemies[0]);
  const [query, setQuery] = React.useState('');

  const filteredEnemies =
    query === ''
      ? enemies
      : enemies.filter((enemy) => {
          return enemy.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <>
      <Button variant="contained" onClick={() => setShowEnemyModal(true)} className="fixed right-10 bottom-10 bg-green-500 text-black">ADD ENEMY</Button>
      {showEnemyModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 h-1/2 my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Enemy
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEnemyModal(false)}
                  >
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-scroll">
                <Combobox onChange={setSelectedEnemy}>
                  <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="border-2" />
                  <Combobox.Options>
                    {filteredEnemies.map((enemy) => (
                      <Combobox.Option key={enemy} value={enemy}>
                        {enemy}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEnemyModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEnemyModal(false)}
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
}

export default EnemyModal;