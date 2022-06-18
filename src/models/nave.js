const {Schema, model} = require('mongoose');
const { default: mongoose} = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const NaveSchema = new Schema({
	tipo: String,
	nombre: String,
	sistema: String,
	ton: String,
	pais: String,
	transporte: String,
	vuelo: String
});

module.exports = model('Nave', NaveSchema);