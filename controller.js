
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
    $scope.phones = [
        {name: 'Nexus S',
            snipet: 'Fast but got faster with Nexus S'},
        {name:'Motorola XOOM with Wi-Fi.',
            snipet: 'The Next, Next Generation Tablet.'},
        {name:'Motorola XOOM',
            snipet:'The next, next generation tablet'},
        {name:'Motorola XOOM with Wi-Fi.',
            snipet: 'The Next, Next Generation Tablet.'}

    ];

    //Filter

    var date = new Date();
    $scope.today = date;

    var date2 = angular.isDate(date);
    if (date2 == true) {
        $scope.date3 = 'Это время';
    }

    function User(name2) {
        this.name2 = name2;

        this.sayHi = function() {
            console.log( "Моё имя: " + this.name2 );
        };
    }

    var ivan = new User("Иван");

    ivan.sayHi();

});


/*function Todo ($scope) {
 $scope.totalTodos = 4;
 $scope.todo2 = 'its good!';

 $scope.todos = [
 {text:'Hellow Worlds', done:false},
 {text:'Build an app', done:false}
 ];

 $scope.action = function () {
 $scope.ex = 'OK'
 }
 $scope.ex = 'World';

 $scope.shito = 'shito';
 }
 */