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
    var Games = [{
        id: 0,
        detail: 'Chargers vs Falcons',
        date: '1/1/2016',
        field: '6',
        time: '10:00am'
    },
    {
        id: 1,
        detail: 'Chargers vs Showtime',
        date: '1/8/2016',
        field: '3',
        time: '1:00pm'
    },
    {
        id: 2,
        detail: 'Chargers vs Charmander',
        date: '1/15/2016',
        field: '5',
        time: '6:50pm'
    }];

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
    var Standing = JSON.parse('[{"divisionName":"Premier Division","divisionTeams":[{"id":100,"name":"Blue Salad Bown","Manager":"Subash Bhujel"},{"id":101,"name":"DeJong","Manager":"Jacob Silverman"},{"id":102,"name":"Stone","Manager":"Eddie OMalley"},{"id":103,"name":"Seaturks","Manager":"Marty Libinski"},{"id":104,"name":"ShowTime","Manager":"Darryl Adams"},{"id":105,"name":"Perspolis","Manager":"Don Carpenter"},{"id":106,"name":"The POT","Manager":"Don Carpenter"},{"id":107,"name":"LIVE","Manager":"Don Carpenter"},{"id":108,"name":".net United","Manager":"Don Carpenter"},{"id":106,"name":"Red Salad Bowl","Manager":"Don Carpenter"}]},{"divisionName":"First Division","divisionTeams":[{"id":200,"name":"FC Chargers","Manager":"Terrance Taylor"},{"id":201,"name":"Arsenal","Manager":"Anthony Tookes"},{"id":202,"name":"Fossil","Manager":"Jordan Knisley"},{"id":203,"name":"Camoteros","Manager":"Eric Levi"},{"id":204,"name":"Falcons","Manager":"Brian Jackson"},{"id":205,"name":"Pickup United","Manager":"Brian Jackson"},{"id":206,"name":"Bad Wolf","Manager":"Brian Jackson"},{"id":207,"name":"Aim for the .net","Manager":"Brian Jackson"},{"id":208,"name":"WPS","Manager":"Brian Jackson"}]}]');
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

