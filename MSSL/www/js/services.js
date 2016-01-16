angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Andrew Jostlin',
        lastText: 'Did you get the ice cream?',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

.factory('News', function () {
    var news = [{
        id: 0,
        detail: 'Game is cancelled.',
        date:'1/1/2016'
    },
    {
        id: 1,
        detail: 'Ref is assigned',
        date: '1/8/2016'
    },
    {
        id: 2,
        detail: 'Field is occupied',
        date: '1/15/2016'
    },
    {
        id: 3,
        detail: 'Good game. Result 1/2',
        date: '1/1/2016'
    }];

    return {
        all: function () {
            return news;
        },
        remove: function (newsItem) {
            news.splice(news.indexOf(newsItem), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < news.length; i++) {
                if (news[i].id === parseInt(chatId)) {
                    return news[i];
                }
            }
            return null;
        }
    };
})

.factory('Games', function () {
    //var Games = [{
    //    id: 0,
    //    detail: 'Chargers vs Falcons',
    //    date: '1/1/2016',
    //    field: '6',
    //    time: '10:00am'
    //},
    //{
    //    id: 1,
    //    detail: 'Chargers vs Showtime',
    //    date: '1/8/2016',
    //    field: '3',
    //    time: '1:00pm'
    //},
    //{
    //    id: 2,
    //    detail: 'Chargers vs Charmander',
    //    date: '1/15/2016',
    //    field: '5',
    //    time: '6:50pm'
    //}];

    var Games = JSON.parse('[{"id":4764,"location":"Field 5","locationUrl":"http://goo.gl/maps/DlXFH","locationId":1003,"team1":"Chargers","team1Id":200,"team2":"Falcons","team2Id":201,"team1Score":"46","team2Score":"35","time":"2014-05-02T18:00:00"},{"id":4767,"location":"Field 3","locationUrl":"http://goo.gl/maps/DlXFH","locationId":1011,"team1":"HC Elite Green- Hollwedel 7th","team1Id":3235,"team2":"Team Dedication Gold  7th","team2Id":3240,"team1Score":"36","team2Score":"41","time":"2014-05-02T18:00:00"},{"id":4768,"location":"Commons","locationUrl":"http://goo.gl/maps/DlXFH","locationId":1011,"team1":"HC Elite Eudell 8th","team1Id":3245,"team2":"Team Dedication 8th","team2Id":3248,"team1Score":"46","team2Score":"29","time":"2014-05-02T19:00:00"},{"id":4765,"location":"Field 5","locationUrl":"http://goo.gl/maps/DlXFH","locationId":1003,"team1":"HC Elite White - Hollwedel 7th","team1Id":3236,"team2":"Columbia Ravens - Held 7th","team2Id":3238,"team1Score":"32","team2Score":"30","time":"2014-05-02T19:00:00"},{"id":4770,"location":"Field 3","locationUrl":"http://goo.gl/maps/xvgPm","locationId":1004,"team1":"HC Elite - Dan Nap 11th","team1Id":3270,"team2":"MD Hoopmasters - Neville 11th","team2Id":3272,"team1Score":"64","team2Score":"33","time":"2014-05-02T19:15:00"},{"id":4766,"location":"Commons","locationUrl":"http://goo.gl/maps/DlXFH","locationId":1003,"team1":"HC Elite Stefan 10th","team1Id":3263,"team2":"MD Hoopmasters - Woodyard 10th","team2Id":3271,"team1Score":"77","team2Score":"46","time":"2014-05-02T20:00:00"}]');

    return {
        all: function () {
            return Games;
        },
        remove: function (game) {
            Games.splice(Games.indexOf(game), 1);
        },
        get: function (game) {
            for (var i = 0; i < Games.length; i++) {
                if (Games[i].id === parseInt(game)) {
                    return Games[i];
                }
            }
            return null;
        }
    };
})

