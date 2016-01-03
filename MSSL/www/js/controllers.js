angular.module('starter.controllers', [])

.controller('NewsCtrl', function ($scope, News) {
    $scope.news = News.all();
})
.controller('GamesCtrl', function ($scope, Games) {
    $scope.games = Games.all();
})
.controller('StandingCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
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
