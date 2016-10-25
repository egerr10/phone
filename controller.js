
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
    var date2 = angular.isDate(date);
    if (date2 == true) {
        $scope.date3 = 'Сегодня';
        $scope.today = date;
    }

    function User(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        this.sayHi = function() {
            console.log('Моё имя: ' + this.name + ' ' + this.surname + ' ' + this.age);
        };

        this.printPage = function () {
            $scope.printThis = 'Моё имя: ' + this.name + ' ' + this.surname;
            $scope.printAge = this.age;
        }
    }

    var ivan = new User('Иван', 'Петров', '25');
    ivan.sayHi();
    ivan.printPage();

    var ivan2 = new User('Иван2', 'Петров2', '25');
    ivan2.sayHi();

    var ivan3 = new User('Иван3', 'Петров3', '25');
    ivan3.sayHi();

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