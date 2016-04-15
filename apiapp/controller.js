console.log('controller.js called');

app.controller('MainCtrl', function($scope, $rootScope, ModelOutput) {

	console.log('outside ModelOutput()')

	ModelOutput.query(function(data) {
		console.log('INSIDE ModelOutput()')
		console.log('*******************************')
		console.log(data)
		console.log('*******************************')
		$rootScope.anna = data[0];


		// Really wish I didn't have to put all this in this function

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


		// end of stuff

	}, function(error) {
		console.log('ERROR: ')
		console.log(error)
	})

	/*
	setTimeout(function(){ 
		console.log("Hello"); 
		console.log($rootScope.anna)
	}, 200);
	*/

}) // end of MainController