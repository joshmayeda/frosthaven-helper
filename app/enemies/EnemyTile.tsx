import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@mui/material'
import abaelHerder from 'public/img/monster-stats/processed/fh-abael-herder-0.png';

const bossNames = [
    "algox-stormcaller",
    "elder-ooze",
    "fish-king",
    "fracture-of-the-deep",
    "frozen-fist",
    "harbinger-of-shadow",
    "lord-of-chaos",
    "orphan",
    "prince-of-frost",
    "program-director",
    "render",
    "seeker-of-the-abyss",
    "snowdancer",
    "the-collector",
    "the-relic",
    "vestige-of-the-imprisoned-god",
]

var boss:boolean = false;

type EnemyTileProps = {
    name: string;
    level: string;
    elite: boolean;
}

const EnemyTile:React.FC<EnemyTileProps> = ({ name, level, elite }) => {

    const [hp1, setHp1] = useState(0);
    const [hp2, setHp2] = useState(0);
    const [hp3, setHp3] = useState(0);
    const [hp4, setHp4] = useState(0);
    const [hp5, setHp5] = useState(0);
    const [hp6, setHp6] = useState(0);

    const [shield1, setShield1] = useState(0);
    const [shield2, setShield2] = useState(0);
    const [shield3, setShield3] = useState(0);
    const [shield4, setShield4] = useState(0);
    const [shield5, setShield5] = useState(0);
    const [shield6, setShield6] = useState(0);

    const [retaliate1, setRetaliate1] = useState(0);
    const [retaliate2, setRetaliate2] = useState(0);
    const [retaliate3, setRetaliate3] = useState(0);
    const [retaliate4, setRetaliate4] = useState(0);
    const [retaliate5, setRetaliate5] = useState(0);
    const [retaliate6, setRetaliate6] = useState(0);

    if (bossNames.includes(name)) {
        boss = true;
    }
    var statCard = `/img/monster-stats/processed/fh-${name}-${level}.png`

    return (
        <>
            <div className="flex h-screen bg-white justify-center items-center snap-start">
                
                <div>
                    <Image src={statCard} alt={name} height={350} width={350} className="min-h-1/2 min-w-1/2 max-h-11/12 max-w-11/12" />

                    {boss ? (
                        <>
                            <Button disableRipple className="absolute flex flex-col left-4 top-88 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp1}</h1>
                                <h1>Shield: {shield1}</h1>
                                <h1>Retal.: {retaliate1}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-24 top-88 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp2}</h1>
                                <h1>Shield: {shield2}</h1>
                                <h1>Retal.: {retaliate2}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-48 top-88 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp3}</h1>
                                <h1>Shield: {shield3}</h1>
                                <h1>Retal.: {retaliate3}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-68 top-88 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp4}</h1>
                                <h1>Shield: {shield4}</h1>
                                <h1>Retal.: {retaliate4}</h1>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button disableRipple className="absolute flex flex-col left-4 top-48 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp1}</h1>
                                <h1>Shield: {shield1}</h1>
                                <h1>Retaliate: {retaliate1}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-2 top-68 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp2}</h1>
                                <h1>Shield: {shield2}</h1>
                                <h1>Retaliate: {retaliate2}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-16 top-92 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp3}</h1>
                                <h1>Shield: {shield3}</h1>
                                <h1>Retaliate: {retaliate3}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-48 top-92 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp4}</h1>
                                <h1>Shield: {shield4}</h1>
                                <h1>Retaliate: {retaliate4}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-64 top-68 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp5}</h1>
                                <h1>Shield: {shield5}</h1>
                                <h1>Retaliate: {retaliate5}</h1>
                            </Button>

                            <Button disableRipple className="absolute flex flex-col left-64 top-48 h-4/12 z-10 text-white text-sm">
                                <h1>HP: {hp6}</h1>
                                <h1>Shield: {shield6}</h1>
                                <h1>Retaliate: {retaliate6}</h1>
                            </Button>
                        </>
                    )}

                </div>           
            </div>
        </>
    )
}


export default EnemyTile;