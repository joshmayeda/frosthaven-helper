import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import EnemyStatModal from './EnemyStatModal';
import { Button } from '@mui/material'

interface Decks {
    [name: string]: string[];
}

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

const decks: Decks = {
    "abael-herder": [
        "/img/monster-abilities/abael-herder/fh-ma-ah-1.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-2.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-3.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-4.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-5.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-6.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-7.png",
        "/img/monster-abilities/abael-herder/fh-ma-ah-8.png",
    ],
    "algox-icespeaker": [
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-1.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-2.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-3.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-4.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-5.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-6.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-7.png",
        "/img/monster-abilities/algox-icespeaker/fh-ma-ai-8.png",
    ],
    "algox-snowspeaker": [
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-1.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-2.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-3.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-4.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-5.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-6.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-7.png",
        "/img/monster-abilities/algox-snowspeaker/fh-ma-as-8.png",
    ],
    "ancient-artillery": [
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-1.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-2.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-3.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-4.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-5.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-6.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-7.png",
        "/img/monster-abilities/ancient-artillery/fh-ma-aa-8.png",
    ],
    "archer": [
        "/img/monster-abilities/archer/fh-ma-ar-1.png",
        "/img/monster-abilities/archer/fh-ma-ar-2.png",
        "/img/monster-abilities/archer/fh-ma-ar-3.png",
        "/img/monster-abilities/archer/fh-ma-ar-4.png",
        "/img/monster-abilities/archer/fh-ma-ar-5.png",
        "/img/monster-abilities/archer/fh-ma-ar-6.png",
        "/img/monster-abilities/archer/fh-ma-ar-7.png",
        "/img/monster-abilities/archer/fh-ma-ar-8.png",
    ],
    "boss": [
        "/img/monster-abilities/boss/fh-ma-bo-1.png",
        "/img/monster-abilities/boss/fh-ma-bo-2.png",
        "/img/monster-abilities/boss/fh-ma-bo-3.png",
        "/img/monster-abilities/boss/fh-ma-bo-4.png",
        "/img/monster-abilities/boss/fh-ma-bo-5.png",
        "/img/monster-abilities/boss/fh-ma-bo-6.png",
        "/img/monster-abilities/boss/fh-ma-bo-7.png",
        "/img/monster-abilities/boss/fh-ma-bo-8.png",
    ],
    "burrowing-blade": [
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-1.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-2.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-3.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-4.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-5.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-6.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-7.png",
        "/img/monster-abilities/burrowing-blade/fh-ma-bb-8.png",
    ],
    "chaos-demon": [
        "/img/monster-abilities/chaos-demon/fh-ma-cd-1.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-2.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-3.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-4.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-5.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-6.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-7.png",
        "/img/monster-abilities/chaos-demon/fh-ma-cd-8.png",
    ],
    "deep-terror": [
        "/img/monster-abilities/deep-terror/fh-ma-dt-1.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-2.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-3.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-4.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-5.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-6.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-7.png",
        "/img/monster-abilities/deep-terror/fh-ma-dt-8.png",
    ],
    "earth-demon": [
        "/img/monster-abilities/earth-demon/fh-ma-ed-1.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-2.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-3.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-4.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-5.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-6.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-7.png",
        "/img/monster-abilities/earth-demon/fh-ma-ed-8.png",
    ],
    "flame-demon": [
        "/img/monster-abilities/flame-demon/fh-ma-fld-1.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-2.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-3.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-4.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-5.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-6.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-7.png",
        "/img/monster-abilities/flame-demon/fh-ma-fld-8.png",
    ],
    "flaming-bladespinner": [
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-1.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-2.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-3.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-4.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-5.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-6.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-7.png",
        "/img/monster-abilities/flaming-bladespinner/fh-ma-fbs-8.png",
    ],
    "frost-demon": [
        "/img/monster-abilities/frost-demon/fh-ma-frd-1.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-2.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-3.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-4.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-5.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-6.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-7.png",
        "/img/monster-abilities/frost-demon/fh-ma-frd-8.png",
    ],
    "frozen-corpse": [
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-1.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-2.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-3.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-4.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-5.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-6.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-7.png",
        "/img/monster-abilities/frozen-corpse/fh-ma-fc-8.png",
    ],
    "guard": [
        "/img/monster-abilities/guard/fh-ma-gu-1.png",
        "/img/monster-abilities/guard/fh-ma-gu-2.png",
        "/img/monster-abilities/guard/fh-ma-gu-3.png",
        "/img/monster-abilities/guard/fh-ma-gu-4.png",
        "/img/monster-abilities/guard/fh-ma-gu-5.png",
        "/img/monster-abilities/guard/fh-ma-gu-6.png",
        "/img/monster-abilities/guard/fh-ma-gu-7.png",
        "/img/monster-abilities/guard/fh-ma-gu-8.png",
    ],
    "harrower-infester": [
        "/img/monster-abilities/harrower-infester/fh-ma-hi-1.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-2.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-3.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-4.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-5.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-6.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-7.png",
        "/img/monster-abilities/harrower-infester/fh-ma-hi-8.png",
    ],
    "hound": [
        "/img/monster-abilities/hound/fh-ma-ho-1.png",
        "/img/monster-abilities/hound/fh-ma-ho-2.png",
        "/img/monster-abilities/hound/fh-ma-ho-3.png",
        "/img/monster-abilities/hound/fh-ma-ho-4.png",
        "/img/monster-abilities/hound/fh-ma-ho-5.png",
        "/img/monster-abilities/hound/fh-ma-ho-6.png",
        "/img/monster-abilities/hound/fh-ma-ho-7.png",
        "/img/monster-abilities/hound/fh-ma-ho-8.png",
    ],
    "ice-wraith": [
        "/img/monster-abilities/ice-wraith/fh-ma-iw-1.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-2.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-3.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-4.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-5.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-6.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-7.png",
        "/img/monster-abilities/ice-wraith/fh-ma-iw-8.png",
    ],
    "imp": [
        "/img/monster-abilities/imp/fh-ma-im-1.png",
        "/img/monster-abilities/imp/fh-ma-im-2.png",
        "/img/monster-abilities/imp/fh-ma-im-3.png",
        "/img/monster-abilities/imp/fh-ma-im-4.png",
        "/img/monster-abilities/imp/fh-ma-im-5.png",
        "/img/monster-abilities/imp/fh-ma-im-6.png",
        "/img/monster-abilities/imp/fh-ma-im-7.png",
        "/img/monster-abilities/imp/fh-ma-im-8.png",
    ],
    "lightning-eel": [
        "/img/monster-abilities/lightning-eel/fh-ma-le-1.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-2.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-3.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-4.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-5.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-6.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-7.png",
        "/img/monster-abilities/lightning-eel/fh-ma-le-8.png",
    ],
    "living-bones": [
        "/img/monster-abilities/living-bones/fh-ma-lb-1.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-2.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-3.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-4.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-5.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-6.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-7.png",
        "/img/monster-abilities/living-bones/fh-ma-lb-8.png",
    ],
    "living-doom": [
        "/img/monster-abilities/living-doom/fh-ma-ld-1.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-2.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-3.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-4.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-5.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-6.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-7.png",
        "/img/monster-abilities/living-doom/fh-ma-ld-8.png",
    ],
    "living-spirit": [
        "/img/monster-abilities/living-spirit/fh-ma-ls-1.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-2.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-3.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-4.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-5.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-6.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-7.png",
        "/img/monster-abilities/living-spirit/fh-ma-ls-8.png",
    ],
    "lurker-clawcrusher": [
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-1.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-2.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-3.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-4.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-5.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-6.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-7.png",
        "/img/monster-abilities/lurker-clawcrusher/fh-ma-luc-8.png",
    ],
    "lurker-mindsnipper": [
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-1.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-2.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-3.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-4.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-5.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-6.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-7.png",
        "/img/monster-abilities/lurker-mindsnipper/fh-ma-lum-8.png",
    ],
    "lurker-soldier": [
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-1.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-2.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-3.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-4.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-5.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-6.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-7.png",
        "/img/monster-abilities/lurker-soldier/fh-ma-lus-8.png",
    ],
    "lurker-wavethrower": [
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-1.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-2.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-3.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-4.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-5.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-6.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-7.png",
        "/img/monster-abilities/lurker-wavethrower/fh-ma-luw-8.png",
    ],
    "night-demon": [
        "/img/monster-abilities/night-demon/fh-ma-nd-1.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-2.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-3.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-4.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-5.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-6.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-7.png",
        "/img/monster-abilities/night-demon/fh-ma-nd-8.png",
    ],
    "ooze": [
        "/img/monster-abilities/ooze/fh-ma-oo-1.png",
        "/img/monster-abilities/ooze/fh-ma-oo-2.png",
        "/img/monster-abilities/ooze/fh-ma-oo-3.png",
        "/img/monster-abilities/ooze/fh-ma-oo-4.png",
        "/img/monster-abilities/ooze/fh-ma-oo-5.png",
        "/img/monster-abilities/ooze/fh-ma-oo-6.png",
        "/img/monster-abilities/ooze/fh-ma-oo-7.png",
        "/img/monster-abilities/ooze/fh-ma-oo-8.png",
    ],
    "piranha-pig": [
        "/img/monster-abilities/piranha-pig/fh-ma-pp-1.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-2.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-3.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-4.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-5.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-6.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-7.png",
        "/img/monster-abilities/piranha-pig/fh-ma-pp-8.png",
    ],
    "polar-bear": [
        "/img/monster-abilities/polar-bear/fh-ma-pb-1.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-2.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-3.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-4.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-5.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-6.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-7.png",
        "/img/monster-abilities/polar-bear/fh-ma-pb-8.png",
    ],
    "priest": [
        "/img/monster-abilities/priest/fh-ma-pr-1.png",
        "/img/monster-abilities/priest/fh-ma-pr-2.png",
        "/img/monster-abilities/priest/fh-ma-pr-3.png",
        "/img/monster-abilities/priest/fh-ma-pr-4.png",
        "/img/monster-abilities/priest/fh-ma-pr-5.png",
        "/img/monster-abilities/priest/fh-ma-pr-6.png",
        "/img/monster-abilities/priest/fh-ma-pr-7.png",
        "/img/monster-abilities/priest/fh-ma-pr-8.png",
    ],
    "rending-drake": [
        "/img/monster-abilities/rending-drake/fh-ma-rd-1.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-2.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-3.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-4.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-5.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-6.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-7.png",
        "/img/monster-abilities/rending-drake/fh-ma-rd-8.png",
    ],
    "robotic-boltshooter": [
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-1.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-2.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-3.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-4.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-5.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-6.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-7.png",
        "/img/monster-abilities/robotic-boltshooter/fh-ma-rb-8.png",
    ],
    "ruined-machine": [
        "/img/monster-abilities/ruined-machine/fh-ma-rm-1.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-2.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-3.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-4.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-5.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-6.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-7.png",
        "/img/monster-abilities/ruined-machine/fh-ma-rm-8.png",
    ],
    "savvas-icestorm": [
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-1.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-2.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-3.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-4.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-5.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-6.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-7.png",
        "/img/monster-abilities/savvas-icestorm/fh-ma-si-8.png",
    ],
    "savvas-lavaflow": [
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-1.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-2.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-3.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-4.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-5.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-6.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-7.png",
        "/img/monster-abilities/savvas-lavaflow/fh-ma-sl-8.png",
    ],
    "scout": [
        "/img/monster-abilities/scout/fh-ma-sc-1.png",
        "/img/monster-abilities/scout/fh-ma-sc-2.png",
        "/img/monster-abilities/scout/fh-ma-sc-3.png",
        "/img/monster-abilities/scout/fh-ma-sc-4.png",
        "/img/monster-abilities/scout/fh-ma-sc-5.png",
        "/img/monster-abilities/scout/fh-ma-sc-6.png",
        "/img/monster-abilities/scout/fh-ma-sc-7.png",
        "/img/monster-abilities/scout/fh-ma-sc-8.png",
    ],
    "shrike-fiend": [
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-1.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-2.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-3.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-4.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-5.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-6.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-7.png",
        "/img/monster-abilities/shrike-fiend/fh-ma-sf-8.png",
    ],
    "spitting-drake": [
        "/img/monster-abilities/spitting-drake/fh-ma-spd-1.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-2.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-3.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-4.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-5.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-6.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-7.png",
        "/img/monster-abilities/spitting-drake/fh-ma-spd-8.png",
    ],
    "steel-automaton": [
        "/img/monster-abilities/steel-automaton/fh-ma-sa-1.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-2.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-3.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-4.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-5.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-6.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-7.png",
        "/img/monster-abilities/steel-automaton/fh-ma-sa-8.png",
    ],
    "sun-demon": [
        "/img/monster-abilities/sun-demon/fh-ma-sud-1.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-2.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-3.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-4.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-5.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-6.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-7.png",
        "/img/monster-abilities/sun-demon/fh-ma-sud-8.png",
    ],
    "wind-demon": [
        "/img/monster-abilities/wind-demon/fh-ma-wd-1.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-2.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-3.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-4.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-5.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-6.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-7.png",
        "/img/monster-abilities/wind-demon/fh-ma-wd-8.png",
    ],
}

