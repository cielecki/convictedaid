////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utility functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Returns a random element in a dictionary
var randomPropertyInObject = function (object) {
  var keys = Object.keys(object);
  return object[keys[Math.floor(keys.length * Math.random())]];
};

// Returns a random element in an array
var randomElementInArray = function(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

// Rolls a die and returns the result
function rollDie(sides) {
    if(!sides) sides = 6;
    with(Math) return 1 + floor(random() * sides);
}

// Merges two vectors representing counts of unit types
function mergeForces(force1, force2) {
    var result = [];

    for (var i = 0; i < force1.length || i < force2.length; i++) {
        var sum = 0;

        if (i < force1.length) {
            sum += force1[i];
        }

        if (i < force2.length) {
            sum += force2[i];
        }

        result.push(sum);
    }

    return result;
}

// Rolls a die and returns the result
function sectionStrength(dirid, defences) {
    var defence = defences[dirid];

    var factor = {
        "" : 1.0,
        "Ditch" : 1.1,
        "Sharpened stakes" : 1.1,
        "Moat" : 1.3
    }[defence.protection];

    return (defence.wallEN + defence.unitsST) * factor;
}

// Rolls a die and returns the result
function calculateMinSectionStrength(defences) {
    var dirIds = ['N', 'S', 'W', 'E'];
    var minSectionStrength = null;

    for (var i in dirIds) {
        var dirId = dirIds[i];
        var currentSectionStrength = sectionStrength(dirId, defences);

        if (minSectionStrength === null || currentSectionStrength < minSectionStrength) {
            minSectionStrength = currentSectionStrength;
        }
    }

    return minSectionStrength;
}