////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary convicted module
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('convicted', ['ui.bootstrap'])
    .controller('GameController', function($scope, $timeout) {

        //default global setup
        $scope.invaderTypes = INVADER_TYPES;
        $scope.round = 1;
        $scope.playersNum = 2;
        $scope.phase = 'gameSetup';
        $scope.defences = {
            'N': {wallEN: 0, unitsST: 0, protection: ""},
            'S': {wallEN: 0, unitsST: 0, protection: ""},
            'W': {wallEN: 0, unitsST: 0, protection: ""},
            'E': {wallEN: 0, unitsST: 0, protection: ""}
        }

        $scope.playerNumInfo = [
            {'extra_wood_per_player': '5'},
            {'extra_wood_per_player': '2'},
            {'extra_wood_per_player': '1'},
            {'extra_wood_per_player': '0'}
        ]

        $scope.invaderType = null;
        $scope.sendScouts = function() {
            $scope.invaderType = randomPropertyInObject($scope.invaderTypes);
        }

        $scope.$watch("round", function() {
            $scope.invaderType = null;
            $scope.forcesNearTown = null;
        })

        $scope.$watchGroup(['round', 'playersNum'], function () {
            var totalActions = 12 + (($scope.round == 10 || $scope.round == 15 || $scope.round == 20) ? 6 : 0)

            $scope.actionsPerPlayer = Math.floor(totalActions / $scope.playersNum)
            $scope.additionalFirstPlayerActions = totalActions - $scope.actionsPerPlayer * $scope.playersNum;
        })

        $scope.defendersReadyCb = function() {
            var arriveBehaviour = $scope.invaderType.arriveBehaviour;
            if (arriveBehaviour.avoidsMoats || arriveBehaviour.goesForWeakestWall) {
                $scope.phase = 'enemyGathersInformation';
            } else {
                $scope.arriveFromDirection(randomElementInArray(arriveBehaviour.directionDistribution));
            }
        }

        $scope.enemyGatheredInformationCb = function() {
            var arriveBehaviour = $scope.invaderType.arriveBehaviour;
            var defences = $scope.defences;
            var availableDistribution = arriveBehaviour.directionDistribution.slice(0)

            //find a weakest wall and remove any walls that are stronger
            if (arriveBehaviour.goesForWeakestWall) {
                var minSectionStrength = calculateMinSectionStrength($scope.defences);
                var dirIdsWithLowestStrength = [];

                for (var i in availableDistribution) {
                    var dirId = availableDistribution[i];
                    var strength = sectionStrength(dirId, $scope.defences);
                    if (strength <= minSectionStrength) {
                        dirIdsWithLowestStrength.push(dirId);
                    }
                }

                availableDistribution = dirIdsWithLowestStrength;
            }

            //are all directions moats? if not, remove all moats
            if (arriveBehaviour.avoidsMoats) {
                var moatsOnAllDirections = defences['N'].protection == 'Moat' &&
                                           defences['S'].protection == 'Moat' &&
                                           defences['E'].protection == 'Moat' &&
                                           defences['W'].protection == 'Moat';

                if (!moatsOnAllDirections) {
                    var dirIdsWithoutMoats = [];

                    for (var i in availableDistribution) {
                        var dirId = availableDistribution[i];
                        if (defences[dirId].protection !== 'Moat') {
                            dirIdsWithoutMoats.push(dirId);
                        }
                    }

                    availableDistribution = dirIdsWithoutMoats;
                }
            }

            console.log('availableDistribution', availableDistribution);

            $scope.arriveFromDirection(randomElementInArray(availableDistribution));
        }

        $scope.forcesNearTown = null;
        $scope.arriveFromDirection = function(mad) {
            $scope.MAD = mad;
            $scope.forcesNearTown = {'N': [], 'S': [], 'W': [], 'E': []}

            var forces = $scope.invaderType.forces[$scope.round-1];

            if (forces.other) {
                $scope.forcesNearTown['N'] = forces.other.slice(0);
                $scope.forcesNearTown['S'] = forces.other.slice(0);
                $scope.forcesNearTown['W'] = forces.other.slice(0);
                $scope.forcesNearTown['E'] = forces.other.slice(0);
            }

            if (forces.mad) {
                $scope.forcesNearTown[$scope.MAD] = forces.mad.slice(0);
            }

            if (forces.gate) {
                $scope.forcesNearTown['N'] = mergeForces($scope.forcesNearTown['N'], forces.gate);
            }

            $scope.allForcesNearTown = mergeForces(
                mergeForces($scope.forcesNearTown['N'], $scope.forcesNearTown['S']),
                mergeForces($scope.forcesNearTown['W'], $scope.forcesNearTown['E'])
            );

            console.log($scope.allForcesNearTown);

            $scope.phase = 'invaderArrived';
        }

        $scope.$watch('invaderType', function(invader) {
            if (invader) {
                $scope.currentMorale = invader.morale;
                $scope.loyalityTestResult = ''
            }
        });

        $scope.performLoyalityTest = function() {
            $scope.loyalityTestResult = '...'

            $timeout(function() {
                var result = rollDie();

                if (result > $scope.currentMorale) {
                    $scope.loyalityTestResult = 'Invaders run away!';
                } else {
                    $scope.loyalityTestResult = 'Invaders stay and fight';
                }

                $scope.currentMorale--;
            }, 250);

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
            controller: function ($scope, $modal, $log) {

                $scope.showUnitInfo = function (unitId) {
                    var modalInstance = $modal.open({
                        templateUrl: 'partials/unit_info.html',
                        scope: $scope,
                        controller: function ($scope, $modalInstance, $sce) {
                            $scope.unitType = $scope.invaderType.unitTypes[unitId];
                            $scope.ok = function () { $modalInstance.dismiss('ok'); }
                            $scope.showTrait = function (trait) {
                               return typeof trait.minDifficulty === 'undefined' || trait.minDifficulty <= $scope.invaderType.difficulty;
                            }
                            $scope.toTrusted = function(html_code) {
                                return $sce.trustAsHtml(html_code);
                            }
                        }
                    });
                };
            },
            templateUrl: 'partials/unit_vector_info.html'
        };
    })

    // Draw a resource pool
    .directive('resources', function() {
        return {
            restrict: 'E',
            scope: {
                resources: '='
            },
            template:
                '<resource type="\'wood\'" quantity="resources.wood"></resource> ' +
                '<resource type="\'stone\'" quantity="resources.stone"></resource> ' +
                '<resource type="\'iron\'" quantity="resources.iron"></resource> ' +
                '<resource type="\'gold\'" quantity="resources.gold"></resource>'
        };
    })

    // Draw a single resource quantity
    .directive('resource', function() {
        return {
            restrict: 'E',
            scope: {
                resourceQuantity: '=quantity',
                resourceType: '=type'
            },
            template:
                '<span ng-show="resourceQuantity > 0">' +
                    '{{resourceQuantity}} <img src="images/{{resourceType}}.png" width="32px"/>' +
                '</span>'
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

    // Draw a single resource quantity
    .directive('defencesEntry', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@',
                dirid: '@',
                defences: '='
            },
            templateUrl: 'partials/defences_entry.html'
        };
    })

