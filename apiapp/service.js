// https://api.myjson.com/bins/1zduw

console.log('service.js called');

app.factory("ModelOutput", function($resource) {
	return $resource("https://api.myjson.com/bins/1i8ko");
})