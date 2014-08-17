////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Beasts settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    var WOLF_JUMP = {name: 'Jump', description: 'a Wolf despite not having a ladder climbing ability can jump to defenders standing on Fences and level 1 Forti!cations (Palisade).'};
    var WALKING_ON_WALLS = {name: 'Walking on Walls', description: 'Giant Spiders do not need ladders to climb walls. Therefore, a forti!cation section’s current Endurance level bonus is reduced by 50% (rounding up). In addition Giant Spiders are immune to any negative effects caused by ditches.'};
    var FLIGHT = {name: 'Flight', description: 'This unit is able to perform air attacks on defenders. Standard rules apply to air attacks, but thanks to their flight ability, they ignore the effects of ditches, moats and sharpened stakes.'};
    var DRAGON_FIRE = {name: 'Dragon fire', description: 'If a dragon survives a fight at the end of every Step 12 it can destroy one additional weakest defender’s unit from the group it fought.'};

    var THE_CALL_OF_THE_WILD  = {minDifficulty: 2, 'name': 'The Call of the Wild', description: 'Increase the ST characteristic by 1'};
    var SURPRISE_ATTACK  = {minDifficulty: 3, 'name': 'Surprise attack', description: 'Beasts do not abandon Loot. Players do not get any spoils of war after defeating Beasts.'};
    var DODGING = {name: 'Dodging', description: 'This ability penalizes every Ranged Unit that is trying to hit a Beast unit with a -1 modi!er to their RFS.'}

    addInvaderType({
        'name': 'Beasts',
        'morale': 6,
        'tactics': 1,
        'difficulty': 1,
        'forces': [
            {'mad': [2, 0, 0, 0, 0, 0]}, //Round 1
            {'mad': [4, 2, 0, 0, 0, 0]}, //Round 2
            {'mad': [0, 5, 0, 0, 0, 0]}, //Round 3
            {'mad': [0, 6, 0, 0, 0, 0]}, //Round 4
            {'mad': [0, 8, 0, 0, 0, 0]}, //Round 5
            {'mad': [0, 8, 1, 1, 0, 0]}, //Round 6
            {'mad': [0, 8, 3, 3, 0, 0]}, //Round 7
            {'mad': [0, 9, 4, 4, 0, 0]}, //Round 8
            {'mad': [0, 9, 6, 4, 1, 0]}, //Round 9
            {'mad': [0, 9, 7, 4, 1, 1]}, //Round 10
            {'mad': [0,10, 8, 5, 2, 2]}, //Round 11
            {'mad': [0,10, 8, 7, 3, 3]}, //Round 12
            {'mad': [0,11, 9, 8, 4, 4]}, //Round 13
            {'mad': [0,11, 9, 9, 5, 5]}, //Round 14
            {'mad': [0,12, 9,11, 6, 6]}, //Round 15
            {'mad': [0,12,10,11, 7, 7]}, //Round 16
            {'mad': [0,12,10,12, 8, 7]}, //Round 17
            {'mad': [0,12,11,12, 9, 9]}, //Round 18
            {'mad': [0,12,12,12,10,10]}, //Round 19
            {'mad': [0,12,12,12,12,12]}  //Round 20
        ],
        'unitTypes': [
            { name: 'Wolf', ST: 1, SU: 1, EN: 1, RST: 0, icon:'images/black.png', size:'10', traits: [WOLF_JUMP, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]},
            { name: 'Giant Spider', ST: 2, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'10', traits: [WALKING_ON_WALLS, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]},
            { name: 'Giant Hawk', ST: 5, SU: 5, EN: 3, RST: 0, icon:'images/brown.png', size:'10', traits: [FLIGHT, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]},
            { name: 'Giant Spider veteran', ST: 3, SU: 3, EN: 3, RST: 0, icon:'images/gray.png', size:'16', traits: [WALKING_ON_WALLS, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]},
            { name: 'Giant Hawk veteran', ST: 6, SU: 6, EN: 4, RST: 0, icon:'images/brown.png', size:'16', traits: [FLIGHT, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]},
            { name: 'Dragon', ST: 9, SU: 9, EN: 6, RST: 0, icon:'images/black.png', size:'16', traits: [FLIGHT, DRAGON_FIRE, DODGING, THE_CALL_OF_THE_WILD, SURPRISE_ATTACK]}
        ],
        'loot': [
            {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
            {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
            {'wood': 4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
            {'wood': 4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
            {'wood': 3, 'stone': 2, 'iron': 1, 'gold': 0}, //Round 5
            {'wood': 3, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 6
            {'wood': 3, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 7
            {'wood': 3, 'stone': 4, 'iron': 3, 'gold': 0}, //Round 8
            {'wood': 4, 'stone': 4, 'iron': 4, 'gold': 0}, //Round 9
            {'wood': 4, 'stone': 5, 'iron': 5, 'gold': 0}, //Round 10
            {'wood': 5, 'stone': 6, 'iron': 5, 'gold': 0}, //Round 11
            {'wood': 5, 'stone': 6, 'iron': 5, 'gold': 1}, //Round 12
            {'wood': 5, 'stone': 6, 'iron': 5, 'gold': 1}, //Round 13
            {'wood': 6, 'stone': 6, 'iron': 6, 'gold': 1}, //Round 14
            {'wood': 6, 'stone': 7, 'iron': 6, 'gold': 1}, //Round 15
            {'wood': 7, 'stone': 7, 'iron': 7, 'gold': 2}, //Round 16
            {'wood': 8, 'stone': 8, 'iron': 7, 'gold': 3}, //Round 17
            {'wood': 8, 'stone': 8, 'iron': 6, 'gold': 3}, //Round 18
            {'wood': 9, 'stone': 8, 'iron': 8, 'gold': 4}  //Round 19
        ],
        arriveBehaviour: {
            avoidsMoats: true,
            goesForWeakestWall: false,
            directionDistribution: ['N', 'N', 'S', 'W', 'E']
        },
        noLootWhenDifficultyAt3: true
    });
}());