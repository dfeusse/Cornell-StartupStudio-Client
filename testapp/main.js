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

		$scope.anna = {
			name: "Anna Kournikova",
			data: [{
				day: "1/1",
				exercise: "sauna",
				minutes: 20
			}, {
				day: "1/2",
				exercise: "squats",
				minutes: 50
			}],
			img: "http://www.strangesports.com/images/content/133940.jpg" /*,
			data = [{
				day: "1/1/2016",
				activity: "squat",
				minutes: 50
			}, {
				day: "1/2/2016",
				activity: "sauna",
				minutes: 20
			}] */
		};

		$scope.someValue = 'Hello';	
	} // end of MainCtrl

	angular
		.module('app', [])
		.controller('MainCtrl', MainCtrl);

// end of main anonymous function
})();