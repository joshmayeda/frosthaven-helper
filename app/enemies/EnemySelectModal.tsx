import React from "react";
import { Button, Checkbox, FormGroup, FormControlLabel, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { Combobox } from '@headlessui/react'
import EnemyTile from "./EnemyTile";
import dice from 'public/img/icons8-dice-80.png';

type EnemySelectModalProps = {
    showEnemyModal: boolean;
    setShowEnemyModal: React.Dispatch<React.SetStateAction<boolean>>;
    enemyNames: string[];
    enemyTiles: JSX.Element[];
    setEnemyTiles: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>;
}


const EnemySelectModal:React.FC<EnemySelectModalProps> = ({ showEnemyModal, setShowEnemyModal, enemyNames, enemyTiles, setEnemyTiles }) => {
  
  const [selectedEnemy, setSelectedEnemy] = React.useState(enemyNames[0]);
  const [query, setQuery] = React.useState('');
  const [level, setLevel] = React.useState('0');
  const [numberOfEnemies, setNumberOfEnemies] = React.useState('1');
  const [elite, setElite] = React.useState(false);

  const filteredEnemies =
    query === ''
      ? enemyNames
      : enemyNames.filter((enemy) => {
          return enemy.toLowerCase().includes(query.toLowerCase())
        })

  const handleConfirm = () => {
    setEnemyTiles([...enemyTiles, <EnemyTile name={selectedEnemy} level={level} elite={elite} key={enemyTiles.length} />]);
    setShowEnemyModal(false);
  }  

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  const handleEnemyNumberChange = (event: SelectChangeEvent) => {
    setNumberOfEnemies(event.target.value);
  };

  
  const handleEliteChange = () => {
    setElite(!elite);
  }

  return (
    <>
      <Button variant="contained" onClick={() => setShowEnemyModal(true)} className="fixed right-5 w-1/6 bottom-5 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">ADD ENEMY</Button>
      {showEnemyModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5">
            <div className="flex w-full h-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 xxl:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md xxl:text-3xl font-semibold">
                    Add Enemy
                  </h3>
                </div>
                {/*body*/}
                <div className="grid grid-cols-2 gap-2 p-3 w-full xxl:p-6 overflow-scroll">
                  <FormControl required size="small" className="h-2">
                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Level"
                      value={level}
                      onChange={handleLevelChange}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <FormControl required size="small" className="h-2">
                    <InputLabel id="demo-simple-select-label">#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="#"
                      value={numberOfEnemies}
                      onChange={handleEnemyNumberChange}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                    </Select>
                  </FormControl> */}
                  <FormGroup className="flex items-center text-black h-14 xxl:text-2xl self-center justify-self-center">
                    <FormControlLabel
                    control={<Checkbox />}
                    labelPlacement="start"
                    label="Elite"
                    checked={elite}
							      onClick={handleEliteChange}
                    />
                  </FormGroup>
                  <Combobox onChange={setSelectedEnemy}>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="border-2 w-full col-span-2" />
                      <Combobox.Options static className="mt-2 border-t-2">
                        {filteredEnemies.map((enemy) => (
                          <Combobox.Option key={enemy} value={enemy} className="border-b">
                            {enemy}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                  </Combobox>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 xxl:p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-3 py-1 xxl:px-6 xxl:py-2 text-sm outline-none focus:outline-none xxl:mr-1 xxl:mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEnemyModal(false)}
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
}

export default EnemySelectModal;