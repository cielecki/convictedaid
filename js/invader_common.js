////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Invading armies common stuff
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createStandardSiegeMachines(SIEGE_ATTACK_TRAIT, siegeTraits) {
    if (siegeTraits === null) {
        siegeTraits = [];
    }

    var RAM_TRAIT = {'name': 'Ram', description: "A Battering Ram provides a special attack in Step 13 of the Close Combat phase. A Battering Ram moves like all other Melee Units" };
    var BALLISTA_TRAIT = {'name': 'Attack', description: "A Ballista allows for two attacks (on one or two targets) with RFS equal to a dice roll 1d3 (the RFS is set separately for each one of two available attacks). A Ballista can attack Melee Units or Ranged Units. It’s not able to attack other Siege Machines or destroy Forti!cation elements" };
    var CATAPULT_TRAIT = {'name': 'Attack', description: "Allows for one attack (on one target) with RFS=3 increased  by a dice roll 1d3. A Catapult can attack Melee Units, Ranged Units, other Siege Machines as well as Forti!cation elements.1,2,3,4 pips on D6 – attack on units5,6 pips on D6 – attack on Forti!cationsIf there are no units, catapult always attacks Forti!cations." };
    var TREBUCHET_TRAIT = {'name': 'Attack', description: "A Trebuchet allows for one attack (on one target) with RFS=4 increased by a dice roll 1d3. A Trebuchet is able to attack only Forti!cation elements." };
    var COVER_TRAIT = {'name': 'Cover', description: "A Cover provides additional protection for the Invader’s Ranged Units by increasing their EN +2 (applys to all Ranged Units in a speci!c Deployment Zone and works the same way as Forti!cations with EN=2). If two or more Covers are placed in one Deployment Zone their values are not summed up. The only difference is that it’s more dif!cult for the defender’s units to destroy the Cover (all of the Covers need to be destroyed in order to eliminate their effect)." };
    var BRIDGE_TRAIT = {'name': 'Bridge', description: "Using a bridge eliminates all effects caused by a ditch/moat/sharpened stakes. Across every straight section of a ditch/moat/ sharpened stakes a maximum of 2 Bridges can be thrown. One Bridge is able to serve all of the invader’s troops. Having more Bridges on one section of a ditch/moat/ sharpened stakes means only that it’s going to be harder for the defender’s units to destroy all of the bridges. Note: A bridge is treated like an element placed in a Deployment Zone." };
    var SIEGE_TOWER_TRAIT = {'name': 'Attack', description: "A Siege Tower is extremely useful during a direct assault on a wall. A Combat Group attacking from a Siege Tower (we assign a Siege Tower to the strongest speci!c Combat Group at the  beginning of Step 10 - to select strongest Group we add ST of the front units + SU of the others) will completely ignore the defender’s forti!cation bonus during an assault. In addition, a defender’s Ranged Fire Strength is reduced by 1 any time they are targeting enemy units in a Foreground Zone of a forti!cation section with a Siege Tower . A Siege Tower moves like all other Melee Units." };

    return [
        { name: 'Battering ram', ST: 0, SU: 0, EN: 5, RST: 0, icon:'images/batteringram.png', size:'16', traits:[RAM_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Ballista', ST: 0, SU: 0, EN: 3, RST: '2xd3', icon:'images/ballista.png', size:'16', traits:[BALLISTA_TRAIT, SIEGE_ATTACK_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Catapult', ST: 0, SU: 0, EN: 3, RST: '3+d3', icon:'images/catapult.png', size:'16', traits:[CATAPULT_TRAIT, SIEGE_ATTACK_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Trebuchet', ST: 0, SU: 0, EN: 5, RST: '4+d3', icon:'images/trebuchet.png', size:'16', traits:[TREBUCHET_TRAIT, SIEGE_ATTACK_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Cover', ST: 0, SU: 0, EN: 6, RST: 0, icon:'images/cover.png', size:'16', traits:[COVER_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Bridge', ST: 0, SU: 0, EN: 4, RST: 0, icon:'images/bridge.png', size:'16', traits:[BRIDGE_TRAIT].concat(siegeTraits.slice(0))},
        { name: 'Siege Tower', ST: 0, SU: 0, EN: 7, RST: 0, icon:'images/siegetower.png', size:'16', traits:[SIEGE_TOWER_TRAIT].concat(siegeTraits.slice(0))}
    ];
}

var INVADER_TYPES = {};

function addInvaderType(type) {
    INVADER_TYPES[type.name] = type;
}