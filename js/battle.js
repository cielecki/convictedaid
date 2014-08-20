////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary convicted module
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('battle', [])
    .controller('BattleController', function($scope, $rootScope, $timeout, $log) {
        //TODO: moving from root scope to gs.xxx and undo

        $scope.subPhase = 'start';
        $scope.currentMorale = $rootScope.invaderType.morale;
        $scope.invadersSuffered50PercentLosses = false;

        var totalCount = 0;
        for (var i in $scope.allForcesNearTown) {
            totalCount += $scope.allForcesNearTown[i];
        }

        $scope.unitsKilledToBreakMorale = Math.ceil(totalCount/2);

        $scope.nextRoundOfCombat = function () {
            var texts = [$rootScope.invaderType.name + " continue to fight!", $rootScope.invaderType.name + " fight on!"]
            $rootScope.battleResult = $rootScope.battleResult == texts[0] ? texts[1] : texts[0];
            $scope.subPhase = 'battleOngoing';
        }

        $scope.invaderDefeated = function() {
            $rootScope.battleResult = $rootScope.invaderType.name + " are defeated!";
            $rootScope.phase = 'looting';
            $rootScope.distributeLoot();
        }

        $scope.performLoyaltyTest = function() {
            $scope.invadersSuffered50PercentLosses = true;

            var result = rollDie();

            if (result > $scope.currentMorale) {
                $rootScope.battleResult = 'Invaders ran away! (Rolled ' + result + ' and the current morale was ' + $scope.currentMorale + ')';
                $rootScope.phase = 'looting';
            } else {
                $rootScope.battleResult = 'Invaders stay and fight (Rolled ' + result + ' and the current morale was ' + $scope.currentMorale + ')';
                $scope.currentMorale--;
                $scope.subPhase = 'battleOngoing';
            }
        }
    });