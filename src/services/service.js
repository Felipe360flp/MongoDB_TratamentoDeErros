const personagem = require('../models/personagens_schema');

  const PersonagensService = async  () => {
    const personagens = await personagem.find();
    return personagens;
  };
  
  const PersonagensByIdService = async (id) => {
    const personagens = await personagem.findById(id);
    return personagens;
  };

  const addpersonagensService = async (novo_personagem) =>{
    const addpersonagem = await personagem.create(novo_personagem); 
    return addpersonagem;
};

const updateService = async (id, editpersonagem) => {
const updatepersonagem = await personagem.findByIdAndUpdate(id,editpersonagem);
return updatepersonagem;
};

const deleteService = async (id) => {
  return await personagem.findByIdAndDelete(id);

}
  
module.exports ={
    PersonagensService,
    PersonagensByIdService,
    addpersonagensService,
    updateService,
    deleteService
};