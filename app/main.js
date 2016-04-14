console.log('main.js called');

(function() {

	function MainCtrl($scope) {
		$scope.workouts = [{
			name: 'Bench Press',
			id: 01,
			img: 'www....com'
		}, {
			name: 'Squat',
			id: 02,
			img: 'www....com'
		}, {
			name: 'Bicep Curl',
			id: 03,
			img: 'www....com'
		}, {
			name: 'Back',
			id: 03,
			img: 'www....com'
		}, {
			name: 'Legs',
			id: 03,
			img: 'www....com'
		}];

		$scope.anna = {
			name: "Anna Kournikova",
			username: "@annak",
			email: "annak@gmail.com",
			location: "New York, NY",
			joined: "March 5, 2016",
			data: [{
				day: "1/1",
				exercise: "Bicep Curl",
				minutes: 20,
				calories: 250
			}, {
				day: "1/2",
				exercise: "Legs",
				minutes: 50,
				calories: 450
			}, {
				day: "1/3",
				exercise: "Sauna",
				minutes: 20,
				calories: 50
			}, {
				day: "1/4",
				exercise: "Bicep Curl",
				minutes: 50,
				calories: 150
			}, {
				day: "1/5",
				exercise: "Legs",
				minutes: 20,
				calories: 350
			}, {
				day: "1/6",
				exercise: "Legs",
				minutes: 50,
				calories: 350
			}, {
				day: "1/7",
				exercise: "Bicep Curl",
				minutes: 20,
				calories: 150
			}, {
				day: "1/8",
				exercise: "Sauna",
				minutes: 50,
				calories: 50
			}, {
				day: "1/9",
				exercise: "Legs",
				minutes: 50,
				calories: 550
			}, {
				day: "1/10",
				exercise: "Bicep Curl",
				minutes: 20,
				calories: 250
			}, {
				day: "1/11",
				exercise: "Squats",
				minutes: 50,
				calories: 250
			}, {
				day: "1/12",
				exercise: "Sauna",
				minutes: 20,
				calories: 50
			}, {
				day: "1/13",
				exercise: "Legs",
				minutes: 50,
				calories: 750
			}, {
				day: "1/14",
				exercise: "Legs",
				minutes: 20,
				calories: 250
			}, {
				day: "1/15",
				exercise: "Squats",
				minutes: 50,
				calories: 450
			}
			],
			img: "../img/annaFace02.png" /*,
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

		$scope.getTotals = function() {
			var totalMins = 0;
			var totalCals = 0;
			for (var i = 0; i < $scope.anna.data.length; i++) {
				var minutes = $scope.anna.data[i].minutes;
				var calories = $scope.anna.data[i].calories;
				//var mins = $scope.anna.data.minutes[i];
				totalMins += minutes;
				totalCals += calories;
			}
			var totals = {}
			totals.mins = totalMins; 
			totals.cals = totalCals;
			totals.avgMins = totalMins / $scope.anna.data.length;
			totals.avgCals = totalCals / $scope.anna.data.length;
			console.log(totals)
			return totals;
		};

		console.log($scope.getTotals())

		$scope.getLength = function() {
			return $scope.anna.data.length;
		};

		$scope.cardioScore = function() {
			var score;
			for (var i = 0; i < $scope.anna.data.length; i++) {
			}
			return 80;
		};

		$scope.flexibilityScore = function() {
			for (var i = 0; i < $scope.anna.data.length; i++) {
			}
			return 90;
		};

		$scope.strengthScore = function() {
			for (var i = 0; i < $scope.anna.data.length; i++) {
			}
			return 40;
		};

	} // end of MainCtrl

	angular
		.module('app', [])
		.controller('MainCtrl', MainCtrl);

// end of main anonymous function
})();