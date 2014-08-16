////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Invading armies settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ENEMY_SIEGE_MACHINES = [
    { name: 'Battering ram', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/batteringram.png', size:'16'},
    { name: 'Ballista', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/ballista.png', size:'16'},
    { name: 'Catapult', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/catapult.png', size:'16'},
    { name: 'Trebuchet', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/trebuchet.png', size:'16'},
    { name: 'Cover', ST: 4, SU: 3, EN: '6', RST: '0', icon:'images/cover.png', size:'16'},
    { name: 'Bridge', ST: 4, SU: 3, EN: '6', RST: '0', icon:'images/bridge.png', size:'16'},
    { name: 'Siege Tower', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/siegetower.png', size:'16'}
];

var BEASTS = {
    'name': 'Beasts',
    'morale': 6,
    'tactics': 1,
    'difficulty': 1,
    'forces': [
        {'mad': [2, 0, 0, 0, 0, 0]},//Round 1
        {'mad': [4, 2, 0, 0, 0, 0]},//Round 2
        {'mad': [0, 5, 0, 0, 0, 0]},//Round 3
        {'mad': [0, 6, 0, 0, 0, 0]},//Round 4
        {'mad': [0, 8, 0, 0, 0, 0]},//Round 5
        {'mad': [0, 8, 1, 1, 0, 0]},//Round 6
        {'mad': [0, 8, 3, 3, 0, 0]},//Round 7
        {'mad': [0, 9, 4, 4, 0, 0]},//Round 8
        {'mad': [0, 9, 6, 4, 1, 0]},//Round 9
        {'mad': [0, 9, 7, 4, 1, 1]},//Round 10
        {'mad': [0,10, 8, 5, 2, 2]},//Round 11
        {'mad': [0,10, 8, 7, 3, 3]},//Round 12
        {'mad': [0,11, 9, 8, 4, 4]},//Round 13
        {'mad': [0,11, 9, 9, 5, 5]},//Round 14
        {'mad': [0,12, 9,11, 6, 6]},//Round 15
        {'mad': [0,12,10,11, 7, 7]},//Round 16
        {'mad': [0,12,10,12, 8, 7]},//Round 17
        {'mad': [0,12,11,12, 9, 9]},//Round 18
        {'mad': [0,12,12,12,10,10]},//Round 19
        {'mad': [0,12,12,12,12,12]} //Round 20
    ],
    'unitTypes': [
        { name: 'Wolf', ST: 1, SU: 1, EN: 1, RST: 0, icon:'images/black.png', size:'10'},
        { name: 'Giant Spider', ST: 2, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'10'},
        { name: 'Giant Hawk', ST: 5, SU: 5, EN: 3, RST: 0, icon:'images/brown.png', size:'10'},
        { name: 'Giant Spider veteran', ST: 3, SU: 3, EN: 3, RST: 0, icon:'images/gray.png', size:'16'},
        { name: 'Giant Hawk veteran', ST: 6, SU: 6, EN: 4, RST: 0, icon:'images/brown.png', size:'16'},
        { name: 'Dragon', ST: 9, SU: 9, EN: 6, RST: 0, icon:'images/black.png', size:'16'}
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
    }
};

var BARBARIANS = {
    'name': 'Barbarians',
    'morale': 5,
    'tactics': 1,
    'difficulty': 1,
    'forces': [
        {'mad': [0, 1,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 1
        {'mad': [2, 4,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,2,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 2
        {'mad': [3, 7,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 3
        {'mad': [4, 8,1,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 4
        {'mad': [5, 8,1,0, 0,0, 0,0,0,0,1,0,0, 0], 'other': [2,4,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 5
        {'mad': [5, 9,2,0, 0,0, 0,1,0,0,1,0,0, 0], 'other': [3,4,0,0,0,0, 0,0,0,0,0,0,0, 0]},//Round 6
        {'mad': [6,10,2,0, 0,0, 0,2,0,0,1,0,0, 0], 'other': [3,5,1,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 7
        {'mad': [6,10,3,0, 0,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 8
        {'mad': [7,12,3,0, 2,0, 0,2,1,0,1,1,0, 0], 'other': [4,6,2,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 9
        {'mad': [7,12,5,0, 4,0, 0,1,1,0,1,1,0, 1], 'other': [4,6,2,0,2,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 10
        {'mad': [8,12,5,2, 6,0, 0,1,2,0,1,1,0, 0], 'other': [4,6,2,1,3,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 11
        {'mad': [8,12,5,3, 7,1, 0,1,1,1,1,2,0, 0], 'other': [4,6,2,1,3,0, 0,1,1,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 12
        {'mad': [9,12,6,4, 8,2, 0,1,1,1,1,2,0, 0], 'other': [4,6,3,2,4,0, 0,1,1,0,1,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 13
        {'mad': [9,12,6,4, 9,2, 0,2,2,1,1,1,1, 0], 'other': [4,6,3,2,4,1, 0,1,1,0,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 14
        {'mad': [9,12,6,4, 9,3, 0,2,2,1,1,2,2, 1], 'other': [4,6,3,2,5,1, 0,1,1,1,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 15
        {'mad': [9,12,6,5,10,3, 0,2,2,2,1,2,1, 0], 'other': [4,6,3,2,5,1, 0,1,1,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 16
        {'mad': [9,12,7,5,11,3, 0,2,2,3,1,2,1, 0], 'other': [4,6,3,3,5,2, 0,1,1,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 17
        {'mad': [9,12,7,5,12,3, 0,2,2,3,1,3,1, 0], 'other': [4,6,4,3,5,2, 0,1,2,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 18
        {'mad': [9,12,7,6,12,4, 0,3,2,3,1,3,2, 0], 'other': [4,6,4,3,5,2, 0,1,2,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//Round 19
        {'mad': [9,12,7,7,12,5, 0,3,3,3,1,3,2, 1], 'other': [4,6,4,4,6,3, 0,1,2,2,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]} //Round 20
    ],
    'unitTypes': [
        { name: 'Slinger', ST: 1, SU: '1', EN: '1', RST: '1', icon:'images/black.png', size:'10'},
        { name: 'Warrior', ST: 2, SU: '1', EN: '2', RST: '0', icon:'images/gray.png', size:'10'},
        { name: 'Giant', ST: 3, SU: '2', EN: '5', RST: '0', icon:'images/brown.png', size:'10', description: 'Special rule: A Giant is able to perform one special attack in each Battle stage: demolition with ST=1 + D3, if a Giant is a Supporting Unit this attack is performed at the beginning of Step 12. This special attack is treated as a standard Siege Machine attack on forti!cations.'},
        { name: 'Slinger veteran', ST: 1, SU: '1', EN: '1', RST: '2', icon:'images/black.png', size:'16'},
        { name: 'Warrior veteran', ST: 3, SU: '2', EN: '3', RST: '0', icon:'images/gray.png', size:'16'},
        { name: 'Giant veteran', ST: 4, SU: '3', EN: '6', RST: '0', icon:'images/brown.png', size:'16'}]
        .concat(ENEMY_SIEGE_MACHINES)
        .concat([{ name: 'Lord of Destruction', ST: 7, SU: 0, EN: 4, RST: 0, icon:'images/lod.png', size:'16'}]),
    'loot': [
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
        {'wood': 4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
        {'wood': 4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
        {'wood': 5, 'stone': 2, 'iron': 0, 'gold': 0}, //Round 5
        {'wood': 5, 'stone': 2, 'iron': 1, 'gold': 0}, //Round 6
        {'wood': 6, 'stone': 2, 'iron': 2, 'gold': 0}, //Round 7
        {'wood': 6, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 8
        {'wood': 7, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 9
        {'wood': 7, 'stone': 5, 'iron': 3, 'gold': 0}, //Round 10
        {'wood': 8, 'stone': 6, 'iron': 3, 'gold': 0}, //Round 11
        {'wood': 8, 'stone': 6, 'iron': 4, 'gold': 0}, //Round 12
        {'wood': 9, 'stone': 6, 'iron': 4, 'gold': 1}, //Round 13
        {'wood': 9, 'stone': 7, 'iron': 4, 'gold': 1}, //Round 14
        {'wood': 10, 'stone': 7, 'iron': 5, 'gold': 1}, //Round 15
        {'wood': 10, 'stone': 7, 'iron': 5, 'gold': 2}, //Round 16
        {'wood': 11, 'stone': 8, 'iron': 5, 'gold': 2}, //Round 17
        {'wood': 11, 'stone': 8, 'iron': 6, 'gold': 2}, //Round 18
        {'wood': 12, 'stone': 10, 'iron': 6, 'gold': 3} //Round 19
    ],
    arriveBehaviour: {
        avoidsMoats: false,
        goesForWeakestWall: false,
        directionDistribution: ['N', 'N', 'S', 'W', 'E']
    }
};

var WOLFMEN = {
    'name': 'Wolfmen',
    'morale': 4,
    'tactics': 2,
    'difficulty': 1,
    'forces': [
        {'mad': [ 0, 1,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 1
        {'mad': [ 1, 2,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,2,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 2
        {'mad': [ 2, 5,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 3
        {'mad': [ 4, 7,1,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 4
        {'mad': [ 5, 8,2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 5
        {'mad': [ 5, 8,1,0, 1,0, 0,1,0,0,0,0,0, 0], 'other': [3,6,1,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 6
        {'mad': [ 6, 8,2,0, 1,0, 0,2,0,0,0,0,0, 0], 'other': [3,6,1,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 7
        {'mad': [ 6, 9,3,0, 2,0, 0,2,0,0,0,0,0, 0], 'other': [3,6,2,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 8
        {'mad': [ 7,10,4,1, 2,0, 0,1,1,0,0,0,0, 0], 'other': [4,7,2,0,1,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 9

        {'mad': [ 8,11,4,2, 4,0, 0,2,1,0,0,1,0, 1], 'other': [5,7,2,0,3,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 10
        {'mad': [ 8,13,4,2, 5,1, 0,2,2,0,0,2,0, 0], 'other': [5,7,3,1,4,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 11
        {'mad': [ 8,13,5,3, 6,2, 0,2,1,0,0,2,0, 0], 'other': [5,7,4,2,4,0, 0,1,1,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 12
        {'mad': [ 9,13,6,4, 7,2, 0,2,2,0,0,2,0, 0], 'other': [5,7,4,2,5,1, 0,1,1,0,0,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 13
        {'mad': [10,13,6,4, 8,2, 0,2,2,0,1,2,0, 0], 'other': [5,7,5,2,5,1, 0,2,1,0,0,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 14
        {'mad': [10,13,7,4, 9,2, 0,2,2,0,1,2,0, 1], 'other': [5,7,6,3,6,2, 0,2,2,0,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 15
        {'mad': [10,13,7,5,10,3, 0,2,2,0,1,2,0, 0], 'other': [5,7,6,3,6,2, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 16
        {'mad': [10,13,8,5,11,5, 0,2,3,0,1,2,0, 0], 'other': [5,7,6,4,6,2, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 17
        {'mad': [10,13,9,6,12,5, 0,2,3,0,1,3,1, 0], 'other': [5,7,6,4,6,3, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 18
        {'mad': [10,13,9,6,13,6, 0,3,3,0,1,3,1, 0], 'other': [5,7,6,5,6,3, 0,2,2,0,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]},//ROUND 19
        {'mad': [10,13,9,9,13,6, 0,3,3,0,1,3,2, 1], 'other': [5,7,6,5,7,4, 0,2,2,0,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}//ROUND 20
    ],
    'unitTypes': [
        { name: 'Javelin Thrower', ST: 1, SU: 1, EN: 1, RST: 1, icon:'images/black.png', size:'10'},
        { name: 'Spearman', ST: 2, SU: 2, EN: 1, RST: 0, icon:'images/gray.png', size:'10'},
        { name: 'Werewolf', ST: 5, SU: 3, EN: 3, RST: 0, icon:'images/brown.png', size:'10'},
        { name: 'Javelin Thrower veteran', ST: 1, SU: 1, EN: 1, RST: 2, icon:'images/black.png', size:'16'},
        { name: 'Spearman veteran', ST: 3, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'16'},
        { name: 'Werewolf veteran', ST: 6, SU: 4, EN: 4, RST: 0, icon:'images/brown.png', size:'16'}]
        .concat(ENEMY_SIEGE_MACHINES)
        .concat([{ name: 'King of wolves', ST: 0, SU: 0, EN: 15, RST: 0, icon:'images/kingofwolves.png', size:'16'}]),
    'loot': [
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
        {'wood': 4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
        {'wood': 4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
        {'wood': 5, 'stone': 2, 'iron': 0, 'gold': 0}, //Round 5
        {'wood': 5, 'stone': 2, 'iron': 1, 'gold': 0}, //Round 6
        {'wood': 6, 'stone': 2, 'iron': 2, 'gold': 0}, //Round 7
        {'wood': 6, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 8
        {'wood': 7, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 9
        {'wood': 7, 'stone': 3, 'iron': 5, 'gold': 0}, //Round 10
        {'wood': 8, 'stone': 4, 'iron': 5, 'gold': 0}, //Round 11
        {'wood': 8, 'stone': 4, 'iron': 6, 'gold': 0}, //Round 12
        {'wood': 9, 'stone': 4, 'iron': 8, 'gold': 0}, //Round 13
        {'wood': 9, 'stone': 5, 'iron': 8, 'gold': 0}, //Round 14
        {'wood': 10, 'stone': 5, 'iron': 9, 'gold': 0}, //Round 15
        {'wood': 10, 'stone': 5, 'iron': 11, 'gold': 0}, //Round 16
        {'wood': 11, 'stone': 6, 'iron': 11, 'gold': 0}, //Round 17
        {'wood': 11, 'stone': 6, 'iron': 12, 'gold': 0}, //Round 18
        {'wood': 12, 'stone': 6, 'iron': 14, 'gold': 0} //Round 19
    ],
    arriveBehaviour: {
        avoidsMoats: false,
        goesForWeakestWall: true,
        directionDistribution: ['N', 'S', 'W', 'E']
    }
};

var FORESTMEN = {
    'name': 'Forestmen',
    'morale': 3,
    'tactics': 3,
    'difficulty': 1,
    'forces': [
        {'mad': [ 0, 2, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 1
        {'mad': [ 1, 5, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,3,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 2
        {'mad': [ 2, 6, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,4,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 3
        {'mad': [ 3, 8, 2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,5,0,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 4
        {'mad': [ 3, 9, 2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,1,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 5
        {'mad': [ 4, 9, 3,0, 0,0, 0,1,0,0,1,1,0, 0], 'other': [2,5,1,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 6
        {'mad': [ 4, 9, 3,0, 0,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 7
        {'mad': [ 5,10, 4,1, 1,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0]},//ROUND 8
        {'mad': [ 6,11, 5,2, 2,0, 0,1,0,1,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,1,0,0,0,0,0, 0]},//ROUND 9
        {'mad': [ 6,11, 5,2, 2,1, 0,1,0,1,1,2,0, 1], 'other': [3,6,2,1,1,0, 0,1,0,0,0,0,0, 0]},//ROUND 10
        {'mad': [ 7,12, 6,2, 3,1, 0,2,0,2,1,2,0, 0], 'other': [3,6,2,1,1,0, 0,1,0,0,0,0,0, 0]},//ROUND 11
        {'mad': [ 7,12, 6,2, 4,2, 0,2,0,1,1,1,0, 0], 'other': [4,6,3,1,2,0, 0,1,0,1,0,1,0, 0]},//ROUND 12
        {'mad': [ 8,13, 7,2, 5,2, 0,2,0,1,1,1,0, 0], 'other': [4,6,3,1,2,1, 0,1,0,1,1,1,0, 0]},//ROUND 13
        {'mad': [ 8,13, 7,2, 5,3, 0,3,0,1,1,2,0, 0], 'other': [5,6,4,1,3,1, 0,1,0,1,1,1,0, 0]},//ROUND 14
        {'mad': [ 9,13, 8,2, 6,3, 0,2,0,2,1,2,0, 1], 'other': [5,7,4,2,4,2, 0,2,0,1,1,1,0, 0]},//ROUND 15
        {'mad': [ 9,13, 8,3, 7,3, 0,2,0,2,1,2,0, 0], 'other': [5,7,5,2,4,2, 0,2,0,2,1,1,0, 0]},//ROUND 16
        {'mad': [ 9,13, 9,4, 8,4, 0,3,0,2,1,2,0, 0], 'other': [5,7,5,2,5,2, 0,2,0,2,1,2,0, 0]},//ROUND 17
        {'mad': [10,13, 9,4, 9,5, 0,3,0,2,1,2,0, 0], 'other': [5,7,5,2,6,2, 0,2,0,2,1,2,0, 0]},//ROUND 18
        {'mad': [10,13, 9,4,10,5, 0,3,0,2,1,2,0, 0], 'other': [5,7,6,2,6,3, 0,2,0,2,1,2,0, 0]},//ROUND 19
        {'mad': [10,13,10,5,12,6, 0,4,0,3,1,3,0, 1], 'other': [5,7,6,2,6,4, 0,2,0,2,1,2,0, 0]}//ROUND 20
    ],
    'unitTypes': [
        { name: 'Archer', ST: 1, SU: 1, EN: 1, RST: 2, icon:'images/black.png', size:'10'},
        { name: 'Heavy footman', ST: 2, SU: 1, EN: 1, RST: 0, icon:'images/gray.png', size:'10'},
        { name: 'Assasin', ST: 4, SU: 3, EN: 3, RST: 0, icon:'images/brown.png', size:'10', description: 'Special rule: A Giant is able to perform one special attack in each Battle stage: demolition with ST=1 + D3, if a Giant is a Supporting Unit this attack is performed at the beginning of Step 12. This special attack is treated as a standard Siege Machine attack on forti!cations.'},
        { name: 'Archer veteran', ST: 1, SU: 1, EN: 1, RST: 3, icon:'images/black.png', size:'16'},
        { name: 'Heavy footman veteran', ST: 3, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'16'},
        { name: 'Assasin veteran', ST: 5, SU: 4, EN: 4, RST: 0, icon:'images/brown.png', size:'16'}]
        .concat(ENEMY_SIEGE_MACHINES)
        .concat([{ name: 'Forest Shaman', ST: 0, SU: 0, EN: 0, RST: 0, icon:'images/forestshaman.png', size:'16'}]),
    'loot': [
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
        {'wood': 3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
        {'wood': 4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
        {'wood': 4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
        {'wood': 5, 'stone': 2, 'iron': 0, 'gold': 0}, //Round 5
        {'wood': 6, 'stone': 3, 'iron': 1, 'gold': 0}, //Round 6
        {'wood': 6, 'stone': 2, 'iron': 2, 'gold': 0}, //Round 7
        {'wood': 8, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 8
        {'wood': 10, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 9
        {'wood': 10, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 10
        {'wood': 10, 'stone': 4, 'iron': 3, 'gold': 0}, //Round 11
        {'wood': 11, 'stone': 4, 'iron': 4, 'gold': 0}, //Round 12
        {'wood': 11, 'stone': 4, 'iron': 4, 'gold': 1}, //Round 13
        {'wood': 11, 'stone': 5, 'iron': 4, 'gold': 1}, //Round 14
        {'wood': 12, 'stone': 5, 'iron': 5, 'gold': 1}, //Round 15
        {'wood': 12, 'stone': 5, 'iron': 5, 'gold': 2}, //Round 16
        {'wood': 12, 'stone': 6, 'iron': 5, 'gold': 2}, //Round 17
        {'wood': 13, 'stone': 6, 'iron': 6, 'gold': 2}, //Round 18
        {'wood': 13, 'stone': 6, 'iron': 6, 'gold': 3} //Round 19
    ],
    arriveBehaviour: {
        avoidsMoats: false,
        goesForWeakestWall: true,
        directionDistribution: ['N', 'S', 'W', 'E']
    }
};

var INVADER_TYPES = {
    'Beasts': BEASTS,
    'Barbarians': BARBARIANS,
    'Forestmen': FORESTMEN,
    'Wolfmen': WOLFMEN
}