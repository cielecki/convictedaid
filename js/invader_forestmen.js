////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Forestmen settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addInvaderType({
    'name': 'Forestmen',
    'morale': 3,
    'tactics': 3,
    'difficulty': 1,
    'forces': [
        {'mad': [ 0, 2, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 1
        {'mad': [ 1, 5, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,3,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 2
        {'mad': [ 2, 6, 0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,4,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 3
        {'mad': [ 3, 8, 2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,5,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 4
        {'mad': [ 3, 9, 2,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,5,1,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 5
        {'mad': [ 4, 9, 3,0, 0,0, 0,1,0,0,1,1,0, 0], 'other': [2,5,1,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 6
        {'mad': [ 4, 9, 3,0, 0,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 7
        {'mad': [ 5,10, 4,1, 1,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 8
        {'mad': [ 6,11, 5,2, 2,0, 0,1,0,1,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,1,0,0,0,0,0, 0]}, //Round 9
        {'mad': [ 6,11, 5,2, 2,1, 0,1,0,1,1,2,0, 1], 'other': [3,6,2,1,1,0, 0,1,0,0,0,0,0, 0]}, //Round 10
        {'mad': [ 7,12, 6,2, 3,1, 0,2,0,2,1,2,0, 0], 'other': [3,6,2,1,1,0, 0,1,0,0,0,0,0, 0]}, //Round 11
        {'mad': [ 7,12, 6,2, 4,2, 0,2,0,1,1,1,0, 0], 'other': [4,6,3,1,2,0, 0,1,0,1,0,1,0, 0]}, //Round 12
        {'mad': [ 8,13, 7,2, 5,2, 0,2,0,1,1,1,0, 0], 'other': [4,6,3,1,2,1, 0,1,0,1,1,1,0, 0]}, //Round 13
        {'mad': [ 8,13, 7,2, 5,3, 0,3,0,1,1,2,0, 0], 'other': [5,6,4,1,3,1, 0,1,0,1,1,1,0, 0]}, //Round 14
        {'mad': [ 9,13, 8,2, 6,3, 0,2,0,2,1,2,0, 1], 'other': [5,7,4,2,4,2, 0,2,0,1,1,1,0, 0]}, //Round 15
        {'mad': [ 9,13, 8,3, 7,3, 0,2,0,2,1,2,0, 0], 'other': [5,7,5,2,4,2, 0,2,0,2,1,1,0, 0]}, //Round 16
        {'mad': [ 9,13, 9,4, 8,4, 0,3,0,2,1,2,0, 0], 'other': [5,7,5,2,5,2, 0,2,0,2,1,2,0, 0]}, //Round 17
        {'mad': [10,13, 9,4, 9,5, 0,3,0,2,1,2,0, 0], 'other': [5,7,5,2,6,2, 0,2,0,2,1,2,0, 0]}, //Round 18
        {'mad': [10,13, 9,4,10,5, 0,3,0,2,1,2,0, 0], 'other': [5,7,6,2,6,3, 0,2,0,2,1,2,0, 0]}, //Round 19
        {'mad': [10,13,10,5,12,6, 0,4,0,3,1,3,0, 1], 'other': [5,7,6,2,6,4, 0,2,0,2,1,2,0, 0]}  //Round 20
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
        {'wood':  3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
        {'wood':  3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
        {'wood':  4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
        {'wood':  4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
        {'wood':  5, 'stone': 2, 'iron': 0, 'gold': 0}, //Round 5
        {'wood':  6, 'stone': 3, 'iron': 1, 'gold': 0}, //Round 6
        {'wood':  6, 'stone': 2, 'iron': 2, 'gold': 0}, //Round 7
        {'wood':  8, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 8
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
        {'wood': 13, 'stone': 6, 'iron': 6, 'gold': 3}  //Round 19
    ],
    arriveBehaviour: {
        avoidsMoats: false,
        goesForWeakestWall: true,
        directionDistribution: ['N', 'S', 'W', 'E']
    }
});