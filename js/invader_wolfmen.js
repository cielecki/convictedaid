////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wolfmen settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addInvaderType({
    'name': 'Wolfmen',
    'morale': 4,
    'tactics': 2,
    'difficulty': 1,
    'forces': [
        {'mad': [ 0, 1,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 1
        {'mad': [ 1, 2,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,2,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 2
        {'mad': [ 2, 5,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 3
        {'mad': [ 4, 7,1,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 4
        {'mad': [ 5, 8,2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 5
        {'mad': [ 5, 8,1,0, 1,0, 0,1,0,0,0,0,0, 0], 'other': [3,6,1,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 6
        {'mad': [ 6, 8,2,0, 1,0, 0,2,0,0,0,0,0, 0], 'other': [3,6,1,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 7
        {'mad': [ 6, 9,3,0, 2,0, 0,2,0,0,0,0,0, 0], 'other': [3,6,2,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 8
        {'mad': [ 7,10,4,1, 2,0, 0,1,1,0,0,0,0, 0], 'other': [4,7,2,0,1,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 9
        {'mad': [ 8,11,4,2, 4,0, 0,2,1,0,0,1,0, 1], 'other': [5,7,2,0,3,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 10
        {'mad': [ 8,13,4,2, 5,1, 0,2,2,0,0,2,0, 0], 'other': [5,7,3,1,4,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 11
        {'mad': [ 8,13,5,3, 6,2, 0,2,1,0,0,2,0, 0], 'other': [5,7,4,2,4,0, 0,1,1,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 12
        {'mad': [ 9,13,6,4, 7,2, 0,2,2,0,0,2,0, 0], 'other': [5,7,4,2,5,1, 0,1,1,0,0,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 13
        {'mad': [10,13,6,4, 8,2, 0,2,2,0,1,2,0, 0], 'other': [5,7,5,2,5,1, 0,2,1,0,0,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 14
        {'mad': [10,13,7,4, 9,2, 0,2,2,0,1,2,0, 1], 'other': [5,7,6,3,6,2, 0,2,2,0,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 15
        {'mad': [10,13,7,5,10,3, 0,2,2,0,1,2,0, 0], 'other': [5,7,6,3,6,2, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 16
        {'mad': [10,13,8,5,11,5, 0,2,3,0,1,2,0, 0], 'other': [5,7,6,4,6,2, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 17
        {'mad': [10,13,9,6,12,5, 0,2,3,0,1,3,1, 0], 'other': [5,7,6,4,6,3, 0,2,2,0,1,2,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 18
        {'mad': [10,13,9,6,13,6, 0,3,3,0,1,3,1, 0], 'other': [5,7,6,5,6,3, 0,2,2,0,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 19
        {'mad': [10,13,9,9,13,6, 0,3,3,0,1,3,2, 1], 'other': [5,7,6,5,7,4, 0,2,2,0,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}  //Round 20
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
        {'wood':  3, 'stone': 0, 'iron':  0, 'gold': 0}, //Round 1
        {'wood':  3, 'stone': 0, 'iron':  0, 'gold': 0}, //Round 2
        {'wood':  4, 'stone': 0, 'iron':  0, 'gold': 0}, //Round 3
        {'wood':  4, 'stone': 1, 'iron':  0, 'gold': 0}, //Round 4
        {'wood':  5, 'stone': 2, 'iron':  0, 'gold': 0}, //Round 5
        {'wood':  5, 'stone': 2, 'iron':  1, 'gold': 0}, //Round 6
        {'wood':  6, 'stone': 2, 'iron':  2, 'gold': 0}, //Round 7
        {'wood':  6, 'stone': 3, 'iron':  2, 'gold': 0}, //Round 8
        {'wood':  7, 'stone': 3, 'iron':  3, 'gold': 0}, //Round 9
        {'wood':  7, 'stone': 3, 'iron':  5, 'gold': 0}, //Round 10
        {'wood':  8, 'stone': 4, 'iron':  5, 'gold': 0}, //Round 11
        {'wood':  8, 'stone': 4, 'iron':  6, 'gold': 0}, //Round 12
        {'wood':  9, 'stone': 4, 'iron':  8, 'gold': 0}, //Round 13
        {'wood':  9, 'stone': 5, 'iron':  8, 'gold': 0}, //Round 14
        {'wood': 10, 'stone': 5, 'iron':  9, 'gold': 0}, //Round 15
        {'wood': 10, 'stone': 5, 'iron': 11, 'gold': 0}, //Round 16
        {'wood': 11, 'stone': 6, 'iron': 11, 'gold': 0}, //Round 17
        {'wood': 11, 'stone': 6, 'iron': 12, 'gold': 0}, //Round 18
        {'wood': 12, 'stone': 6, 'iron': 14, 'gold': 0}  //Round 19
    ],
    arriveBehaviour: {
        avoidsMoats: false,
        goesForWeakestWall: true,
        directionDistribution: ['N', 'S', 'W', 'E']
    }
});