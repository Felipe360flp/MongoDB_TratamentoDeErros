const mongooose = require('mongoose');

const personagemSchema = new mongooose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    forca: { type: Number, required: true },
    resistencia: { type: Number, required: true },
    velocidade: { type: Number, required: true },
    inteligencia: { type: Number, required: true },
  });

  const personagem = mongooose.model('personagens',personagemSchema);

  module.exports = personagem;