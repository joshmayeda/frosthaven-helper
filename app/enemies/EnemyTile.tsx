import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
// import WebFont from 'webfontloader';

type EnemyTileProps = {
    enemyNum: number;
    dice: StaticImageData;
}

const EnemyTile:React.FC<EnemyTileProps> = ({ enemyNum, dice }) => {
    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ['Pirata One', 'sans-serif']
    //         }
    //     });
    // }, []);

    return (
        <>
            <div className="flex flex-row gap-10 h-48 w-full bg-white content-center items-center self-start">
                <h1 className="flex justify-center items-center text-black text-3xl basis-4/12 border border-black h-40">{`Name and Num${enemyNum}`}</h1>
                <h1 className="flex justify-center items-center text-black text-3xl basis-4/12 border border-black h-40">{`Hp/Buffs/Conds${enemyNum}`}</h1>
                <h1 className="flex justify-center items-center text-black text-3xl basis-2/12 border border-black h-40">{`Ability${enemyNum}`}</h1>
                <Image src={dice} alt="Dice" className="flex justify-center items-center aspect-square basis-2/12 border border-black h-40"/>
            </div>
        </>
    )
}


export default EnemyTile;