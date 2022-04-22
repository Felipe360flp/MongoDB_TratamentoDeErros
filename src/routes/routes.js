const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller.js');

router.get('/',controller.homeController); 
  
router.get('/find-personagem',controller.getAll);

router.get('/find-personagem/:id',controller.getBYID);
  
router.post('/add-personagens',controller.add);

router.put('/update-personagens/:id', controller.update);

router.delete("/delete-personagens/:id",controller.del);

module.exports = router;
