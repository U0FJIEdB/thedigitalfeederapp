var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	unique_id: Number,
	email: String,
	name: String,
	Password: String,
	RePassword: String
}),
Users = mongoose.model('Users', userSchema);

module.exports = Users;