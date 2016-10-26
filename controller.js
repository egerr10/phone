
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
    $scope.phones = [
        {'name': 'Nexus S',
            'snipet': 'Fast but got faster with Nexus S',
        'status': true},
        {'name':'Motorola XOOM with Wi-Fi.',
            'snipet': 'The Next, Next Generation Tablet.',
            'status': false},
        {'name':'Motorola XOOM',
            'snipet':'The next, next generation tablet',
            'status': true}
    ];

    //Filter

    var date = new Date();
    var date2 = angular.isDate(date);
    if (date2 == true) {
        $scope.date3 = 'Сегодня';
        $scope.today = date;
    }

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

//конструктор
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

 var ivan2 = new User('Иван', 'Петров', '26');
 ivan2.sayHi();
 ivan2.printPage();

 var ivan3 = new User('Иван', 'Петров', '27');
 ivan3.sayHi();
 */