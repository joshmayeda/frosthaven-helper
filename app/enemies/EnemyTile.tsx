import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@mui/material'
import monsterStatSleeve from 'public/img/monster-stats/monster-stat-sleeve.png';
import abaelHerder from 'public/img/monster-stats/fh-abael-herder-0.png';
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
            <div className="grid max-h-1/2 max-w-1/2 bg-white justify-center items-center self-center">
                <Image src={abaelHerder} alt="abael herder" height={350} width={350} className="" />
                <Image src={monsterStatSleeve} alt="monster stat sleeve" height={350} width={350} className="z-2" />
            </div>
        </>
    )
}


export default EnemyTile;