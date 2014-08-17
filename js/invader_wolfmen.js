////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wolfmen settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    var PANIC = {'name': 'Panic', description: 'When a unit is killed by a Combat Group that is led by a Werewolf, all defenders on this Wall section receive a -1 modi!er to their Strength until the end of the next round.'};
    var VETERAN_PANIC = {'name': 'Veteran Panic', description: 'When a unit is killed by a Combat Group that is led by a Werewolf veteran, all defenders on this Wall section receive a -1 modi!er to their Strength until the end of the next round.'};

    var BOSS_TRAIT = {'name': 'Boss', description: 'The King of Wolves attacks always with his troops during round 10, 15 and 20. Even if his unit is removed from the  board, after 5 rounds when his wounds heal he returns to the game. He is a Ranged Unit therefore he maintains his position in the deployment zone throughout the whole round.'};
    var BOSS_PANIC = {'name': 'Call of battle', description: 'The King of Wolves is able to spur his troops to !ght. All of the invader’s units receive a ST modi!er of +1 (regardless of the attack direction).'};
    var BOSS_TERROR = {'name': 'Delusions', description: 'The King of Wolves is able to trigger hallucinations among defenders. 1 unit (chosen by the defender) assigned to EVERY Combat Group placed on the Wall from the side where the King of Wolves stands doesn’t add its ST (if it’s the only unit) or SU to the overall strength.'};

    var TWILIGHT_ATTACK = {minDifficulty: 2, 'name': 'A twilight attack', description: 'Increase the ST, SU and EN of all of the veteran units by 1'}; //TODO: This should be already added to the attributes
    var REINFORCED_CONSTRUCTIONS  = {minDifficulty: 3, 'name': 'Reinforced constructions', description: 'All siege machines receive a +1 modi!er to their RFS'};

    var RANGED_AIM = {name: 'Target selection', description: 'Ranged Units will attack the enemy units gathered either on the wall or the adjoining towers, depending on which one has the lowest Endurance (if it’s equal everywhere, the units on the wall are selected as the target). If there are no defenders units in the choosen area (tower or wall) then Ranged Units will change a target to the next with the lowest Endurance (if it’s equal everywhere, the units on the wall are selected as the target).'};
    var SIEGE_AIM = {name: 'Target selection', description: '1,2,3,4 pips on D6 – attack on a wall<br/>5 pips on D6 – attack on right-side tower<br/>6 pips on D6 – attack on left-side tower<br/><br/>After drawing for a forti!cation section to attack (wall or one of the towers), the target that is selected must either be the forti!cation or the units that are gathered on the forti!cation, depending on the Siege Machine’s type and it’s special qualities.<br/><br/>Note: If a Wall has an endurance level of 1 or 2 it’s always a target (a D6 dice roll is not performed).'};

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
            { name: 'Javelin Thrower', ST: 1, SU: 1, EN: 1, RST: 1, icon:'images/black.png', size:'10', traits: [RANGED_AIM]},
            { name: 'Spearman', ST: 2, SU: 2, EN: 1, RST: 0, icon:'images/gray.png', size:'10', traits: []},
            { name: 'Werewolf', ST: 5, SU: 3, EN: 3, RST: 0, icon:'images/brown.png', size:'10', traits: [PANIC]},
            { name: 'Javelin Thrower veteran', ST: 1, SU: 1, EN: 1, RST: 2, icon:'images/black.png', size:'16', traits: [RANGED_AIM, TWILIGHT_ATTACK]},
            { name: 'Spearman veteran', ST: 3, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'16', traits: [TWILIGHT_ATTACK]},
            { name: 'Werewolf veteran', ST: 6, SU: 4, EN: 4, RST: 0, icon:'images/brown.png', size:'16', traits: [VETERAN_PANIC, TWILIGHT_ATTACK]}]
            .concat(createStandardSiegeMachines(SIEGE_AIM, [REINFORCED_CONSTRUCTIONS])) //TODO: Reinforced constructions should only be applied to siege machines with RST
            .concat([{ name: 'King of wolves', ST: 0, SU: 0, EN: 15, RST: 0, icon:'images/kingofwolves.png', size:'16', traits: [BOSS_TRAIT, BOSS_PANIC, BOSS_TERROR]}]),
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
})();

