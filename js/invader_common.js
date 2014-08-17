////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Invading armies common stuff
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

var INVADER_TYPES = {};

function addInvaderType(type) {
    INVADER_TYPES[type.name] = type;
}