type EnemyTileProps = {
    name: string;
    level: string;
    boss: boolean;
}

const EnemyTile:React.FC<EnemyTileProps> = ({ name, level, boss }) => {
    console.log(name, level, boss);

    const [abilityDeck, setAbilityDeck] = useState<string[]>([]);
    const [abilityDiscardPile, setAbilityDiscardPile] = useState<string[]>([]);
    const [showAbilityCard, setShowAbilityCard] = useState(false);

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

    const [conditions, setConditions] = useState<string[]>([]);

    const [showStatModal, setShowStatModal] = useState(false);
    const [modalProps, setModalProps] = useState<any>({});

    const handleButtonClick = (
        hpNum: number,
        setHpNum: React.Dispatch<React.SetStateAction<number>>,
        shieldNum: number,
        setShieldNum: React.Dispatch<React.SetStateAction<number>>,
        retaliateNum: number,
        setRetaliateNum: React.Dispatch<React.SetStateAction<number>>,
    ) => {
        const propsToPass = {
            hp: hpNum,
            setHp: setHpNum,
            shield: shieldNum,
            setShield: setShieldNum,
            retaliate: retaliateNum,
            setRetaliate: setRetaliateNum,
        }
        setShowStatModal(true);
        setModalProps(propsToPass);
    }

    boss = bossNames.includes(name);
    
    var statCard = `/img/monster-stats/processed/fh-${name}-${level}.png`
    var folderName = name;
    if(name.includes("archer")) {
        folderName = "archer";
    } else if(name.includes("guard")) {
        folderName = "guard";
    } else if(name.includes("imp")) {
        folderName = "imp";
    } else if(name.includes("priest")) {
        folderName = "priest";
    } else if(name.includes("scout")) {
        folderName = "scout";
    } else if(boss) {
        folderName = "boss";
    }
    var abilityDeckBack = `/img/monster-abilities/${folderName}/back.png`
    
    useEffect(() => {
        async function fetchAbilityDeck() {
            try {
                let deckToFetch = decks[name];

                if (!deckToFetch) {
                    if (boss) {
                        deckToFetch = decks["boss"];
                    } else if (name.includes("archer")) {
                        deckToFetch = decks["archer"];
                    } else if (name.includes("guard")) {
                        deckToFetch = decks["guard"];
                    } else if (name.includes("imp")) {
                        deckToFetch = decks["imp"];
                    } else if (name.includes("priest")) {
                        deckToFetch = decks["priest"];
                    } else if (name.includes("scout")) {
                        deckToFetch = decks["scout"];
                    }
                }

                let currentIndex = deckToFetch.length;
                let randomIndex;

                while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [deckToFetch[currentIndex], deckToFetch[randomIndex]] = [
                    deckToFetch[randomIndex],
                    deckToFetch[currentIndex],
                ];
                }
                console.log("deckToFetch: ", deckToFetch);
                setAbilityDeck(deckToFetch);

            } catch (error) {
                console.error('Error fetching ability deck:', error);
            }
        }

        fetchAbilityDeck();
    }, [name, boss]);

    const drawAbilityCard = () => {
        let tempDeck = [...abilityDeck];
        let tempDiscardPile = [...abilityDiscardPile];
        let tempCard = tempDeck.pop();
        if (tempCard) {
          tempDiscardPile.push(tempCard);
        }
        setAbilityDeck(tempDeck);
        setAbilityDiscardPile(tempDiscardPile);
        setShowAbilityCard(true);
      }

      const reshuffleDeck = () => {
        let tempDeck = [...abilityDiscardPile];
        let currentIndex = tempDeck.length;
        let randomIndex;
    
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [tempDeck[currentIndex], tempDeck[randomIndex]] = [
            tempDeck[randomIndex],
            tempDeck[currentIndex],
          ];
        }
        setAbilityDeck(tempDeck);
        setAbilityDiscardPile([]);
      }

    return (
        <>
            <div className="flex flex-col relative h-screen gap-6">

                <div className="flex gap-10 h-16 items-center justify-center mt-4">
                    <div className="flex relative ring ring-white h-full w-28 items-center justify-center rounded-lg">
                        {abilityDeck.length > 0 ? (
                            <Button disableRipple onClick={() => drawAbilityCard()} className="w-full h-full">
                                <Image src={abilityDeckBack} alt="Ability Deck Back" fill={true} className="relative rounded-lg"/>
                            </Button>
                        ) : (
                            <Button disableRipple onClick={() => reshuffleDeck()} className="w-full h-full text-white">
                                Shuffle?
                            </Button>
                        )}
                    </div>

                    <div className="flex relative ring ring-white h-full w-28 items-center justify-center rounded-lg">
                        {abilityDiscardPile.length > 0 ? (
                            <Button disableRipple onClick={() => setShowAbilityCard(true)} className="w-full h-full">
                                <Image src={abilityDiscardPile[abilityDiscardPile.length - 1]} alt={abilityDiscardPile[abilityDiscardPile.length - 1]} fill={true} className="relative rounded-lg"/>
                            </Button>
                        ) : (
                            <div className="text-white">Discard Pile</div>
                        )}
                    </div>
                </div>
                
                {showAbilityCard ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5">
                            <Button disableRipple onClick={() => setShowAbilityCard(false)}>
                                <Image src={abilityDiscardPile[abilityDiscardPile.length - 1]} alt={abilityDiscardPile[abilityDiscardPile.length - 1]} width={300} height={300} className="relative"/>
                            </Button>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                <Image src={statCard} alt="stat card" width={350} height={350} className="self-center max-w-11/12" />

                {boss ? (
                    <>
                        <Button disableRipple onClick={() => handleButtonClick(hp1, setHp1, shield1, setShield1, retaliate1, setRetaliate1)} className="absolute flex flex-col left-4 top-88 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp1}</h1>
                            <h1>Shield: {shield1}</h1>
                            <h1>Retal.: {retaliate1}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp2, setHp2, shield2, setShield2, retaliate2, setRetaliate2)} className="absolute flex flex-col left-24 top-88 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp2}</h1>
                            <h1>Shield: {shield2}</h1>
                            <h1>Retal.: {retaliate2}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp3, setHp3, shield3, setShield3, retaliate3, setRetaliate3)} className="absolute flex flex-col left-48 top-88 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp3}</h1>
                            <h1>Shield: {shield3}</h1>
                            <h1>Retal.: {retaliate3}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp4, setHp4, shield4, setShield4, retaliate4, setRetaliate4)} className="absolute flex flex-col left-68 top-88 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp4}</h1>
                            <h1>Shield: {shield4}</h1>
                            <h1>Retal.: {retaliate4}</h1>
                        </Button>

                        <EnemyStatModal showStatModal={showStatModal} setShowStatModal={setShowStatModal} conditions={conditions} setConditions={setConditions} props={modalProps} />
                    </>
                ) : (
                    <>
                        <Button disableRipple onClick={() => handleButtonClick(hp1, setHp1, shield1, setShield1, retaliate1, setRetaliate1)} className="absolute flex flex-col left-4 top-48 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp1}</h1>
                            <h1>Shield: {shield1}</h1>
                            <h1>Retaliate: {retaliate1}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp2, setHp2, shield2, setShield2, retaliate2, setRetaliate2)} className="absolute flex flex-col left-2 top-68 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp2}</h1>
                            <h1>Shield: {shield2}</h1>
                            <h1>Retaliate: {retaliate2}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp3, setHp3, shield3, setShield3, retaliate3, setRetaliate3)} className="absolute flex flex-col left-16 top-92 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp3}</h1>
                            <h1>Shield: {shield3}</h1>
                            <h1>Retaliate: {retaliate3}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp4, setHp4, shield4, setShield4, retaliate4, setRetaliate4)} className="absolute flex flex-col left-48 top-92 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp4}</h1>
                            <h1>Shield: {shield4}</h1>
                            <h1>Retaliate: {retaliate4}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp5, setHp5, shield5, setShield5, retaliate5, setRetaliate5)} className="absolute flex flex-col left-64 top-68 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp5}</h1>
                            <h1>Shield: {shield5}</h1>
                            <h1>Retaliate: {retaliate5}</h1>
                        </Button>

                        <Button disableRipple onClick={() => handleButtonClick(hp6, setHp6, shield6, setShield6, retaliate6, setRetaliate6)} className="absolute flex flex-col left-64 top-48 h-4/12 z-10 text-white text-sm">
                            <h1>HP: {hp6}</h1>
                            <h1>Shield: {shield6}</h1>
                            <h1>Retaliate: {retaliate6}</h1>
                        </Button>

                        <EnemyStatModal showStatModal={showStatModal} setShowStatModal={setShowStatModal} conditions={conditions} setConditions={setConditions} props={modalProps} />
                    </>
                )}
                <Button variant="contained" className="fixed left-24 bottom-5 w-1/6 xxl:right-10 xxl:bottom-10 bg-green-500 text-black">Ability</Button>        
            </div>
        </>
    )
}


export default EnemyTile;