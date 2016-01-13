angular.module('starter.controllers', [])

.controller('NewsCtrl', function ($scope, News) {
    $scope.news = News.all();
})
.controller('GamesCtrl', function ($scope, $state, Games) {
    $scope.games = Games.all();

    $scope.selectGame = function () {
        $state.go("tab.news");
    }
})
.controller('StandingCtrl', function ($scope, Standing) {
    $scope.standing = Standing.all();
    console.log($scope.standing);

    $scope.remove = function (team) {
        Standing.remove(team);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
