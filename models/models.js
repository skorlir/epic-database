var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//Must be listed in order due to reference dependencies
var models = [
	"Stage",
	"Account",
	"Person",
	"Startup"
];

models.forEach(function(modelName) {
	require("./" + modelName);
});