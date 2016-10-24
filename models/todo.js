var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var chatAdsSchema   = new Schema({
	name: String,
	tag : String
});

module.exports = mongoose.model('ads', chatAdsSchema);