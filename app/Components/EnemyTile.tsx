import React, { useState, useEffect } from 'react';
// import WebFont from 'webfontloader';

type EnemyTileProps = {
    enemy: number;
}

const EnemyTile:React.FC<EnemyTileProps> = ({ enemy }) => {
    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ['Pirata One', 'sans-serif']
    //         }
    //     });
    // }, []);

    return (
        <div className="grid grid-cols-3 gap-10 border border-orange-900 w-11/12 h-20 bg-white">
            <h1 className="text-black text-3xl">EnemyTile{enemy}</h1>
            <h1 className="text-black text-3xl">EnemyTile{enemy}</h1>
            <h1 className="text-black text-3xl">EnemyTile{enemy}</h1>
        </div>
    )
}

export default EnemyTile;