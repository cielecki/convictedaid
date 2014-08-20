////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary convicted module
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('convicted', ['battle', 'resources', 'ui.bootstrap'])
    .controller('GameController', function($rootScope, $scope, $timeout, $log) {

        //default global setup
        $rootScope.invaderTypes = INVADER_TYPES;
        $rootScope.round = 1;
        $rootScope.playersNum = 2;
        $rootScope.phase = 'gameSetup';
        $rootScope.defences = {
            'N': {moat: false, weak: false},
            'S': {moat: false, weak: false},
            'W': {moat: false, weak: false},
            'E': {moat: false, weak: false}
        }

        $rootScope.playerNumInfo = [
            {'extra_wood_per_player': 5},
            {'extra_wood_per_player': 2},
            {'extra_wood_per_player': 1},
            {'extra_wood_per_player': 0}
        ]

        $rootScope.invaderType = null;
        $rootScope.sendScouts = function() {
            $rootScope.invaderType = randomPropertyInObject($rootScope.invaderTypes);
        }

        $rootScope.$watch("round", function() {
            $rootScope.invaderType = null;
            $rootScope.forcesNearTown = null;
        })

        $rootScope.$watchGroup(['round', 'playersNum'], function () {
            var totalActions = 12 + (($rootScope.round == 10 || $rootScope.round == 15 || $rootScope.round == 20) ? 6 : 0)

            $rootScope.actionsPerPlayer = Math.floor(totalActions / $rootScope.playersNum)
            $rootScope.additionalFirstPlayerActions = totalActions - $rootScope.actionsPerPlayer * $rootScope.playersNum;
        })

        $rootScope.defendersReadyCb = function() {
            var arriveBehaviour = $rootScope.invaderType.arriveBehaviour;
            if (arriveBehaviour.avoidsMoats || arriveBehaviour.goesForWeakestWall) {
                $rootScope.phase = 'enemyGathersInformation';
            } else {
                $rootScope.arriveFromDirection(randomElementInArray(arriveBehaviour.directionDistribution));
            }
        }

        $rootScope.enemyGatheredInformationCb = function() {
            var arriveBehaviour = $rootScope.invaderType.arriveBehaviour;
            var defences = $rootScope.defences;
            var availableDistribution = arriveBehaviour.directionDistribution.slice(0)

            //find a weakest wall and remove any walls that are stronger
            if (arriveBehaviour.goesForWeakestWall) {

                if (defences['N'].weak || defences['S'].weak || defences['E'].weak || defences['W'].weak) {
                    var dirIdsWithLowestStrength = [];

                    for (var i in availableDistribution) {
                        var dirId = availableDistribution[i];
                        if (defences[dirId].weak) {
                            dirIdsWithLowestStrength.push(dirId);
                        }
                    }
                }

                availableDistribution = dirIdsWithLowestStrength;
            }

            //are all directions moats? if not, remove all moats
            if (arriveBehaviour.avoidsMoats) {

                if (!defences['N'].moat || !defences['S'].moat || !defences['E'].moat || !defences['W'].moat) {
                    var dirIdsWithoutMoats = [];

                    for (var i in availableDistribution) {
                        var dirId = availableDistribution[i];
                        if (!defences[dirId].moat) {
                            dirIdsWithoutMoats.push(dirId);
                        }
                    }

                    availableDistribution = dirIdsWithoutMoats;
                }
            }

            console.log('availableDistribution', availableDistribution);

            $rootScope.arriveFromDirection(randomElementInArray(availableDistribution));
        }

        $rootScope.forcesNearTown = null;
        $rootScope.arriveFromDirection = function(mad) {
            $rootScope.MAD = mad;
            $rootScope.forcesNearTown = {'N': [], 'S': [], 'W': [], 'E': []}

            var forces = $rootScope.invaderType.forces[$rootScope.round-1];

            if (forces.other) {
                $rootScope.forcesNearTown['N'] = forces.other.slice(0);
                $rootScope.forcesNearTown['S'] = forces.other.slice(0);
                $rootScope.forcesNearTown['W'] = forces.other.slice(0);
                $rootScope.forcesNearTown['E'] = forces.other.slice(0);
            }

            if (forces.mad) {
                $rootScope.forcesNearTown[$rootScope.MAD] = forces.mad.slice(0);
            }

            if (forces.gate) {
                $rootScope.forcesNearTown['N'] = mergeForces($rootScope.forcesNearTown['N'], forces.gate);
            }

            $rootScope.allForcesNearTown = mergeForces(
                mergeForces($rootScope.forcesNearTown['N'], $rootScope.forcesNearTown['S']),
                mergeForces($rootScope.forcesNearTown['W'], $rootScope.forcesNearTown['E'])
            );

            $log.log('Forces near town:', $rootScope.allForcesNearTown);

            $rootScope.phase = 'invaderArrived';
        }
    })

    // Draw a unit vector
    .directive('forces', function() {
        return {
            restrict: 'E',
            scope: {
                forces: '=',
                invaderType: '=type'
            },
            controller: function ($rootScope, $modal, $log) {

                $rootScope.showUnitInfo = function (unitId) {
                    var modalInstance = $modal.open({
                        templateUrl: 'partials/unit_info.html',
                        scope: $rootScope,
                        controller: function ($rootScope, $modalInstance, $sce) {
                            $rootScope.unitType = $rootScope.invaderType.unitTypes[unitId];
                            $rootScope.ok = function () { $modalInstance.dismiss('ok'); }
                            $rootScope.showTrait = function (trait) {
                               return typeof trait.minDifficulty === 'undefined' || trait.minDifficulty <= $rootScope.invaderType.difficulty;
                            }
                            $rootScope.toTrusted = function(html_code) {
                                return $sce.trustAsHtml(html_code);
                            }
                        }
                    });
                };
            },
            templateUrl: 'partials/unit_vector_info.html'
        };
    })

    // Adds a range of values to a filtered array
    .filter('range', function() {
        return function(val, range) {
            range = parseInt(range);
            for (var i=0; i<range; i++)
              val.push(i);
            return val;
        };
    })
