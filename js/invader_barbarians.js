////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Barbarians settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    var BOSS_TRAIT = {'name': 'Boss', description: 'The Boss of Barbarians attacks always with his troops in round 10, 15, 20. Even if his unit is removed from the board, after 5 rounds when his wounds heal he returns to the game. He is a Melee Unit so he attacks with other units in Combat Groups.'};
    var BOSS_PANIC = {'name': 'Panic', description: 'Lord of destruction spreads panic in the defender’s troops. None of the defender’s units dares to fire at him therefore he cannot be a target for Ranged Units or Siege Machines.'};
    var BOSS_TERROR = {'name': 'Terror', description: 'Lord of destruction also spreads terror among his subjects. This means that every unit’s SU in his Combat Group is increased by +1.'};

    var GIANT_DEMOLITION = {'name': 'Demolition', description: 'A Giant is able to perform one special attack in each Battle stage: demolition with ST=1 + D3, if a Giant is a Supporting Unit this attack is performed at the beginning of Step 12. This special attack is treated as a standard Siege Machine attack on fortifications.'};
    var GIANT_VETERAN_DEMOLITION = {'name': 'Veteran Demolition', description: 'A Giant veteran is able to perform one special attack in each Battle stage: demolition with ST=2 + D3, if a Giant is a Supporting Unit this attack is performed at the beginning of Step 12. This special attack is treated as a standard Siege Machine attack on fortifications.'}

    var COVER_ATTACK_TRAIT = {minDifficulty: 2, 'name': 'Cover Attack', description: 'All Barbarians’ units (Melee and Ranged Units) gathered in a Deployment Zone always receive a +2 EN bonus as if they were behind cover, even if no Cover markers are in their area. is bonus is cumulative with standard Covers, which can be used as normal, according to the Unit Numbers Chart. If the standard Cover is destroyed, the +2 EN bonus still remains.'};
    var ANCIENT_RUNES  = {minDifficulty: 3, 'name': 'Ancient Runes', description: 'All units and siege machines are completely immune to Spells'};

    var RANGED_AIM = {name: 'Target selection', description: '1,2,3,4 pips on D6 – attack on a Wall<br/>5 pips on D6 – attack on Left-side Tower<br/>6 pips on D6 – attack on Right-side Tower'};
    var SIEGE_AIM = {name: 'Target selection', description: '1,2,3,4 pips on D6 – attack on a Wall<br/>5 pips on D6 – attack on Left-side Tower<br/>6 pips on D6 – attack on Right-side Tower'};

    addInvaderType({
        'name': 'Barbarians',
        'morale': 5,
        'tactics': 1,
        'difficulty': 1,
        'forces': [
            {'mad': [0, 1,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [0,1,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 1
            {'mad': [2, 4,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [1,2,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 2
            {'mad': [3, 7,0,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 3
            {'mad': [4, 8,1,0, 0,0, 0,0,0,0,0,0,0, 0], 'other': [2,3,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 4
            {'mad': [5, 8,1,0, 0,0, 0,0,0,0,1,0,0, 0], 'other': [2,4,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 5
            {'mad': [5, 9,2,0, 0,0, 0,1,0,0,1,0,0, 0], 'other': [3,4,0,0,0,0, 0,0,0,0,0,0,0, 0]}, //Round 6
            {'mad': [6,10,2,0, 0,0, 0,2,0,0,1,0,0, 0], 'other': [3,5,1,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 7
            {'mad': [6,10,3,0, 0,0, 0,2,0,0,1,1,0, 0], 'other': [3,5,2,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 8
            {'mad': [7,12,3,0, 2,0, 0,2,1,0,1,1,0, 0], 'other': [4,6,2,0,0,0, 0,0,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 9
            {'mad': [7,12,5,0, 4,0, 0,1,1,0,1,1,0, 1], 'other': [4,6,2,0,2,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 10
            {'mad': [8,12,5,2, 6,0, 0,1,2,0,1,1,0, 0], 'other': [4,6,2,1,3,0, 0,1,0,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 11
            {'mad': [8,12,5,3, 7,1, 0,1,1,1,1,2,0, 0], 'other': [4,6,2,1,3,0, 0,1,1,0,0,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 12
            {'mad': [9,12,6,4, 8,2, 0,1,1,1,1,2,0, 0], 'other': [4,6,3,2,4,0, 0,1,1,0,1,0,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 13
            {'mad': [9,12,6,4, 9,2, 0,2,2,1,1,1,1, 0], 'other': [4,6,3,2,4,1, 0,1,1,0,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 14
            {'mad': [9,12,6,4, 9,3, 0,2,2,1,1,2,2, 1], 'other': [4,6,3,2,5,1, 0,1,1,1,1,1,0, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 15
            {'mad': [9,12,6,5,10,3, 0,2,2,2,1,2,1, 0], 'other': [4,6,3,2,5,1, 0,1,1,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 16
            {'mad': [9,12,7,5,11,3, 0,2,2,3,1,2,1, 0], 'other': [4,6,3,3,5,2, 0,1,1,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 17
            {'mad': [9,12,7,5,12,3, 0,2,2,3,1,3,1, 0], 'other': [4,6,4,3,5,2, 0,1,2,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 18
            {'mad': [9,12,7,6,12,4, 0,3,2,3,1,3,2, 0], 'other': [4,6,4,3,5,2, 0,1,2,1,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}, //Round 19
            {'mad': [9,12,7,7,12,5, 0,3,3,3,1,3,2, 1], 'other': [4,6,4,4,6,3, 0,1,2,2,1,2,1, 0], 'gate': [0,0,0,0,0,0, 1,0,0,0,0,0,0, 0]}  //Round 20
        ],
        'unitTypes': [
            { name: 'Slinger', ST: 1, SU: 1, EN: 1, RST: 1, icon:'images/black.png', size:'10', traits: [RANGED_AIM, COVER_ATTACK_TRAIT]},
            { name: 'Warrior', ST: 2, SU: 1, EN: 2, RST: 0, icon:'images/gray.png', size:'10', traits: [COVER_ATTACK_TRAIT]},
            { name: 'Giant', ST: 3, SU: 2, EN: 5, RST: 0, icon:'images/brown.png', size:'10', traits: [GIANT_DEMOLITION, COVER_ATTACK_TRAIT]},
            { name: 'Slinger veteran', ST: 1, SU: 1, EN: 1, RST: 2, icon:'images/black.png', size:'16', traits: [RANGED_AIM, COVER_ATTACK_TRAIT]},
            { name: 'Warrior veteran', ST: 3, SU: 2, EN: 3, RST: 0, icon:'images/gray.png', size:'16', traits: [COVER_ATTACK_TRAIT]},
            { name: 'Giant veteran', ST: 4, SU: 3, EN: 6, RST: 0, icon:'images/brown.png', size:'16', traits: [GIANT_VETERAN_DEMOLITION, COVER_ATTACK_TRAIT]}]
            .concat(createStandardSiegeMachines(SIEGE_AIM, [ANCIENT_RUNES]))
            .concat([{ name: 'Lord of Destruction', ST: 7, SU: 0, EN: 4, RST: 0, icon:'images/lod.png', size:'16', traits: [BOSS_TRAIT, BOSS_PANIC, BOSS_TERROR, COVER_ATTACK_TRAIT]}]),
        'loot': [
            {'wood':  3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 1
            {'wood':  3, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 2
            {'wood':  4, 'stone': 0, 'iron': 0, 'gold': 0}, //Round 3
            {'wood':  4, 'stone': 1, 'iron': 0, 'gold': 0}, //Round 4
            {'wood':  5, 'stone': 2, 'iron': 0, 'gold': 0}, //Round 5
            {'wood':  5, 'stone': 2, 'iron': 1, 'gold': 0}, //Round 6
            {'wood':  6, 'stone': 2, 'iron': 2, 'gold': 0}, //Round 7
            {'wood':  6, 'stone': 3, 'iron': 2, 'gold': 0}, //Round 8
            {'wood':  7, 'stone': 3, 'iron': 3, 'gold': 0}, //Round 9
            {'wood':  7, 'stone': 5, 'iron': 3, 'gold': 0}, //Round 10
            {'wood':  8, 'stone': 6, 'iron': 3, 'gold': 0}, //Round 11
            {'wood':  8, 'stone': 6, 'iron': 4, 'gold': 0}, //Round 12
            {'wood':  9, 'stone': 6, 'iron': 4, 'gold': 1}, //Round 13
            {'wood':  9, 'stone': 7, 'iron': 4, 'gold': 1}, //Round 14
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
    });
})();

