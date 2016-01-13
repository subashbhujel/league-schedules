(function () {
    'user strict';

    angular.module('starter').controller('LeaguesCtrl', ['leagueApi', LeaguesCtrl]);

    function LeaguesCtrl(leagueApi) {
        var vm = this;

        vm.leaguesData = leagueApi.getLeagueData();
        vm.news= leagueApi.getNews();

        console.log(vm.leaguesData);
    };
})();