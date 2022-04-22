const personagem = require("../models/personagens_schema.js");
const service = require("../services/service.js");
const mongoose = require('mongoose');

const homeController = (req,res) =>{
	res.send("home");
};

const getAll = async (req, res) => {	
	const personagens = await service.PersonagensService();
	res.send(personagens);	
} 

const getBYID = async (req,res) => {
	const idParam = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(idParam)) {
		res
		  .status(400)
		  .send({ message: 'ID inválido!' });
		return;
	  }

	  const personagembyid = await service.PersonagensByIdService(idParam);

	  if (!personagembyid) {
		return res.status(404).send({ message: 'personagem não encontrado!' });
	  }
	
	  res.send(personagembyid);
}

const add = async (req,res) => {
	const personagem = req.body;
  
	if(
		!personagem ||
		!personagem.nome ||
		!personagem.idade  
	){
		return res.status(404).send({message: 'Os Campos nome e idade são obrigatórios!'});	  
	}else{
		res.send({message:"Seu personagem foi criado com sucesso!"});
	}
	const addpersonagem = await service.addpersonagensService(personagem);
	res.send(addpersonagem);	
};

const update = async (req, res) => {
	const idParam = req.params.id;
	const updatepersonagem = req.body;

	if (!mongoose.Types.ObjectId.isValid(idParam)) {
		res.status(400).send({ message: 'ID inválido!' });
		return;
	}

	const buscarPersonagem = await service.PersonagensByIdService(idParam);

	if(!buscarPersonagem){
		return res.status(404).send({message:"Personagem não encontrado!"});
	}

	if(
		!updatepersonagem ||
		!updatepersonagem.nome ||
		!updatepersonagem.idade 
	){
		res.status(404).send({message: 'Os Campos nome e tipo são obrigatórios!'});	  
	}else{
		res.send({message:"Seu personagem foi criado com sucesso!"});
	}
	const alterpersonagem = await service.updateService(idParam,updatepersonagem);
	res.send(alterpersonagem);

};
  
const del = async (req, res) => {
	const idParam = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(idParam)) {
		res.status(400).send({ message: 'ID inválido!' });
		return;
	}
	
	await service.deleteService(idParam);

	res.send({ message: 'Personagem deletado!' });
};

module.exports =
{
	homeController,
	getAll,
	getBYID,
	add,
	update,
	del
};
