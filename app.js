angular.module('harleyDavidson', [])
.controller('mainController', function($scope){
	$scope.sortType = 'year';
	$scope.sortReverse = false;
	$scope.searchEngines = '';

	$scope.engines = [
		{ name: 'Evo', year: '1986 - ', displacement: 883},
		{ name: 'Twin Cam', year: '1998 - ', displacement: 1584},
		{ name: 'Panhead', year: '1948 - 1965', displacement: 1207},
		{ name: 'Shovelhead', year: '1966 - 1984', displacement: 1208},
		{ name: 'Knucklehead', year: '1937 - 1947', displacement: 1000},

	];

});