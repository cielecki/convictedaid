////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary convicted module
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('resources', [])
    .controller('LootController', function($scope, $rootScope, $timeout, $log) {

        function distributeLoot() {

            //prepare empty loots
            $scope.playersLoot = [];
            for (var i = 0; i < $rootScope.playersNum; i++) {
                $scope.playersLoot.push({'wood':  0, 'stone': 0, 'iron': 0, 'gold': 0})
            }

            //prepare loot to distribute
            var invaderLoot = $rootScope.invaderType.loot[$rootScope.round-1];
            var loot = {
                'wood':  invaderLoot.wood + $rootScope.playerNumInfo[$rootScope.playersNum - 1].extra_wood_per_player * $rootScope.playersNum,
                'stone': invaderLoot.stone,
                'iron': invaderLoot.iron,
                'gold': invaderLoot.gold
            }

            //distribute
            $log.log('Distributing', loot);
            var playerNum = 0;
            while (true) {
                var playerLoot = $scope.playersLoot[playerNum];

                if (loot.gold > 0) {
                    playerLoot.gold += 1;
                    loot.gold -= 1;
                } else if (loot.iron > 0) {
                    playerLoot.iron += 1;
                    loot.iron -= 1;
                } else if (loot.stone > 0) {
                    playerLoot.stone += 1;
                    loot.stone -= 1;
                } else if (loot.wood > 0) {
                    playerLoot.wood += 1;
                    loot.wood -= 1;
                } else {
                    break;
                }

                playerNum++;

                if (playerNum == $rootScope.playersNum) {
                    playerNum = 0;
                }
            }
        }

        distributeLoot();
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
                    '{{resourceQuantity}} <img ng-src="images/{{resourceType}}.png" width="32px"/>' +
                '</span>'
        };
    })
