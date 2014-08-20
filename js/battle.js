////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary convicted module
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('battle', [])
    .controller('BattleController', function($scope, $rootScope, $timeout, $log) {
        $rootScope.battleResult = null;

        //TODO: all the skips
        //TODO: invader analysis for auto skips
        //TODO: defender analysis for auto skips
        //TODO: moving from root scope to gs.xxx and undo

        $scope.step = 1;
        $scope.currentMorale = $rootScope.invaderType.morale;
        $scope.invadersSuffered50PercentLosses = false;
        $scope.skipInvaderSiege = false;
        $scope.skipDefenderSiege = false;

        function invaderHasSiege() {
            for (var i in $rootScope.allForcesNearTown) {
                if ($rootScope.allForcesNearTown[i] > 0 && $rootScope.invaderType.unitTypes[i].activateDuringSiegePhase) {
                    return true;
                }
            }

            return false;
        }

        $scope.nextStep = function() {
            $scope.step += 1;

            if ($scope.step == 3 && $scope.skipDefenderSiege) {
                $scope.nextStep();
            }

            if ($scope.step == 4 && (!invaderHasSiege() || $scope.skipInvaderSiege)) {
                $scope.nextStep();
            }

            if ($scope.step > 14) {
                $scope.step = 3;
            }
        }

        $scope.invaderDefeated = function() {
            $rootScope.battleResult = $rootScope.invaderType.name + " are defeated!";
            $rootScope.phase = 'looting';
        }

        $scope.performLoyalityTest = function() {
            $scope.invadersSuffered50PercentLosses = true;
            $scope.loyalityTestResult = '...'

            $timeout(function() {
                var result = rollDie();

                if (result > $scope.currentMorale) {
                    $rootScope.battleResult = 'Invaders ran away! (Rolled ' + result + ' and the current morale was ' + $scope.currentMorale + ')';
                    $rootScope.phase = 'looting';
                } else {
                    $rootScope.battleResult = 'Invaders stay and fight (Rolled ' + result + ' and the current morale was ' + $scope.currentMorale + ')';
                    $scope.currentMorale--;
                }

            }, 250);
        }
    });