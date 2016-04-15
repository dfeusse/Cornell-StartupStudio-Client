console.log('controller.js called');

app.controller('MainCtrl', function($scope, ModelOutput) {

	console.log('outside ModelOutput()')

	ModelOutput.query(function(data) {
		console.log('INSIDE ModelOutput()')
		console.log('*******************************')
		console.log(data)
		console.log('*******************************')
		$scope.anna = data[0];
	}, function(error) {
		console.log('ERROR: ')
		console.log(error)
	})

	

}) // end of MainController