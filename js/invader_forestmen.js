////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Forestmen settings
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    var BOSS_TRAIT = {'name': 'Boss', description: 'The Forest Shaman attacks always with his troops during round 10, 15 and 20. Even if his unit is removed from the board, after 5 rounds when his wounds heal he returns to the game. He is a Ranged Unit therefore he maintains his position in the deployment zone throughout the whole game. He doesn’t have any characteristics because he is completely elusive to the defender’s Ranged Units.'};
    var BOSS_CAMOUFLAGE = {'name': 'Camouflage', description: 'The Forest Shaman is able to conceal his units from the defender’s sight. All Melee Units (not Siege Machines or Ranged units) can pass unnoticed as far as the foreground zone (from every direction). They cannot become a target during Step 1 of the Siege.'};
    var BOSS_POISONS = {'name': 'Brewing poisons', description: 'The Forest Shaman is a master in brewing poisons. All Ranged Units attacking from the same direction receive a +1 modi!er to their RFS.'};

    var LINE = {'name': 'Line', description: 'The use of lines to climb walls provides an element of surprise with an unexpected attack. While !ghting with a Combat Group that is using lines (at least one unit with this special rule), every defenders unit’s SU in this Combat Group is decreased by -1'}

    var FORCES_OF_NATURE = {'name': 'Forces of nature', description: 'All Forest Men troops are supported by the power of primeval nature. During the Siege phase, when we stand ground against their attack, the defenders’ ability to use Blessings disappears. (all Blessings are treated like they were used up from the  beginning of the Siege phase).'};
    var FLAT_DITCHES = {minDifficulty: 2, 'name': 'Flat ditches', description: 'All rules regarding slowing down units while crossing Ditches and Moats do not apply any more (but invaders still sustain unit damage while crossing)'};
    var POISONED_BLADES  = {minDifficulty: 3, 'name': 'Poisoned arrows', description: 'Invader\’s Ranged Units receive a +1 modi!er to their RFS characteristic.'};

    var RANGED_AIM = {name: 'Target selection', description: 'The Ranged Units will attack the enemy units gathered either on the wall or the adjoining towers, depending on which one has the lowest Endurance (if it’s equal everywhere, the units on the wall are selected as the target). Ranged Units will attack the enemy units gathered either on the wall or the adjoining towers, depending on which one has the lowest Endurance (if it’s equal everywhere, the units on the wall are selected as the target). If there are no defenders units in the choosen area (tower or wall) then Ranged Units will change a target to the next with the lowest Endurance (if it’s equal everywhere, the units on the wall are selected as the target).'};
    var SIEGE_AIM = {name: 'Target selection', description: '1,2,3,4 pips on D6 – attack on a wall section<br/>5 pips on D6 – attack on right-side tower<br/>6 pips on D6 – attack on left-side tower<br/><br/>Note: If a wall has an Endurance level of 1 or 2 it’s always a target (a D6 dice roll is not performed). If a wall has an Endurance level of 3 or more and one of adjoining towers has an Endurance level of 1 or 2 then the one with a lower value is chosen as a target (a D6 dice roll is not  performed)If both Towers have the same Endurance level a draw for one of them is performed.<br/><br/>After drawing for a forti!cation section to attack (wall or one of the towers), the target that is selected must either be the forti!cation or the units that are gathered on the forti!cation, depending on the Siege Machine’s type and it’s special qualities.'};

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
            { name: 'Archer', ST: 1, SU: 1, EN: 1, RST: 2, icon:'images/black.png', size:'10', traits: [RANGED_AIM, POISONED_BLADES, FORCES_OF_NATURE]},
            { name: 'Heavy footman', ST: 2, SU: 1, EN: 1, RST: 0, icon:'images/gray.png', size:'10', traits: [FLAT_DITCHES, FORCES_OF_NATURE]},
            { name: 'Assasin', ST: 4, SU: 3, EN: 3, RST: 0, icon:'images/brown.png', size:'10', traits: [LINE, FLAT_DITCHES, FORCES_OF_NATURE]},
            { name: 'Archer veteran', ST: 1, SU: 1, EN: 1, RST: 3, icon:'images/black.png', size:'16', traits: [RANGED_AIM, POISONED_BLADES, FORCES_OF_NATURE]},
            { name: 'Heavy footman veteran', ST: 3, SU: 2, EN: 2, RST: 0, icon:'images/gray.png', size:'16', traits: [FLAT_DITCHES, FORCES_OF_NATURE]},
            { name: 'Assasin veteran', ST: 5, SU: 4, EN: 4, RST: 0, icon:'images/brown.png', size:'16', traits: [LINE, FLAT_DITCHES, FORCES_OF_NATURE]}]
            .concat(createStandardSiegeMachines(SIEGE_AIM, []))
            .concat([{ name: 'Forest Shaman', ST: 0, SU: 0, EN: 0, RST: 0, icon:'images/forestshaman.png', size:'16', traits: [BOSS_TRAIT, BOSS_CAMOUFLAGE, BOSS_POISONS, FORCES_OF_NATURE]}]),
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
        },
        cantUseBlessingsAgainstThisInvader: true
    });
})();

