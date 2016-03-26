console.log('main.js called');

(function() {

	function MainCtrl($scope) {
		$scope.items = [{
			name: 'Bench press',
			id: 7297510
		}, {
			name: 'Squat',
			id: 0278916
		}, {
			name: 'Curl',
			id: 2389017
		}];
	}


	angular
		.module('app', [])
		.controller('MainCtrl', MainCtrl);

// end of main anonymous function
})();