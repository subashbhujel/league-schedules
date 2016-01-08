(function () {
    'user strict';

    angular.module('starter').controller('LeaguesCtrl', ['leagueApi', LeaguesCtrl]);

    function LeaguesCtrl(leagueApi) {
        var vm = this;

        var leagues = leagueApi.getLeagues();
        var leagueData = leagueApi.getLeagueData();

        console.log(leagues, leagueData);
    };
})();