.factory('Standing', function () {
    //var Standing = JSON.parse('[{"divisionName":"Premier Division","divisionTeams":[{"id":100,"name":"Blue Salad Bown","Manager":"Subash Bhujel"},{"id":101,"name":"DeJong","Manager":"Jacob Silverman"},{"id":102,"name":"Stone","Manager":"Eddie OMalley"},{"id":103,"name":"Seaturks","Manager":"Marty Libinski"},{"id":104,"name":"ShowTime","Manager":"Darryl Adams"},{"id":105,"name":"Perspolis","Manager":"Don Carpenter"},{"id":106,"name":"The POT","Manager":"Don Carpenter"},{"id":107,"name":"LIVE","Manager":"Don Carpenter"},{"id":108,"name":".net United","Manager":"Don Carpenter"},{"id":106,"name":"Red Salad Bowl","Manager":"Don Carpenter"}]},{"divisionName":"First Division","divisionTeams":[{"id":200,"name":"FC Chargers","Manager":"Terrance Taylor"},{"id":201,"name":"Arsenal","Manager":"Anthony Tookes"},{"id":202,"name":"Fossil","Manager":"Jordan Knisley"},{"id":203,"name":"Camoteros","Manager":"Eric Levi"},{"id":204,"name":"Falcons","Manager":"Brian Jackson"},{"id":205,"name":"Pickup United","Manager":"Brian Jackson"},{"id":206,"name":"Bad Wolf","Manager":"Brian Jackson"},{"id":207,"name":"Aim for the .net","Manager":"Brian Jackson"},{"id":208,"name":"WPS","Manager":"Brian Jackson"}]}]');
    var Standing = JSON.parse('[{"divisionName":"Premier Division","divisionStandings":[{"teamId":100,"teamName":"Blue Salad Bowl","wins":3,"losses":1,"winningPct":".750","pointsFor":141,"pointsAgainst":126,"pointsDiff":15},{"teamId":101,"teamName":"DeJong","wins":3,"losses":1,"winningPct":".750","pointsFor":196,"pointsAgainst":191,"pointsDiff":5},{"teamId":102,"teamName":"Stone","wins":2,"losses":2,"winningPct":".500","pointsFor":156,"pointsAgainst":132,"pointsDiff":24},{"teamId":103,"teamName":"Seaturks","wins":2,"losses":2,"winningPct":".500","pointsFor":147,"pointsAgainst":124,"pointsDiff":23},{"teamId":104,"teamName":"Persopolis","wins":2,"losses":2,"winningPct":".500","pointsFor":113,"pointsAgainst":123,"pointsDiff":-10},{"teamId":105,"teamName":"The Pot","wins":0,"losses":0,"winningPct":".000","pointsFor":0,"pointsAgainst":0,"pointsDiff":0}]},{"divisionName":"First Division","divisionStandings":[{"teamId":200,"teamName":"Chargers","wins":4,"losses":1,"winningPct":".800","pointsFor":187,"pointsAgainst":158,"pointsDiff":29},{"teamId":201,"teamName":"Arsenal","wins":2,"losses":2,"winningPct":".500","pointsFor":149,"pointsAgainst":133,"pointsDiff":16},{"teamId":202,"teamName":"Fossil","wins":1,"losses":3,"winningPct":".250","pointsFor":108,"pointsAgainst":155,"pointsDiff":-47},{"teamId":203,"teamName":"Camoteros","wins":0,"losses":0,"winningPct":".000","pointsFor":0,"pointsAgainst":0,"pointsDiff":0},{"teamId":204,"teamName":"Falcons","wins":0,"losses":5,"winningPct":".000","pointsFor":163,"pointsAgainst":218,"pointsDiff":-55}]}]');
    //var Games = [{
    //    id: 0,
    //    detail: 'Chargers vs Falcons',
    //    date: '1/1/2016',
    //    field: '6',
    //    time: '10:00am'
    //},
    //{
    //    id: 1,
    //    detail: 'Chargers vs Showtime',
    //    date: '1/8/2016',
    //    field: '3',
    //    time: '1:00pm'
    //},
    //{
    //    id: 2,
    //    detail: 'Chargers vs Charmander',
    //    date: '1/15/2016',
    //    field: '5',
    //    time: '6:50pm'
    //}];

    return {
        all: function () {
            return Standing;
        },
        remove: function (game) {
            Standing.splice(Standing.indexOf(game), 1);
        },
        get: function (game) {
            for (var i = 0; i < Standing.length; i++) {
                if (Standing[i].id === parseInt(game)) {
                    return Standing[i];
                }
            }
            return null;
        }
    };
});

