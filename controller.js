
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
    $scope.phones = [
        {'name': 'Nexus S',
            'snipet': 'Fast but got faster with Nexus S',
        'status': true,
        'priority':1},
        {'name':'Motorola XOOM with Wi-Fi.',
            'snipet': 'The Next, Next Generation Tablet.',
            'status': false,
            'priority':2},
        {'name':'Motorola XOOM',
            'snipet':'The next, next generation tablet',
            'status': true,
            'priority':3}
    ];

    //Filter
$scope.doneAndFilter = function (phoneItem) {
    return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
}

    var date = new Date();
    var date2 = angular.isDate(date);
    if (date2 == true) {
        $scope.date3 = 'Сегодня';
        $scope.today = date;
    }

});