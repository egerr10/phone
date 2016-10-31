
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    $scope.title = 'Телефоны';

    $http.get('phones.json').success(function (data, status, headers, config) {
    console.log('this id Date', data, '\n\nThis is Status', status, '\n\nThis is Headers',
        headers, '\n\nThis is config', config);
        $scope.phones = data;
    });


    /*$scope.phones = [
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
*/
    var date = new Date();
    var date2 = angular.isDate(date);
    if (date2 == true) {
        $scope.date3 = 'Сегодня';
        $scope.today = date;
    }

    //Filter
$scope.doneAndFilter = function (phoneItem) {
    return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
};

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };

    $scope.isSortUp = function (fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    };

    $scope.isSortDown = function (fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    };
});